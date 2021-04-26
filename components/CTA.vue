<template>
  <!-- Section 1 -->
  <section class="w-full px-8 py-16 bg-background xl:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col items-center md:flex-row">
        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <p class="font-medium text-primary uppercase">Building Businesses</p>
          <h2
            class="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl"
          >
            Changing The Way People Do Business.
          </h2>
          <p class="text-xl text-gray-400 md:pr-16">
            Learn how to engage with your visitors and teach them about your
            mission. We're revolutionizing the way customers and businesses
            interact.
          </p>
        </div>

        <div class="w-full mt-16 md:mt-0 md:w-2/5">
          <div
            class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-2xl px-7"
          >
            <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
              Get Access
            </h3>
            <input
              v-model="form.name"
              type="text"
              name="name"
              class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
              placeholder="Name"
            />
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
                class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
                @click="addUser"
              >
                <i
                  v-if="buttonClicked"
                  class="fa fa-spinner animate-spin"
                  aria-hidden="true"
                ></i>
                {{ buttonClicked ? 'Processing' : 'Download Now' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { nanoid } from 'nanoid'
import { db, firebase } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      buttonClicked: false,
      form: {
        email: '',
        name: '',
        uid: '',
        country: '',
        region: '',
        countryCode: '',
        ip: '',
        token: '',
        referralPoints: 0,
        socialPoints: 0,
        offerPoints: 0,
        registeredAt: firebase.firestore.Timestamp.fromDate(new Date()),
      },
    }
  },
  computed: {
    ...mapGetters({
      url: 'app/url',
    }),
  },
  mounted() {
    this.getIp()
    // this.geoLookup()
  },
  methods: {
    addUser() {
      const vm = this
      this.buttonClicked = true
      this.form.uid = nanoid()
      this.form.uniqueLink = this.url + this.form.uid
      db.collection('leads')
        .add(this.form)
        .then((docRef) => {
          vm.$router.push({
            name: 'share',
            params: { lead: docRef.id },
          })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
    getIp() {
      try {
        const vm = this
        fetch('https://api.ipify.org?format=json')
          .then((x) => x.json())
          .then((res) => {
            console.log(`Getting user's ip address: `, res)
            vm.form.ip = res.ip
            this.IPLookUp()
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

<style></style>
