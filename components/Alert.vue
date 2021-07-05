<template>
  <div
    v-if="alert.status"
    class="text-white w-full z-20 px-6 py-4 border-0 rounded mb-4 bg-primary fixed slider"
  >
    <span class="text-xl inline-block mr-5 align-middle">
      <i class="fas fa-bell" />
    </span>
    <span class="inline-block align-middle mr-8">
      {{ alert.message }}
    </span>
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      alert: 'app/alert',
    }),
  },
}
</script>

<style scoped>
.slider {
  overflow-y: hidden;
  max-height: 500px; /* approximate max height */

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
</style>
