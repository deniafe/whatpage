<template>
  <div class="pt-8 pb-4 lg:pt-2">
    <Reward
      v-for="(reward, i) in rewards"
      :key="i"
      :index="i"
      :reward="reward.component"
      :title="reward.title"
      :properties="reward.properties"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { db, firebase } from '@/plugins/firebase'
const RewardDetail = () => import('./RewardDetail')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
    rewards() {
      const vm = this
      return [
        // {
        //   component: RewardDetail,
        //   title: {
        //     text: 'Refer Others',
        //     icon: 'fas fa-user-friends',
        //     points: 100,
        //   },
        // },
        {
          component: RewardDetail,
          title: {
            text: 'Tubely PRO',
            desc: 'Win full tubely features by getting a PRO membership',
            image: '/laptop.png',
            points: 1000,
          },
          properties: {
            buttonText: 'Claim Reward +1000 points',
            description:
              'Collect enough points and get free PRO membership for Tubely',
            async func() {
              const endDate = new Date()
              endDate.setDate(endDate.getDate() + 14)
              console.log('endDate :', endDate)
              if (vm.user.totalPoints >= 1000) {
                vm.$store.commit('app/SET_REWARD_LOADING', true)
                try {
                  await db
                    .collection('users')
                    .doc(vm.user.id)
                    .update({
                      membership: {
                        startDate: firebase.firestore.Timestamp.fromDate(
                          new Date()
                        ),
                        endDate: firebase.firestore.Timestamp.fromDate(endDate),
                        interval: 14,
                        plan: 'pro',
                      },
                      referralPoints: 0,
                      telegramPoints: 0,
                      youtubePoints: 0,
                      offerPoints: 0,
                      totalPoints: 0,
                    })
                  vm.$store.commit('app/SET_REWARD_LOADING', false)
                  const alert = {
                    status: true,
                    message: `This reward has been successful applied to your tubely account. You can now enjoy all of tubely's full features`,
                  }
                  vm.$store.dispatch('app/setAlert', alert)
                  vm.$store.dispatch('app/closeAlert')
                } catch (error) {
                  vm.$store.commit('app/SET_REWARD_LOADING', false)
                  const alert = {
                    status: true,
                    message: error,
                  }
                  console.log(error)
                  vm.$store.dispatch('app/setAlert', alert)
                  vm.$store.dispatch('app/closeAlert')
                }
              } else {
                const alert = {
                  status: true,
                  message: `You do not have enough points to claim this reward. Complete more offers to claim this reward`,
                }
                vm.$store.dispatch('app/setAlert', alert)
                vm.$store.dispatch('app/closeAlert')
                vm.buttonClicked = false
              }
            },
          },
        },
        {
          component: RewardDetail,
          title: {
            text: '2 Months Pro',
            desc: 'Unlock 2 months and enjoy tubely for free',
            image: '/laptop.png',
            points: 2000,
          },
          properties: {
            buttonText: 'Claim Reward',
            description:
              'You can use Tubely for 2 months absolutely free, you just need 2000 points.',
          },
        },
        {
          component: RewardDetail,
          title: {
            text: '3 Months PRO',
            desc: 'Want Tubely for 3 months? Unlock 3 months license.',
            image: '/laptop.png',
            points: 3000,
          },
          properties: {
            buttonText: 'Claim Reward',
            description:
              'Want the power of Tubely for 3 months for free. Collect 3000 points and get 3 months Tubely license for free!',
          },
        },
      ]
    },
  },
}
</script>

<style></style>
