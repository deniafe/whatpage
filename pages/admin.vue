<template>
  <!-- Section 1 -->
  <section class="w-full px-8 py-16 xl:px-8 h-screen bg-background">
    <div class="w-full mt-16 md:mt-0 md:w-2/5 mx-auto">
      <div
        class="h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-2xl px-7"
      >
        <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
          Sign in As Admin
        </h3>
        <input
          v-model="form.email"
          type="text"
          name="email"
          class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          placeholder="Email address"
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          placeholder="Password"
        />
        <div class="block">
          <button
            :class="buttonClicked ? 'cursor-not-allowed' : 'cursor-pointer'"
            class="w-full px-3 py-4 font-medium text-white bg-primary rounded-lg hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
            @click="addUser"
          >
            <i
              v-if="buttonClicked"
              class="fa fa-spinner animate-spin"
              aria-hidden="true"
            ></i>
            {{ buttonClicked ? 'Logging ...' : 'Sign In' }}
          </button>
        </div>
        <!-- <p class="w-full mt-4 text-sm text-center text-gray-500">
              Don't have an account?
              <a href="#_" class="text-primary underline">Sign up here</a>
            </p> -->
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '@/plugins/firebase'
export default {
  data() {
    return {
      buttonClicked: false,
      form: {
        email: 'debby@email.com',
        password: '',
      },
    }
  },
  methods: {
    signUserIn() {
      this.buttonClicked = true
      const vm = this
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          vm.$router.push({ name: 'dashboard' })
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
  },
}
</script>

<style></style>
