import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"

const google = new firebase.auth.GoogleAuthProvider()

const app = firebase.initializeApp({
  apiKey: "AIzaSyC6-vXKieNlrq6Ri8q14nrgGHSEM0PyTh4",
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
})

export const googleProvider = google
export const auth = app.auth()
export default app
