<template>
  <div>
    <div>
      <Nav />
      <Header />
      <Features />
      <Features2 />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Testimonial from '~/components/Testimonial.vue'
export default {
  // fetch({ req, store }) {
  //   const host = req.headers.host
  //   store.commit('app/SET_APP_URL', host)
  // },
  // components: { Testimonial },
  head: {
    titleTemplate: '%s - Automate WhatsApp Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // {
      //   name: 'description',
      //   content: 'The best youtube marketing software',
      // },
      // {
      //   name: 'author',
      //   content: 'The best youtube marketing software',
      // },
      { property: 'og:locale', content: 'en_US' },
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
          'https://firebasestorage.googleapis.com/v0/b/tubely-44839.appspot.com/o/tubelyheaderpic.jpg?alt=media&token=c28f13bf-d3ec-4904-b63c-58bfbad35454',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      // {
      //   property: 'twitter:title',
      //   content: 'Tubely - Youtube App',
      // },
      // {
      //   property: 'twitter:description',
      //   content: 'The best youtube marketing software',
      // },
      // {
      //   property: 'twitter:image:src',
      //   content:
      //     'https://firebasestorage.googleapis.com/v0/b/tubely-44839.appspot.com/o/tubelyheaderpic.png?alt=media&token=94004848-af31-401e-8f3e-0a5b3500826f',
      // },
      // {
      //   itemprop: 'image',
      //   content:
      //     'https://firebasestorage.googleapis.com/v0/b/tubely-44839.appspot.com/o/tubelyheaderpic.png?alt=media&token=94004848-af31-401e-8f3e-0a5b3500826f',
      // },
      // {
      //   itemprop: 'name',
      //   content: 'Tubely - Youtube App',
      // },
    ],
  },
  mounted() {
    const ref = this.$route.query.ref
    if (ref) this.$store.commit('app/SET_REF', ref)
  },
}
</script>
