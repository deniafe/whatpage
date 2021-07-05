<template>
  <div>
    <Alert />
    <PointsDialog />
    <!-- Section 1 -->
    <section class="w-full px-8 py-16 xl:px-8 h-screen">
      <div class="w-full mt-16 md:mt-0 md:w-2/5 mx-auto">
        <div
          class="h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-2xl px-7"
        >
          <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
            Click the button below to enter your details and add 600 points to
            your points
          </h3>
          <div class="block">
            <button
              :class="buttonClicked ? 'cursor-not-allowed' : 'cursor-pointer'"
              class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg focus:ring focus:ring-red-800 focus:outline-none hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
              @click="showDialog"
            >
              Generate Points
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      buttonClicked: false,
      unsubscribe: '',
      form: {
        email: 'debby@email.com',
        password: '',
      },
    }
  },
  // fetch(context) {
  //   const { store, app, redirect } = context
  //   const network = store.state.app.offerNetwork

  //   if (!network) redirect({ name: 'share' })

  //   return (() => {
  // if (network === 'OG') {
  //   app.head.script.push({
  //     src:
  //       'https://www.locked1.com/cl/load.php?id=74edcfaeb899df73f6485b4cd899f798',
  //     type: 'text/javascript',
  //     id: 'ogjs',
  //   })
  // } else if (network === 'AM') {
  //   app.head.script.push({
  //     src: 'http://www.loktrk.com/gLoader.php?GID=61188&go=&sid=',
  //     type: 'text/javascript',
  //   })
  // }
  //   })()
  // },
  head: {
    titleTemplate: '%s - Generate Points',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        src: 'https://use.fontawesome.com/1bd36333df.js',
      },
      {
        src: 'http://www.loktrk.com/gLoader.php?GID=61188&go=&sid=',
        type: 'text/javascript',
      },
    ],
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
  },
  mounted() {
    this.$store.dispatch('auth/checkAuth')
  },
  methods: {
    showDialog() {
      this.$store.commit('app/SET_POINTS_DIALOG', true)
    },
  },
}
</script>

<style></style>
