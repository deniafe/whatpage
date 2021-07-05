<template>
  <div
    class="border-4 border-primary py-8 border-opacity-20 rounded-lg mt-4 px-3 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
  >
    <div class="grid grid-cols-6 items-center">
      <div
        class="col-span-1 text-red-300 text-lg justify-self-end font-bold pr-4"
      >
        # {{ rank + 1 }}
      </div>
      <img
        class="col-span-2 md:col-span-1 w-14 h-14 rounded-md"
        src="/tubelylogo1.png"
      />
      <div class="col-span-3 md:col-span-4">
        <div class="text-sm md:text-base text-primary">
          {{ user.totalPoints }} points
        </div>
        <div class="text-sm md:text-base text-red-300">
          {{ user.name || user.email }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    rank: {
      type: Number,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
