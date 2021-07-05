<template>
  <!-- Section 1 -->
  <section id="desc" class="py-20">
    <div class="container max-w-6xl mx-auto">
      <h2
        class="text-4xl font-bold tracking-tight text-center capitalize text-gray-200"
      >
        What Can Tubely do for your youtube channel
      </h2>
      <p class="mt-2 text-lg text-center text-gray-300">with tubely, you can</p>
      <div
        class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <FeaturesCard
          v-for="(feature, i) in descriptions"
          :key="i"
          :desc="feature.desc"
          :title="feature.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: '',
          title: 'Find Highly Relevant Videos',
          desc:
            'Find relevant videos for any keyword on 100% autopilot. Just enter the keywords and TubeTraffic will collect the videos for you working in the background. Relevant videos will drive you relevant traffic, making sure your watch-time and conversions are high.',
        },
        {
          icon: '',
          title: 'Comment On Users',
          desc:
            'Leave comment on users and channels on autopilot to attract the attention of targeted users, and to also get traffic from channel comments field of the channels. You can also use this to build working relationships and partnerships with others in your niche.',
        },
        {
          icon: '',
          title: 'Comment On Videos',
          desc:
            'Leave engaging comments on targeted videos in your niche in 100% autopilot. Grab viewers, fresh subscribers and grow your channel organically without spending anything on paid traffic or hiring costly help.',
        },
        {
          icon: '',
          title: 'Human-Pattern Technology',
          desc:
            'Random intervals between comments, and maintaining a safe interval between subsequent comments helps maximize approvals and protects you from bans.',
        },
        {
          icon: '',
          title: 'Random Selection of Comments',
          desc:
            'Pre-feed a database of comments and TubeTraffic will random-cycle between all the comments to make sure you get maximum variety and there is minimum repetition.',
        },
        {
          icon: '',
          title: 'Create Video Groups',
          desc:
            'Keep things organized and sorted between your video channels and projects by putting everything in separate groups. Each group will hold all the data and the interactions that you create for it without affecting the other groups.',
        },
        {
          icon: '',
          title: 'Multi Threaded & Non Intrusive',
          desc:
            'TubeTraffic works silently in the background without disturbing your work. Its multi-threaded technology processes things faster on your PC while consuming minimal resources.',
        },
        {
          icon: '',
          title: '',
          desc: '',
        },
      ],
      descriptions: [
        {
          icon: '',
          title: 'Grow New Channels Rapidly',
          desc:
            'If you’ve got a new channel, traffic is going to be your biggest problem, but with Tubely it’s not a problem anymore. You will get a constantly increasing supply of views and organic viewership.',
        },
        {
          icon: '',
          title: 'Get Subscribers Everyday',
          desc:
            'More subscribers means more dedicated viewership and more authority. With Tubely you will get real subscribers, not fake accounts that YouTube detects and penalizes you for.',
        },
        {
          icon: '',
          title: 'Create New Collaborations',
          desc:
            'Get in contact with the top YouTube channels of your niche. Talk to them and strike out partnerships, even send them offers, do exchanges, buy rights to videos, and cross-promote. Anything is possible!',
        },
        {
          icon: '',
          title: 'Increase Your Watch Time',
          desc:
            'Watch time is the most important metric that YouTube considers to rank your videos. If your watchtime is higher, it will get you more viewers through search and other sources.',
        },
        {
          icon: '',
          title: 'Reignite Your Dead Channels',
          desc:
            'Did you give up on YouTube already? It’s time to reignite your video passion and get viewers back to your older channels. With Tubely you can drive traffic anywhere. Even to older channels.',
        },
        {
          icon: '',
          title: 'Get More Social Authority',
          desc:
            'Be right in front of the targeted viewers in your niche no matter which YouTube channel or which video they are watching. Get more popularity and get recognized, resulting in more traffic and authority to you.',
        },
      ],
    }
  },
}
</script>

<style></style>
