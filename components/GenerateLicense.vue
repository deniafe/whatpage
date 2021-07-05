<template>
  <!-- Section 1 -->
  <section class="w-full px-8 py-16 bg-secondary xl:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col items-center md:flex-row">
        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <p class="font-medium text-primary uppercase">Tubely License</p>
          <h2
            class="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl"
          >
            Generate Tubely License.
          </h2>
          <p class="text-xl text-gray-400 md:pr-16">
            Enter the email address you used when signing up for tubely and
            click on the generate button. If an account is found with this
            email, a one week license key will be generated and you will be able
            to use tubely's full features for 1 week.
          </p>
        </div>

        <div class="w-full mt-16 md:mt-0 md:w-2/5">
          <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-background rounded-lg shadow-2xl px-7"
          >
            <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
              Tubely License
            </h3>
            <input
              v-model="form.email"
              type="text"
              name="email"
              class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
              placeholder="Email address"
            />
            <div class="block">
              <button
                :class="buttonClicked ? 'cursor-not-allowed' : 'cursor-pointer'"
                class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg focus:ring focus:ring-red-800 focus:outline-none hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
                @click="generate"
              >
                <i
                  v-if="buttonClicked"
                  class="fa fa-spinner animate-spin"
                  aria-hidden="true"
                ></i>
                {{ buttonClicked ? 'Processing ...' : 'Generate License' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { db, firebase } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      buttonClicked: false,
      form: {
        email: '',
        name: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      url: 'app/url',
      ref: 'app/ref',
    }),
  },
  methods: {
    async generate() {
      this.buttonClicked = true
      try {
        const license = await this.$axios.$get(
          `https://us-central1-tubely-44839.cloudfunctions.net/api/licenseKey?email=${this.form.email}`
        )
        console.log(license)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
