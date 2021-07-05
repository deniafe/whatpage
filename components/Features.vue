<template>
  <div class="py-auto">
    <h2
      class="text-4xl font-bold tracking-tight text-center capitalize text-gray-200"
    >
      Take control of your youtube marketing
    </h2>
    <p class="mt-2 text-lg text-center text-gray-300">
      with these powerful features
    </p>
    <DFeatureCard
      v-for="(feature, i) in features"
      :key="i"
      :feature="feature"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: '',
          position: 'right',
          title: 'Find Highly Relevant Videos',
          image: '/relevantVideos.jpg',
          desc:
            'Find relevant videos for any keyword on 100% autopilot. Just enter the keywords and Tubely will collect the videos for you working in the background. Relevant videos will drive you relevant traffic, making sure your watch-time and conversions are high.',
        },
        {
          icon: '',
          position: 'right',
          title: 'Comment On Videos',
          image: '/comments.jpg',
          desc:
            'Leave engaging comments on targeted videos in your niche in 100% autopilot. Grab viewers, fresh subscribers and grow your channel organically without spending anything on paid traffic or hiring costly help.',
        },
        {
          icon: '',
          position: 'left',
          title: 'Detailed Analytics',
          image: '/analytics.jpg',
          desc: `You will not get stuck. Tubely comes with full detailed analytics showing you exactly how your campaign is performing. So you know what works and what isn't working`,
        },
        {
          icon: '',
          position: 'left',
          title: 'Human-Pattern Technology',
          image: '/human.jpg',
          desc:
            'Random intervals between comments, and maintaining a safe interval between subsequent comments helps maximize approvals and protects you from bans. Tubely will also random-cycle between all the comments to make sure you get maximum variety',
        },
        {
          icon: '',
          position: 'right',
          title: 'Multipe Youtube Accounts',
          image: '/multipleAccs.jpg',
          desc:
            'Want to use more than one youtube account? No worries. You can add as many accounts as you want. Tubely allows you to add as many accounts as possible and you get to pick the one you want for each campaign. Tubely takes care of it all',
        },
        {
          icon: '',
          position: 'left',
          title: 'Create Video Groups',
          image: '/videoGroup.jpg',
          desc:
            'Keep things organized and sorted between your video channels and projects by putting everything in separate groups. Each group will hold all the data and the interactions that you create for it without affecting the other groups.',
        },
        {
          icon: '',
          position: 'right',
          title: 'Multi Threaded & Non Intrusive',
          image: '/multithreaded.jpg',
          desc:
            'Tubely works silently in the background without disturbing your work. Its multi-threaded technology processes things faster on your PC while consuming minimal resources.',
        },
      ],
    }
  },
}
</script>
