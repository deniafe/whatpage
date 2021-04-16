<template>
  <div class="pt-6 pb-8 border-t-2 mt-4 border-gray-300">
    <div class="h-14 bg-gray-300 rounded-md grid grid-cols-4 items-center px-3">
      <div
        class="col-span-3 lg:text-sm border-transparent"
        contenteditable="true"
      >
        http://instagram.devrl.link
      </div>
      <i
        aria-hidden="true"
        class="far fa-copy col-span-1 justify-self-end text-primary"
      ></i>
    </div>
    <div class="grid grid-cols-6 mt-6 mx-4 md:grid-cols-12 lg:grid-cols-7">
      <i
        v-for="(icon, i) in icons"
        :key="i"
        :class="icon"
        class="text-base pb-2"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Refer',
  data() {
    return {
      icons: [
        'fas fa-envelope-open text-primary col-span-1',
        'fab fa-facebook-messenger',
        'fab fa-twitter',
        'fab fa-facebook-f',
        'fab fa-pinterest',
        'fab fa-whatsapp',
        'fab fa-telegram',
      ],
    }
  },
}
</script>

<style scoped>
.fa-facebook-messenger {
  color: #00c6ff;
}
.fa-twitter {
  color: #1da1f2;
}
.fa-facebook-f {
  color: #3c5a99;
}
.fa-pinterest {
  color: #c8232c;
}
.fa-whatsapp {
  color: #25d366;
}
.fa-telegram {
  color: #0088cc;
}
</style>
