<template>
  <div>
    <GenerateLicense />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s - Licensing',
    htmlAttrs: {
      lang: 'en',
    },
  },
  mounted() {
    this.$store.dispatch('auth/checkAuth')
  },
}
</script>

<style></style>
