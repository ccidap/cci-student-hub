import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDZzUh7JTtCHUEi0hD5DvdvV1qJ0sXTzjs",
  authDomain: "guidebook-dap.firebaseapp.com",
  databaseURL: "https://guidebook-dap.firebaseio.com",
  projectId: "guidebook-dap",
  storageBucket: "guidebook-dap.appspot.com",
  messagingSenderId: "262927131503"
}
firebase.initializeApp(config)

export default firebase