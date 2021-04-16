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
const RewardDetail = () => import('./RewardDetail')
export default {
  data() {
    return {}
  },
  computed: {
    rewards() {
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
            text: 'Explore Mars',
            desc: 'Win the altimate trip to mars',
            image:
              'https://cdn.vyper.io/312ba74c-a2bf-41fe-a23c-1ba3101eced8/-/quality/lighter/-/format/auto/null',
            points: 1000,
          },
          properties: {
            buttonText: 'Claim Reward +3000 points',
            description:
              'Collect enough points and start your journey to the red planet',
          },
        },
        {
          component: RewardDetail,
          title: {
            text: 'Explore the moon',
            desc: 'Unlock a trip to the moon',
            image:
              'https://cdn.vyper.io/e5a25fe0-1472-4726-bf6b-4e2a13eba58b/-/quality/lighter/-/format/auto/null',
            points: 5000,
          },
          properties: {
            // buttonText: 'View Url',
            description:
              'Hop into the space and journey to the moon. But first collect enough points to go',
          },
        },
        {
          component: RewardDetail,
          title: {
            text: 'Explore our satelite',
            desc: 'Win a trip to one of our saterlites',
            image:
              'https://cdn.vyper.io/d1ad0019-8a9c-498d-bef3-01de2a386637/-/quality/lighter/-/format/auto/null',
            points: 1500,
          },
          properties: {
            buttonText: 'Claim Reward',
            description: 'Whoever collects it',
          },
        },
      ]
    },
  },
}
</script>

<style></style>
