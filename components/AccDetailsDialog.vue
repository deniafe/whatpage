<template>
  <div
    v-if="accModal"
    class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center animated fadeIn faster"
    style="background: rgba(0, 0, 0, 0.8)"
  >
    <div
      class="border border-primary modal-container bg-secondary w-11/12 h-3/4 mt-6 md:max-w-6/12 mx-auto rounded shadow-lg z-50 overflow-y-scroll"
    >
      <div class="modal-content pt-4 pb-2 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl text-white font-bold">Account Details</p>
          <div
            class="modal-close cursor-pointer z-50 rounded-full hover:bg-primary p-2"
            @click="toggleModal(false)"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>
        <!--Body-->
        <div class="my-5">
          <div class="gap-8 mt-10 sm:px-8 xl:px-0 text-white">
            <div class="mb-8">
              Pay into any of the accounts below and send us proof of your
              payment. Send to drianbake@gmail.com. Your Tubely account will be
              upgraded to pro within 24 hours
            </div>
            <div class="md:grid md:grid-cols-3">
              <div class="mb-4">
                <p class="text-lg text-primary font-semibold mb-2">
                  Nigeria Bank Details
                </p>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Bank name: </span>
                  Zenith Bank
                </div>
                <!-- <div class="mb-2">
                  <span class="text-red-200 font-medium">Routing (ABA): </span
                  >061120084
                </div> -->
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Account number: </span>
                  2080390570
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium"
                    >Beneficiary name:
                  </span>
                  Deborah Bamidele
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Amount to pay: </span
                  >₦5,000
                </div>
              </div>

              <div class="mb-4">
                <p class="text-lg text-primary font-semibold mb-2">
                  United Kingdom Bank Details
                </p>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Bank name: </span>
                  Barclays
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Sort Code: </span
                  >231486
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Account number: </span>
                  04921237
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium"
                    >Beneficiary name:
                  </span>
                  Deborah Bamidele
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Amount to pay: </span
                  >£9
                </div>
              </div>

              <div class="mb-4">
                <p class="text-lg text-primary font-semibold mb-2">
                  United State Bank Details
                </p>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Bank name: </span>
                  First Century Bank
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Routing (ABA): </span
                  >061120084
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Account number: </span>
                  4020250152556
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium"
                    >Beneficiary name:
                  </span>
                  Deborah Bamidele
                </div>
                <div class="mb-2">
                  <span class="text-red-200 font-medium">Amount to pay: </span
                  >$10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      accModal: 'app/accDialog',
    }),
  },
  methods: {
    toggleModal(val) {
      this.$store.commit('app/SET_ACC_DIALOG', val)
    },
  },
}
</script>

<style scoped>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
