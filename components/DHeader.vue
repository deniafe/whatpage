<template>
  <!-- Section 1 -->
  <section class="px-2 pt-20 md:px-0">
    <div
      class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center"
    >
      <h1
        class="text-4xl font-extrabold tracking-tight text-left sm:text-5xl md:text-6xl md:text-center"
      >
        <span class="block text-headingText"
          >Automate Your
          <span class="block mt-1 text-primary lg:inline lg:mt-0"
            >WhatsApp Marketing</span
          ></span
        >
      </h1>
      <h2
        class="capitalize w-full mx-auto text-base text-left md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center mb-12"
      >
        <span class="text-pink font-medium"
          >Reach Prospective Customers With 98% Open Rate
        </span>
        <span class="text-gray-600">
          Promote Any Product Or Service Locally Or Globally</span
        >
      </h2>
      <div
        class="relative flex flex-col justify-center md:flex-row md:space-x-4"
      >
        <a
          class="flex items-center cursor-pointer w-full px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md md:mb-0 md:w-auto hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
          @click.prevent="scroll('cta')"
        >
          Dowload It Free

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <a
          class="flex items-center cursor-pointer px-6 py-3 text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600 hover:text-gray-100 hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
          @click.prevent="scroll('desc')"
        >
          Learn More
        </a>
      </div>
    </div>
    <div
      class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center"
    >
      <img src="/hero.jpg" />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style></style>
