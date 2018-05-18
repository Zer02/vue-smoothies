import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAdlYwZH-i_HgdTY4aEji_t9xUrfajR99c",
  authDomain: "udemy-ninja-smoothies-ec095.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-ec095.firebaseio.com",
  projectId: "udemy-ninja-smoothies-ec095",
  storageBucket: "udemy-ninja-smoothies-ec095.appspot.com",
  messagingSenderId: "65496876156"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()