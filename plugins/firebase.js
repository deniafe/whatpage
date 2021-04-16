import firebase from 'firebase'
// import 'firebase/messaging'

if (!firebase.apps.length) {
  // Initialize firebase
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'tubely-44839.firebaseapp.com',
    projectId: 'tubely-44839',
    storageBucket: 'tubely-44839.appspot.com',
    messagingSenderId: '432539437349',
    appId: '1:432539437349:web:a43864c364216b149b72cc',
    measurementId: 'G-G60G5FQY3K',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, firebase, auth }
