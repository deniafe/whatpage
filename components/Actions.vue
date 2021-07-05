<template>
  <div class="pt-8 pb-4">
    <div
      class="uppercase text-xs md:text-sm text-white justify-self-start py-3 lg:grid hidden text-center cursor-pointer"
    >
      Get Points
    </div>
    <Action
      v-for="(action, i) in actions"
      :key="i"
      :index="i"
      :action="action.component"
      :title="action.title"
      :properties="action.properties"
    />
  </div>
</template>

<script>
import { firebase, db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
const Refer = () => import('./Refer')
const Custom = () => import('./CustomAction')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
    Refer() {
      return Refer
    },
    actions() {
      const vm = this
      return [
        {
          component: Refer,
          title: {
            text: 'Refer Others',
            icon: 'fas fa-user-friends',
            points: 100,
          },
        },
        {
          component: Custom,
          title: {
            text: 'Follow us on Telegram',
            icon: 'fab fa-telegram',
            points: 100,
          },
          properties: {
            buttonText: 'Go To Telegram',
            subtitle:
              'Click the button below to subscribe to our telegram channel',
            // question: 'What is your telegram username?',
            func() {
              window.open('https://t.me/sociotoolz', '_blank')
              if (vm.user.telegramPoints === 0) {
                db.collection('users')
                  .doc(vm.user.id)
                  .update({
                    telegramPoints: firebase.firestore.FieldValue.increment(
                      100
                    ),
                    totalPoints: firebase.firestore.FieldValue.increment(100),
                  })
                  .then(() => {
                    console.log('success')
                  })
                  .catch((err) =>
                    console.log(`Could not update user's points`, err)
                  )
              }
            },
          },
        },
        // {
        //   component: Custom,
        //   title: {
        //     text: 'Subscribe to our notification',
        //     icon: 'fa fa-bell-o',
        //     points: 100,
        //   },
        //   properties: {
        //     subtitle:
        //       'To subscribe and get 100 more points, simply click on the subscribe button, a popup will appear. Click on subscribe and you get 100 more points',
        //     buttonText: 'Subscribe',
        //     func() {
        //       firebase
        //         .messaging()
        //         .getToken()
        //         .then((token) => {
        //           console.log('Here is the user token', token)
        //           if (!vm.user.token) {
        //             db.collection('users')
        //               .doc(vm.user.id)
        //               .update({
        //                 token,
        //                 socialPoints: firebase.firestore.FieldValue.increment(
        //                   100
        //                 ),
        //                 totalPoints: firebase.firestore.FieldValue.increment(
        //                   100
        //                 ),
        //               })
        //               .then(() => {
        //                 console.log('success')
        //               })
        //               .catch((err) =>
        //                 console.log(`Could not add user token to database`, err)
        //               )
        //           }
        //         })
        //         .catch((err) =>
        //           console.log(`User did not give us the permission`, err)
        //         )
        //     },
        //   },
        // },
        {
          component: Custom,
          title: {
            text: 'Subscribe to Youtube',
            icon: 'fa fa-youtube-play',
            points: 100,
          },
          properties: {
            subtitle:
              'Click the button below to subscribe to our youtube channel',
            buttonText: 'Go To Youtube',
            func() {
              window.open('https://youtu.be/7gBrbEwcM58', '_blank')
              if (vm.user.youtubePoints === 0) {
                db.collection('users')
                  .doc(vm.user.id)
                  .update({
                    youtubePoints: firebase.firestore.FieldValue.increment(100),
                    totalPoints: firebase.firestore.FieldValue.increment(100),
                  })
                  .then(() => {
                    console.log('success')
                  })
                  .catch((err) =>
                    console.log(`Could not update user's points`, err)
                  )
              }
            },
          },
        },

        // {
        //   component: Custom,
        //   title: {
        //     text: 'Complete CG offers',
        //     icon: 'fa fa-money',
        //     points: 600,
        //   },
        //   properties: {
        //     subtitle:
        //       'Support this free tool by completing an offer from one of our advertisers. This way we can get funding for this project and continue updating it while keeping it free forever',
        //     buttonText: 'Complete An Offer',
        //     func() {
        //       // vm.$store.commit('app/SET_OFFER_DIALOG', true)
        //       vm.$store.commit('app/SET_OFFER_NETWORK', 'CG')
        //       // vm.$store.dispatch('app/CGOffers')
        //       vm.$router.push({
        //         name: 'points',
        //       })
        //     },
        //   },
        // },
        {
          component: Custom,
          title: {
            text: 'Complete some offers',
            icon: 'fa fa-money',
            points: 600,
          },
          properties: {
            subtitle:
              'Support this free tool by completing 3 offers from one or more of our sponsors. This way we can get funding for this project and continue updating it while you can get it at no $0',
            buttonText: 'Complete An Offer',
            func() {
              // vm.$store.commit('app/SET_OFFER_DIALOG', true)
              // vm.$store.commit('app/SET_OFFER_NETWORK', 'AM')
              // vm.$store.dispatch('app/AMOffers')
              // vm.$router.push({
              //   name: 'points',
              // })
              const hostname = window.location.origin
              const url = hostname + '/points'
              window.open(url, '_blank')
            },
          },
        },
        // {
        //   component: Custom,
        //   title: {
        //     text: 'Complete OG Offers',
        //     icon: 'fa fa-money',
        //     points: 600,
        //   },
        //   properties: {
        //     subtitle:
        //       'Support this free tool by completing an offer from one of our advertisers. This way we can get funding for this project and continue updating it while keeping it free forever',
        //     buttonText: 'Complete An Offer',
        //     func() {
        //       // vm.$store.commit('app/SET_OFFER_DIALOG', true)
        //       vm.$store.commit('app/SET_OFFER_NETWORK', 'OG')
        //       // vm.$store.dispatch('app/OGOffers')
        //       vm.$router.push({
        //         name: 'points',
        //       })
        //     },
        //   },
        // },
        {
          component: Custom,
          title: {
            text: 'Pay $10 for Tubely Pro',
            icon: 'fa fa-money',
            points: 1000,
          },
          properties: {
            subtitle:
              "If you don't want to complete offers or for some resons you can't complete any offer, you can pay $10 to get tubely pro.",
            buttonText: 'Pay $10',
            func() {
              vm.$store.commit('app/SET_ACC_DIALOG', true)
              // vm.$store.commit('app/SET_OFFER_NETWORK', 'AM')
              // vm.$store.dispatch('app/AMOffers')
              // vm.$router.push({
              //   name: 'points',
              // })
            },
          },
        },
      ]
    },
  },
}
</script>

<style></style>
