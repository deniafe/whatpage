<template>
  <nav class="grid grid-cols-2 px-8 pt-8 text-xl">
    <!-- <div><img src="/tubelylogo.png" class="h-10 w-10" />Tubely</div> -->
    <!-- <a
      href="#_"
      class="md:grid hidden items-center w-auto text-xl font-extrabold leading-none text-white select-none"
      ><img src="/tubelylogo.png" class="h-10 w-10 mr-2 inline-block" />
      <span> Tubely </span>
    </a> -->
    <a
      href="#_"
      class="relative z-10 flex items-center w-auto text-base md:text-xl font-extrabold leading-none text-primary select-none"
      ><img
        src="/WhatellzLogo.png"
        class="h-8 w-8 mr-2 md:h-10 md:w-10 md:mr-2"
      />Whatellz</a
    >
    <div
      class="justify-self-end self-center content-center grid text-xs bg-primary hover:bg-primary hover:text-gray-200 text-gray-800 px-3 py-2 rounded-sm cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
    >
      <span class="inline-block cursor-pointer" @click="download"
        >Download</span
      >
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    download() {
      this.$store.commit('app/SET_LOGIN_DIALOG', true)
    },
  },
}
</script>

<style></style>
