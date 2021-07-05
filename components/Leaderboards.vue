<template>
  <div class="pt-8 pb-4 lg:pt-2">
    <Leaderboard
      v-for="(user, i) in leaderboardLeads"
      :key="i"
      :rank="i"
      :user="user"
    />
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      leaderboardLeads: 'app/leaderboardLeads',
    }),
  },
  mounted() {
    this.getLeads()
  },
  methods: {
    async getLeads() {
      if (this.leaderboardLeads.length <= 0) {
        const vm = this
        try {
          const query = await db
            .collection('users')
            .orderBy('totalPoints', 'desc')
            .limit(5)
            .get()
          const leads = query.docs.map((doc) => {
            const data = doc.data()
            data.id = doc.id
            return data
          })
          vm.$store.commit('app/SET_LEADERBOARD_LEADS', leads)
          console.log(leads)
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>

<style></style>
