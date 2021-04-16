<template>
  <!-- Section 1 -->
  <section class="py-20">
    <div class="container max-w-6xl mx-auto">
      <h2
        class="text-4xl font-bold tracking-tight text-center capitalize text-gray-200"
      >
        Take control of your youtube marketing
      </h2>
      <p class="mt-2 text-lg text-center text-gray-300">
        with these powerful features
      </p>
      <div
        class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <FeaturesCard
          v-for="i in 6"
          :key="i"
          :desc="' Each of our plan will provide you and your team with certifications.'"
          :title="'Automate Posting'"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
