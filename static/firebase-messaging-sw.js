/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js')

const getKey = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(
    'https://us-central1-tubely-44839.cloudfunctions.net/api/key',
    requestOptions
  )
    .then((response) => response.text())
    .then((data) => {
      // Initialize the Firebase app in the service worker by passing in
      // your app's Firebase config object.
      // https://firebase.google.com/docs/web/setup#config-object
      firebase.initializeApp({
        apiKey: data,
        authDomain: 'tubely-44839.firebaseapp.com',
        projectId: 'tubely-44839',
        storageBucket: 'tubely-44839.appspot.com',
        messagingSenderId: '432539437349',
        appId: '1:432539437349:web:a43864c364216b149b72cc',
        measurementId: 'G-G60G5FQY3K',
      })

      // Retrieve an instance of Firebase Messaging so that it can handle background
      // messages.
      const messaging = firebase.messaging()

      messaging.onBackgroundMessage((payload) => {
        console.log(
          '[firebase-messaging-sw.js] Received background message ',
          payload
        )
        // Customize notification here
        const notificationTitle = 'Background Message Title'
        const notificationOptions = {
          body: 'Background Message body.',
          icon: '/firebase-logo.png',
        }

        self.registration.showNotification(
          notificationTitle,
          notificationOptions
        )
      })
    })
    .catch((error) => console.log('error', error))
}

getKey()
