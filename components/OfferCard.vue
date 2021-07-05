<template>
  <div
    class="relative flex flex-col items-center bg-background justify-between col-span-4 space-y-2 overflow-hidden sm:rounded-xl cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
  >
    <img class="w-full h-1/2" :src="offer.image" />
    <div class="pt-1">
      <div class="font-bold text-white text-sm mb-2">
        {{ offer.name }}
      </div>
      <p class="text-primary font-bold text-base">{{ points }} Points</p>
    </div>
    <div class="pt-1 px-2 pb-2">
      <a
        :href="offer.url"
        target="_blank"
        class="inline-block hover:bg-white bg-primary text-gray-200 rounded-sm px-3 py-1 text-base font-semibold hover:text-gray-800 mr-2 mb-2"
        >Complete Offer</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    points() {
      const points = Math.floor(this.offer.payout.replace('$', '') * 100)
      return points
    },
  },
}
</script>

<style></style>
