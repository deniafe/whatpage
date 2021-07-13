<template>
  <section class="mt-14 border-b-2 border-gray-300 lg:border-0">
    <div class="grid grid-cols-4 mb-10 md:grid-cols-12">
      <img
        src="https://s3-us-west-1.amazonaws.com/vyper-assets/contest_cta.fa9b75917e0cc486contest_cta1.jpg"
        class="w-20 h-20 rounded-md md:col-span-2 lg:hidden"
      />
      <div
        class="border-4 border-primary border-opacity-20 rounded-lg py-4 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out hidden lg:grid lg:col-span-3 justify-center"
      >
        <img
          src="https://s3-us-west-1.amazonaws.com/vyper-assets/contest_cta.fa9b75917e0cc486contest_cta1.jpg"
          class="w-20 h-20 rounded-md"
        />
      </div>
      <div
        class="ml-8 md:ml-2 mt-4 lg:mt-2 col-span-3 md:col-span-4 lg:col-span-9"
      >
        <div class="hidden lg:grid mb-2 text-2xl text-white font-medium">
          {{ user ? name : 'You' }}
        </div>
        <div class="grid grid-cols-2 mb-2 lg:mb-1">
          <div class="text-sm md:text-base text-primary">
            {{ user ? totalPoints : 0 }} Points
          </div>
          <div
            class="text-xs md:text-sm lg:text-xs uppercase text-white justify-self-end"
          ></div>
        </div>
        <div class="h-3 bg-gray-300 rounded-full">
          <div class="h-full rounded-full bg-primary" :style="styling"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
    totalPoints() {
      return this.user.totalPoints
    },
    name() {
      return this.user.name || this.user.email
    },
    progress() {
      let totalPoints = this.totalPoints
      if (this.totalPoints >= 1000) totalPoints = 1000
      return (totalPoints / 1000) * 100
    },
    styling() {
      return {
        width: `${this.progress}%`,
      }
    },
  },
}
</script>

<style scoped>
#progressbar {
  background-color: brown;
}
</style>
