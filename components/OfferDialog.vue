<template>
  <div
    v-if="offerModal"
    class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center animated fadeIn faster"
    style="background: rgba(0, 0, 0, 0.8)"
  >
    <div
      class="border border-primary shadow-lg modal-container bg-secondary w-11/12 md:max-w-4xl mx-auto rounded shadow-lg z-50 overflow-y-scroll"
    >
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl text-white font-bold">
            Complete {{ network }} Offers To Earn Points
          </p>
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
          <div
            v-if="offers"
            class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
          >
            <OfferCard v-for="offer in offers" :key="offer.id" :offer="offer" />
          </div>
          <div v-if="offers.length === 0 && !offersLoading" class="mt-6">
            <img class="h-1/2 w-1/2 mx-auto" src="/no_offers.svg" />
            <div class="text-white text-center">
              There are no offers for you to complete at the moment. Switch to a
              mobile device to see if there are any available mobile offers.
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <i
            v-if="offersLoading"
            class="fa fa-spinner animate-spin mx-auto text-white text-7xl"
            aria-hidden="true"
          ></i>
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
      user: 'auth/user',
      offerModal: 'app/offerDialog',
      offerNetwork: 'app/offerNetwork',
      AMOffers: 'app/AMOffers',
      CGOffers: 'app/CGOffers',
      OGOffers: 'app/OGOffers',
      offersLoading: 'app/offersLoading',
    }),
    offers() {
      let offers = []
      if (this.offerNetwork === 'AM') {
        offers = this.AMOffers.map((offer) => {
          return {
            id: offer.campaign_id,
            url: offer.url.replace('sid=', `sid=tubely-${this.user.id}`),
            image: `https://www.adworkmedia.com/images/campPreview/${offer.campaign_id}.png`,
            name: offer.campaign_name,
            desc: offer.campaign_desc,
            payout: offer.payout,
          }
        })
      } else if (this.offerNetwork === 'CG') {
        offers = this.CGOffers.map((offer) => {
          return {
            id: offer.offer_id,
            url: offer.offerlink,
            image: offer.offerphoto,
            name: offer.title,
            desc: offer.description,
            payout: offer.payout,
          }
        })
      } else if (this.offerNetwork === 'OG') {
        offers = this.OGOffers.map((offer) => {
          return {
            id: offer.offerid,
            url: offer.link.replace(
              'aff_sub=',
              `aff_sub=tubely-${this.user.id}`
            ),
            image: offer.picture,
            name: offer.name,
            desc: offer.description,
            payout: offer.payout,
          }
        })
      }
      return offers
    },
    network() {
      let network
      if (this.offerNetwork === 'AM') {
        network = 'Adwork Media'
      } else if (this.offerNetwork === 'CG') {
        network = 'CPA Grip'
      } else if (this.offerNetwork === 'OG') {
        network = 'Ogads'
      }
      return network
    },
  },
  methods: {
    toggleModal(val) {
      this.$store.commit('app/SET_OFFER_DIALOG', val)
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
