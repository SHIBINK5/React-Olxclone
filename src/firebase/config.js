import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAn6Y4HW7tRYbIVqegt7uvrBMHGSR__Rjc",
    authDomain: "olxclone-d5527.firebaseapp.com",
    projectId: "olxclone-d5527",
    storageBucket: "olxclone-d5527.appspot.com",
    messagingSenderId: "1019493484179",
    appId: "1:1019493484179:web:febe88349a48dc0d05ef66",
    measurementId: "G-WVLTG2KL3T"
  };

export  default firebase.initializeApp(firebaseConfig)