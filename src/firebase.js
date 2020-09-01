import "firebase/firestore";

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "maps-of-venice.firebaseapp.com",
  databaseURL: "https://maps-of-venice.firebaseio.com",
  projectId: "maps-of-venice",
  storageBucket: "maps-of-venice.appspot.com",
  messagingSenderId: "1004145915620",
  appId: "1:1004145915620:web:bb706ab87a353cf8eb5ef1",
  measurementId: "G-CYE960RYD9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
