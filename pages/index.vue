<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">tubepage</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>

        <a
          class="button--grey"
          target="_blank"
          href="http://www.facebook.com/sharer/sharer.php?u=https://csb-cfmxj-g957jytjv.vercel.app/"
          >Facebook</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:url', content: 'http://devrl.link' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Deeviral Page' },
      {
        property: 'og:description',
        content: 'The best Viral marketing platform to use',
      },
      {
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/telephy-147d6.appspot.com/o/PzJDgebXYOZNbdWE20sOOHhXyYF2%2F342d947fa1e53-A%20whole%20new%20look.jpg?alt=media&token=7b75766f-4786-40b4-bd9e-1c11526e8e32',
      },
    ],
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
