<template>
  <div>
    <div>
      <Nav />
      <DHeader />
      <DFeatures />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Testimonial from '~/components/Testimonial.vue'
export default {
  // components: { Testimonial },
  head: {
    titleTemplate: '%s - Tubely',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:url', content: 'https://csb-cfmxj.vercel.app/' },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:title',
        content: 'Tubely - Youtube App',
      },
      {
        property: 'og:description',
        content: 'The best youtube marketing software',
      },
      {
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/tubely-44839.appspot.com/o/tubelyheaderpic.png?alt=media&token=94004848-af31-401e-8f3e-0a5b3500826f',
      },
    ],
  },
}
</script>
