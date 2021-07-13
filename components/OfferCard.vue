<template>
  <div
    class="relative flex flex-col items-center bg-background justify-between col-span-4 space-y-2 overflow-hidden sm:rounded-xl cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
  >
    <img class="w-full h-1/2" :src="offer.image" />
    <div class="pt-1">
      <div class="font-bold text-white text-center text-sm mb-2">
        {{ offer.name }}
        <i
          class="fa fa-question-circle-o text-primary"
          aria-hidden="true"
          @click="showEx(offer.desc)"
        ></i>
      </div>
      <p v-if="showDesc === offer.desc" class="text-white text-center text-sm">
        {{ offer.desc }} Points
      </p>
      <p class="text-primary font-bold text-center text-base">
        +{{ points }} Points
      </p>
    </div>
    <div class="pt-1 px-2 pb-2">
      <a
        class="inline-block hover:bg-white bg-primary text-gray-200 rounded-sm px-3 py-1 text-base font-semibold hover:text-gray-800 mr-2 mb-2"
        @click="startOffer(offer)"
      >
        <i
          v-if="loading && buttonText !== 'Offer Completed'"
          class="fa fa-spinner animate-spin"
          aria-hidden="true"
        ></i>
        {{ buttonText }}</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    offer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDesc: '',
    }
  },
  computed: {
    ...mapGetters({
      start_offer_loading: 'app/start_offer_loading',
      completed_offers: 'app/completed_offers',
    }),
    points() {
      const points = Math.floor(this.offer.payout.replace('$', '') * 100)
      return points
    },
    loading() {
      let val = false
      if (this.start_offer_loading === this.offer) val = true
      return val
    },
    completed() {
      console.log('What is offers', this.offer)
      console.log('What is completed offers', this.completed_offers)

      return this.completed_offers.filter(
        (offer) => this.offer.id === offer.campaign_id
      )
    },
    buttonText() {
      let val = 'Complete Offer'
      if (this.completed.length !== 0) val = 'Offer Completed'
      else if (this.start_offer_loading === this.offer)
        val = 'Checking Completion'
      return val
    },
  },
  methods: {
    startOffer(offer) {
      this.$store.commit('app/SET_START_OFFER_LOADING', offer)
      window.open(offer.url, '_blank')
    },
    showEx(desc) {
      console.log('Show ex has been clicked')
      if (this.showDesc === desc) {
        this.showDesc = ''
      } else {
        this.showDesc = desc
      }
    },
  },
}
</script>

<style></style>
