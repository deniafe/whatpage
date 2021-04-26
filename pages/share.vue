<template>
  <div class="w-screen bg-secondary" :style="divStyle">
    <EmailConfirm />
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
const Actions = () => import('../components/Actions')
const Rewards = () => import('../components/Rewards')
const Leaderboards = () => import('../components/Leaderboards')
export default {
  name: 'Share',
  data() {
    return {
      browserHeight: '',
      tab: 'rewards',
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
  mounted() {
    this.browserHeight = document.body.clientHeight
    const browserWidth = document.body.clientWidth
    this.checkWidth(browserWidth)
  },
  methods: {
    change(tab) {
      this.tab = tab
    },
    checkWidth(width) {
      if (width < 1024) {
        this.tab = 'actions'
      }
    },
  },
}
</script>

<style scoped></style>
