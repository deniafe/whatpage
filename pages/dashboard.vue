<template>
  <div>
    <!-- Section 1 -->
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="grid">
        <!-- <button
          class="w-full lg:w-1/4 px-3 py-4 justify-self-end lg:mb-8 font-medium cursor-pointer text-white bg-primary rounded-lg hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fa fa-plus mr-2" aria-hidden="true"></i>
          New Campaign
        </button> -->
        <div>
          <NotificationDropDown
            :is-menu-open="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 mx-1 lg:-mx-4">
        <AnalyticsCard v-for="i in 3" :key="i" />
      </div>
      <div class="grid justify-center mt-8">
        <AnalyticsTable />
      </div>
      <vuetable
        ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="['name', 'nickname', 'email', 'gender']"
        data-path=""
        pagination-path=""
      ></vuetable>
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style></style>
