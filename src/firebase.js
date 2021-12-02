// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdheJhq3HxsXZwWb5INiFvfGH7xhNSzS4",
  authDomain: "to-do-list-a8814.firebaseapp.com",
  projectId: "to-do-list-a8814",
  storageBucket: "to-do-list-a8814.appspot.com",
  messagingSenderId: "1064627642850",
  appId: "1:1064627642850:web:dfaf60049bc18ed146d9bb",
  measurementId: "G-W9DLSYWPT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);