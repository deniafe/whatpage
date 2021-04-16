<template>
  <div class="relative grid text-left text-gray-800">
    <div class="grid">
      <!-- <span class="rounded-md shadow-sm"> -->
      <button
        class="w-4/5 mb-4 mx-auto md:mx-0 md:w-2/5 lg:w-1/4 px-3 py-4 md:justify-self-end md:mb-8 font-medium cursor-pointer text-white bg-primary rounded-lg hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
        @click="$emit('click')"
      >
        <i class="fa fa-plus mr-2" aria-hidden="true"></i>
        New Campaign
      </button>
      <!-- </span> -->
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="origin-top-right absolute right-0 mt-16 w-80 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          class="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            class="h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-2xl px-7"
          >
            <h3 class="mb-6 text-2xl font-medium text-center text-gray-200">
              Notification Details
            </h3>
            <input
              v-model="message.url"
              type="text"
              name="text"
              class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Page Url"
            />
            <input
              v-model="message.title"
              type="text"
              name="text"
              class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Title"
            />
            <textarea
              v-model="message.body"
              type="text"
              name="text"
              class="block w-full px-4 py-3 mb-4 border-2 bg-gray-300 border-transparent border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Message"
            />

            <div class="block">
              <button
                class="w-full px-3 py-4 font-medium cursor-point text-white bg-primary rounded-lg hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
                @click="addUser"
              >
                <i
                  v-if="buttonClicked"
                  class="fa fa-spinner animate-spin"
                  aria-hidden="true"
                ></i>
                {{ buttonClicked ? 'Logging ...' : 'Send Notification' }}
              </button>
            </div>
            <!-- <p class="w-full mt-4 text-sm text-center text-gray-500">
              Don't have an account?
              <a href="#_" class="text-primary underline">Sign up here</a>
            </p> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      message: {
        title: '',
        body: '',
        image: '',
        url: '',
      },
    }
  },
}
</script>

<style></style>
