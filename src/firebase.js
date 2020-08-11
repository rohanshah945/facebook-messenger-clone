import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQVDX9rt4y0qoTsbahODkllJdP9ukPnGI",
  authDomain: "facebook-messenger-clone-rs.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-rs.firebaseio.com",
  projectId: "facebook-messenger-clone-rs",
  storageBucket: "facebook-messenger-clone-rs.appspot.com",
  messagingSenderId: "191778199106",
  appId: "1:191778199106:web:dfa3329a6191779be7bfdb",
  measurementId: "G-183WJ504EF",
});

const db = firebaseApp.firestore();

export default db;
