<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { firebase } from '@/plugins/firebase'
export default {
  mounted() {
    firebase.messaging().onMessage((payload) => {
      console.log('Message received from the front end. ', payload)
      // ...
    })
  },
}
</script>

<style></style>
