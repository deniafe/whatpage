<template>
  <div class="pt-8 pb-4">
    <div
      class="uppercase text-xs md:text-sm text-white justify-self-start py-3 lg:grid hidden text-center cursor-pointer"
    >
      Get Points
    </div>
    <Action
      v-for="(action, i) in actions"
      :key="i"
      :index="i"
      :action="action.component"
      :title="action.title"
      :properties="action.properties"
    />
  </div>
</template>

<script>
// import Refer from '@/components/Refer'
const Refer = () => import('./Refer')
const Custom = () => import('./CustomAction')
// const LinkdIn = () => import('./LinkdIn')
export default {
  data() {
    return {}
  },
  computed: {
    Refer() {
      return Refer
    },
    actions() {
      return [
        {
          component: Refer,
          title: {
            text: 'Refer Others',
            icon: 'fas fa-user-friends',
            points: 100,
          },
        },
        {
          component: Custom,
          title: {
            text: 'Visit Us On Facebook',
            icon: 'fab fa-facebook-f',
            points: 50,
          },
          properties: {
            buttonText: 'Click Here',
            question: 'What is your facebook username?',
          },
        },
        {
          component: Custom,
          title: {
            text: 'Share this on linkdIn',
            icon: 'fab fa-linkedin',
            points: 100,
          },
          properties: {
            subtitle: 'Share the following url on your linkedin',
            buttonText: 'View Url',
            question: 'What is the direct url to the linkdin post you created?',
          },
        },
        {
          component: Custom,
          title: {
            text: 'Follow us on instagram',
            icon: 'fab fa-instagram',
            points: 50,
          },
          properties: {
            subtitle: 'Click below to follow us on Instagram',
            buttonText: 'Follow Us',
            question: 'What is your intagram username to verify your follow?',
          },
        },
      ]
    },
  },
}
</script>

<style></style>
