import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCix4LdnkS7R4hV2ZZrUjngOQBaUuj0qQk",
    authDomain: "clone-e20fa.firebaseapp.com",
    projectId: "clone-e20fa",
    storageBucket: "clone-e20fa.appspot.com",
    messagingSenderId: "314606395710",
    appId: "1:314606395710:web:4934d0caa6a578822bcc6f",
    measurementId: "G-C8G53D7H6Y",

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};