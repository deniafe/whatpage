<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { auth } from '@/plugins/firebase'
export default {
  beforeDestroy() {
    auth.signOut()
  },
}
</script>

<style type="text/css">
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
</style>
