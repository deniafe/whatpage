<template>
  <nav class="grid px-8 pt-4 text-white text-xl">
    <div
      class="justify-self-end self-end content-center grid text-xs bg-white hover:bg-primary hover:text-gray-200 text-gray-800 px-3 py-2 rounded-sm cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
    >
      <span class="inline-block cursor-pointer" @click="logout">Logout</span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/signOut', true)
    },
  },
}
</script>

<style></style>
