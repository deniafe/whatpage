<template>
  <div
    class="relative flex flex-col items-center bg-background justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
  >
    <div class="p-3 text-white bg-primary rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
        <circle cx="6" cy="14" r="3"></circle>
        <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
      </svg>
    </div>
    <h4 class="text-xl font-medium text-gray-200">{{ title }}</h4>
    <p class="text-base text-center text-gray-300">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  computed: {},
}
</script>

<style></style>
