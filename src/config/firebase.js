import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHiGWcwwpKGNWNOIZX5iMYjaDknYIpFPw",
  authDomain: "dufan-am2020.firebaseapp.com",
  databaseURL: "https://dufan-am2020.firebaseio.com",
  projectId: "dufan-am2020",
  storageBucket: "dufan-am2020.appspot.com",
  messagingSenderId: "264789428199",
  appId: "1:264789428199:web:c48b0e8f0dc463cfa9df42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
