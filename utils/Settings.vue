<template>
  <div class="secondary pb-6" :style="divStyle">
    <div class="d-flex justify-center py-6">
      <v-btn lg text outlined color="primary" @click="dialog = true"
        >Add An Account</v-btn
      >
    </div>
    <div class="px-8">
      <AccCard v-for="(acc, i) in accounts" :key="i" :acc-obj="acc" />
    </div>
    <AddAccDetails :acc="dialog" @close="dialog = false" />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { mapGetters } from 'vuex'
import AddAccDetails from '@/components/App/AddAccDetails'
import AccCard from '@/components/AccCard'
export default {
  components: {
    AddAccDetails,
    AccCard,
  },
  data() {
    return {
      dialog: false,
      browserHeight: '',
    }
  },
  mounted() {
    this.getAccounts()
    this.browserHeight = document.body.clientHeight
  },
  computed: {
    ...mapGetters({
      accounts: 'app/accounts',
    }),
    divStyle() {
      return {
        height: this.browserHeight + 'px',
      }
    },
  },
  methods: {
    getAccounts() {
      ipcRenderer.send('get-accounts')
    },
  },
}
</script>

<style></style>
