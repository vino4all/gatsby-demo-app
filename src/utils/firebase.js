import * as firebase from 'firebase'

const config = {
  apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
  authDomain: `${process.env.GATSBY_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.GATSBY_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.GATSBY_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.GATSBY_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID}`
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth
