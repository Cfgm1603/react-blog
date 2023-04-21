// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLWJ_9Zsnqc9_bwjpMXDYnEUTRWatRFNs",
  authDomain: "reactblog-558f4.firebaseapp.com",
  projectId: "reactblog-558f4",
  storageBucket: "reactblog-558f4.appspot.com",
  messagingSenderId: "825143598263",
  appId: "1:825143598263:web:cc0ae11df7c45e19b1c132",
  measurementId: "G-XZMN5X9VF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);