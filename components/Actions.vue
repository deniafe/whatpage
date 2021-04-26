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
import { firebase, db } from '@/plugins/firebase'
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
            func() {
              window.open('https://www.geeksforgeeks.org', '_blank')
            },
          },
        },
        {
          component: Custom,
          title: {
            text: 'Subscribe to our notification',
            icon: 'fa fa-bell-o',
            points: 100,
          },
          properties: {
            subtitle:
              'To subscribe and get 100 more points, simply click on the subscribe button, a popup will appear. Click on subscribe and you get 100 more points',
            buttonText: 'Subscribe',
            func() {
              firebase
                .messaging()
                .getToken()
                .then((token) => {
                  console.log('Here is the user token', token)
                  db.collection('tokens')
                    .add({
                      token,
                      email: 'deniafe@gmail.com',
                      uid: 'gfdtrfsedwe1234532dsffd',
                    })
                    .then(() => {
                      console.log('success')
                    })
                    .catch((err) =>
                      console.log(`Could not add user token to database`, err)
                    )
                })
                .catch((err) =>
                  console.log(`User did not give us the permission`, err)
                )
            },
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
