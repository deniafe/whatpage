<template>
  <!-- Section 1 -->
  <section id="cta" class="w-full px-8 py-16 bg-background xl:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col items-center md:flex-row">
        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <p class="font-medium text-primary uppercase">
            Download Tubely For Free
          </p>
          <h2
            class="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl"
          >
            Massively Boost Your Youtube Viewership.
          </h2>
          <p class="text-xl text-gray-400 md:pr-16">
            Breakthrough video marketing software that gets you relevant,
            targeted traffic on 100% autopilot
          </p>
        </div>

        <div class="w-full mt-16 md:mt-0 md:w-2/5">
          <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-2xl px-7"
          >
            <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
              Get Access
            </h3>

            <div class="mb-4">
              <input
                v-model="name"
                type="text"
                name="name"
                :class="$v.name.$error ? 'border-red-600' : 'border-gray-600'"
                class="block w-full px-4 py-3 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
                placeholder="Name"
                @blur="$v.name.$touch()"
              />

              <div v-if="$v.name.$error">
                <p v-if="!$v.name.minLength" class="text-red-600 slider">
                  Name must have at least
                  {{ $v.name.$params.minLength.min }} letters. !
                </p>
                <p v-if="!$v.name.required" class="text-red-600 slider">
                  Field is required!
                </p>
              </div>
            </div>

            <div class="mb-4">
              <input
                v-model="email"
                type="text"
                name="email"
                :class="$v.email.$error ? 'border-red-600' : 'border-gray-600'"
                class="block w-full px-4 py-3 border-2 bg-gray-300 border-transparent rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
                placeholder="Email address"
                @blur="$v.email.$touch()"
              />

              <div v-if="$v.email.$error">
                <p v-if="!$v.email.email" class="text-red-600 slider">
                  Please enter a valid email!
                </p>
                <p v-if="!$v.email.required" class="text-red-600 slider">
                  Email is required!
                </p>
              </div>
            </div>

            <div class="block">
              <button
                :disabled="loading || $v.$invalid"
                :class="
                  loading || $v.$invalid
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer'
                "
                class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg focus:ring focus:ring-red-800 focus:outline-none hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
                @click="signup"
              >
                <i
                  v-if="loading"
                  class="fa fa-spinner animate-spin"
                  aria-hidden="true"
                ></i>
                {{ loading ? 'Processing' : 'Download Now' }}
              </button>
              <p v-if="$v.$anyError" class="text-red-600 pb-3 slider">
                Pls fill out required fields!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tinyurl from 'tinyurl'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { nanoid } from 'nanoid'
import { db, firebase } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      name: '',
      form: {
        email: '',
        password: '',
        name: '',
        uid: '',
        country: '',
        region: '',
        countryCode: '',
        ip: '',
        token: '',
        referralPoints: 0,
        referredBy: '',
        youtubePoints: 0,
        telegramPoints: 0,
        offerPoints: 0,
        totalPoints: 0,
        registeredAt: firebase.firestore.Timestamp.fromDate(new Date()),
      },
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
      minLength: minLength(4),
    },
  },
  computed: {
    ...mapGetters({
      url: 'app/url',
      ref: 'app/ref',
      loading: 'auth/loading',
    }),
  },
  mounted() {
    this.getIp()
    // this.geoLookup()
  },
  methods: {
    async signup() {
      const vm = this

      const hostname = window.location.host
      this.form.uniqueLink = 'https://' + hostname + '?ref='
      const data = { ...this.form }
      if (this.ref) data.referredBy = this.ref
      data.email = this.email
      data.name = this.name
      data.registeredAt = firebase.firestore.Timestamp.fromDate(new Date())
      data.hostname = hostname
      data.password = nanoid()
      data.state = 'Sign Up'

      // Check to make sure the lead does not exist in the database
      try {
        if (this.ref) {
          this.$store.commit('auth/SET_LOADING', true)
          const query = await db
            .collection('users')
            .where('ip', '==', this.form.ip)
            .get()

          if (!query.empty) {
            console.log('The query is not empty: ', query.docs[0].data())
            const alert = {}
            alert.status = true
            alert.message = `Uh oh!! You have already registered for this contest! You can't register twice`
            vm.$store.commit('app/SET_ALERT', alert)
            vm.$store.dispatch('app/closeAlert')
            this.$store.commit('auth/SET_LOADING', false)
          } else {
            this.$store.dispatch('auth/userAuth', data)
          }
        } else {
          this.$store.dispatch('auth/userAuth', data)
        }
      } catch (error) {
        console.log(error)
        vm.body = `<h1>An Error occured. Please try again!</h1>`
      }
    },
    // This is the former function for signup, I am just keeping it because I might need it later
    async save() {
      // Code to get the user unique link
      // TODO: YOU NEED TO COME BACK AND MAKE SURE THE ID IS UNIQUE
      const hostname = window.location.host
      this.form.uniqueLink = 'https://' + hostname + '?ref='

      const data = { ...this.form }
      if (this.ref) data.referredBy = this.ref
      data.registeredAt = firebase.firestore.Timestamp.fromDate(new Date())
      const vm = this

      // Check to make sure the lead does not exist in the database
      try {
        const query = await db
          .collection('leads')
          .where('email', '==', data.email)
          .get()

        if (!query.empty) {
          const alert = {}
          alert.status = true
          alert.message = `Uh oh!! You have already registered for this contest! You can't register twice`
          vm.$store.commit('app/SET_ALERT', alert)
          vm.$store.dispatch('app/closeAlert')
        } else {
          saveLead()
        }
      } catch (error) {
        console.log(error)
        vm.body = `<h1>An Error occured. Please try again!</h1>`
      }

      async function saveLead() {
        try {
          const doc = await db.collection('leads').add(data)
          tinyurl.shorten('https://' + hostname + '?ref=' + doc.id).then(
            async (res) => {
              await db.collection('leads').doc(doc.id).update({
                uniqueLink: res,
              })
              if (vm.ref) {
                await db
                  .collection('leads')
                  .doc(vm.ref)
                  .update({
                    referralPoints: firebase.firestore.FieldValue.increment(
                      100
                    ),
                    totalPoints: firebase.firestore.FieldValue.increment(100),
                  })
              }
              vm.$router.push({
                name: 'download',
                params: { lead: doc.id },
                // props: { campaignId: vm.campId },
              })
            },
            function (err) {
              console.log(err)
            }
          )
        } catch (error) {
          console.log({ error: 'Something went wrong' }, error)
        }
      }
    },
    getIp() {
      try {
        const vm = this
        fetch('https://api.ipify.org?format=json')
          .then((x) => x.json())
          .then((res) => {
            console.log(`Getting user's ip address: `, res)
            vm.form.ip = res.ip
          })
      } catch (error) {
        console.log(error)
      }
    },
    IPLookUp() {
      const vm = this
      fetch('https://api.ipgeolocationapi.com/geolocate/' + this.form.ip)
        .then((x) => x.json())
        .then((res) => {
          console.log(`Getting user's geo details: `, res)
          vm.form.country = res.name
          vm.form.countryCode = res.alpha2
        })
    },
  },
}
</script>

<style>
.slider {
  overflow-y: hidden;
  max-height: 500px; /* approximate max height */

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
</style>
