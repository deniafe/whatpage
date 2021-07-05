<template>
  <div
    v-if="pointsModal"
    class="main-modal fixed w-full inset-0 z-50 pb-4 overflow-hidden flex justify-center animated fadeIn faster"
    style="background: rgba(0, 0, 0, 0.8)"
  >
    <div
      class="border border-primary modal-container bg-secondary w-11/12 h-2/3 mt-6 md:max-w-xl mx-auto rounded shadow-lg z-100 overflow-y-scroll"
    >
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl text-white font-bold">Generate Points</p>
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
        <div class="relative z-10 h-auto p-8 py-10 bg-secondary px-7">
          <div class="mb-4">
            <input
              v-model="email"
              type="text"
              name="email"
              :class="$v.email.$error ? 'border-red-600' : 'border-gray-600'"
              class="block w-full px-4 py-3 border-2 bg-gray-300 border-transparent rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
              placeholder="Email address"
              @blur="$v.email.$touch()"
            />
            <div v-if="$v.email.$error">
              <p v-if="!$v.email.email" class="text-red-600 slider">
                Please enter a valid email!
              </p>
              <p v-if="!$v.email.required" class="text-red-600 slider">
                Email is required!
              </p>
            </div>
          </div>
          <div class="block">
            <button
              :disabled="loading || $v.$invalid"
              :class="
                loading || $v.$invalid ? 'cursor-not-allowed' : 'cursor-pointer'
              "
              class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg focus:ring focus:ring-red-800 focus:outline-none hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
              @click="addPoints"
            >
              <i
                v-if="buttonClicked"
                class="fa fa-spinner animate-spin"
                aria-hidden="true"
              ></i>
              {{ buttonClicked ? 'Processing ...' : 'Generate Points' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { db, firebase } from '@/plugins/firebase'
import { required, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      buttonClicked: false,
      email: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  computed: {
    ...mapGetters({
      pointsModal: 'app/pointsDialog',
      user: 'app/user',
    }),
  },
  watch: {
    async user(newValue, oldValue) {
      if (this.user) {
        if (!this.totalPoints) {
          const vm = this
          const doc = await db.collection('users').doc(this.user.id).get()
          if (doc.exists) {
            const userData = doc.data()
            userData.id = doc.id
            vm.$store.commit('app/SET_USER', userData)
          }
        }
      }
    },
  },
  methods: {
    toggleModal(val) {
      this.$store.commit('app/SET_POINTS_DIALOG', val)
    },
    async addPoints() {
      this.buttonClicked = true
      const vm = this
      try {
        if (this.user.id && this.email === this.user.email) {
          if (this.user.offerPoints === 0) {
            await db
              .collection('users')
              .doc(vm.user.id)
              .update({
                offerPoints: firebase.firestore.FieldValue.increment(600),
                totalPoints: firebase.firestore.FieldValue.increment(600),
              })
            vm.$router.push({
              name: 'share',
              params: { lead: vm.user.id },
              // props: { campaignId: vm.campId },
            })
          } else {
            const alert = {
              status: true,
              message: `You can't generate more points right now. Try again tomorrow.`,
            }
            this.$store.dispatch('app/setAlert', alert)
            this.$store.dispatch('app/closeAlert')
            this.buttonClicked = false
          }
        } else {
          const alert = {
            status: true,
            message: `Could not add any points: Your email is incorrect`,
          }
          this.$store.dispatch('app/setAlert', alert)
          this.$store.dispatch('app/closeAlert')
          this.buttonClicked = false
        }
        this.$store.commit('app/SET_POINTS_DIALOG', false)
      } catch (error) {
        console.log({ error: 'Something went wrong' }, error)
      }
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
