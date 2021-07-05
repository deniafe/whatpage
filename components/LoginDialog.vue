<template>
  <div
    v-if="loginModal"
    class="main-modal fixed w-full inset-0 z-50 pb-4 overflow-hidden flex justify-center animated fadeIn faster"
    style="background: rgba(0, 0, 0, 0.8)"
  >
    <div
      class="border border-primary modal-container bg-secondary w-11/12 h-2/3 mt-6 md:max-w-xl mx-auto rounded shadow-lg z-100 overflow-y-scroll"
    >
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl text-white font-bold">Login</p>
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

          <div class="mb-4">
            <input
              v-model="password"
              type="password"
              name="password"
              :class="$v.password.$error ? 'border-red-600' : 'border-gray-600'"
              class="block w-full px-4 py-3 border-2 bg-gray-300 border-transparent rounded-lg focus:ring focus:ring-gray-600 focus:outline-none"
              placeholder="Password"
              @blur="$v.password.$touch()"
            />
            <div v-if="$v.password.$error">
              <p v-if="!$v.password.minLength" class="text-red-600 slider">
                Password must have at least
                {{ $v.password.$params.minLength.min }} letters!
              </p>
              <p v-if="!$v.password.required" class="text-red-600 slider">
                Field is required!
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
              @click="login"
            >
              <i
                v-if="loading"
                class="fa fa-spinner animate-spin"
                aria-hidden="true"
              ></i>
              {{ loading ? 'Logging you in ...' : 'Log In' }}
            </button>
            <p v-if="$v.$anyError" class="text-red-600 pb-3 slider">
              Pls fill out required fields!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      buttonClicked: false,
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  computed: {
    ...mapGetters({
      loginModal: 'app/loginDialog',
      loading: 'auth/loading',
    }),
  },
  methods: {
    toggleModal(val) {
      this.$store.commit('app/SET_LOGIN_DIALOG', val)
      this.$v.$reset()
    },
    login() {
      this.buttonClicked = true
      this.$store.dispatch('auth/userAuth', {
        email: this.email,
        password: this.password,
        state: 'Log In',
      })
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
