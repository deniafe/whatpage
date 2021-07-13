<template>
  <div class="w-screen bg-secondary" :style="divStyle">
    <Alert />
    <EmailConfirm />
    <OfferDialog />
    <AccDetailsDialog />
    <ShareNav />
    <div class="px-6 lg:hidden">
      <Profile />
      <Tabs @tab="change" />
      <component :is="content"></component>
    </div>
    <div class="px-6 hidden lg:grid grid-cols-5 container mx-auto">
      <div class="lg:col-span-2 mx-8">
        <Actions />
      </div>
      <div class="lg:col-span-3 mx-8 pr-6">
        <Profile />
        <Tabs @tab="change" />
        <component :is="content"></component>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceDetector from 'device-detector-js'
import { db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
const Actions = () => import('../components/Actions')
const Rewards = () => import('../components/Rewards')
const Leaderboards = () => import('../components/Leaderboards')
export default {
  name: 'Share',
  data() {
    return {
      browserHeight: '',
      tab: 'rewards',
      unsubscribe: '',
    }
  },
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:url', content: 'http://devrl.link' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Deeviral Page' },
      {
        property: 'og:description',
        content: 'The best Viral marketing platform to use',
      },
      {
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/telephy-147d6.appspot.com/o/PzJDgebXYOZNbdWE20sOOHhXyYF2%2F342d947fa1e53-A%20whole%20new%20look.jpg?alt=media&token=7b75766f-4786-40b4-bd9e-1c11526e8e32',
      },
    ],
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
      authUser: 'auth/user',
    }),
    divStyle() {
      return {
        minHeight: this.browserHeight + 'px',
      }
    },
    content() {
      let result
      if (this.tab === 'actions') result = Actions
      if (this.tab === 'rewards') result = Rewards
      if (this.tab === 'leaderboards') result = Leaderboards
      return result
    },
  },
  watch: {
    authUser(newValue, oldValue) {
      if (newValue) {
        this.getUser()
        this.checkOffer()
        console.log('New Value: ', newValue)
      }
    },
  },
  mounted() {
    this.$store.dispatch('auth/checkAuth')
    this.browserHeight = document.body.clientHeight
    this.checkWidth()
    this.detectDevice()
  },
  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe()
  },
  methods: {
    change(tab) {
      this.tab = tab
    },
    detectDevice() {
      const deviceDetector = new DeviceDetector()
      const userAgent = navigator.userAgent
      const device = deviceDetector.parse(userAgent)
      if (device.os.name === 'Android') {
        this.$store.commit('app/SET_DEVICE', 'android')
      } else if (device.os.name === 'Windows') {
        this.$store.commit('app/SET_DEVICE', 'desktop')
      } else if (device.os.name === 'iOS') {
        if (device.device.model === 'iPad') {
          this.$store.commit('app/SET_DEVICE', 'ipad')
        } else if (device.device.model === 'iPhone') {
          this.$store.commit('app/SET_DEVICE', 'iphone')
        }
      }
      console.log(device.os)
    },
    checkWidth() {
      const width = document.body.clientWidth
      if (width < 1024) {
        this.tab = 'actions'
      }
    },
    getUser() {
      const vm = this
      this.unsubscribe = db
        .collection('users')
        .where('email', '==', vm.user.email)
        .onSnapshot(
          (snapshot) => {
            // ...
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                const user = change.doc.data()
                user.id = change.doc.id
                vm.$store.commit('app/SET_USER', user)
              }
              if (change.type === 'modified') {
                const user = change.doc.data()
                user.id = vm.authUser.id
                vm.$store.commit('app/SET_USER', user)
                this.checkOffer()
              }
              if (change.type === 'removed') {
                console.log('Removed city: ', change.doc.data())
              }
            })
          },
          (error) => {
            // ...
            console.log('Could not listen to changes on this snapshot:', error)
            vm.$router.push({ name: 'index' })
          }
        )
    },
    async checkOffer() {
      const vm = this
      const query = await db
        .collection('offers')
        .where('userId', '==', vm.user.id)
        .get()
      if (!query.empty) {
        const offers = query.docs.map((doc) => doc.data())
        vm.$store.commit('app/SET_COMPLETED_OFFERS', offers)
        console.log(offers)
      } else {
        console.log('This user has not completed any offers')
      }
      console.log('Now I am going to check out some offers')
    },
  },
}
</script>

<style scoped></style>
