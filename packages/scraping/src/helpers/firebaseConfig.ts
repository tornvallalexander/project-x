const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAsQsrB8ZLdj0BZGsMRDgRzwtYrXro0kZw",
  authDomain: "project-x-d1623.firebaseapp.com",
  projectId: "project-x-d1623",
  storageBucket: "project-x-d1623.appspot.com",
  messagingSenderId: "755447796297",
  appId: "1:755447796297:web:f0152785aa0096f3a26598",
  measurementId: "G-VDYP36Q697",
};

const appConfig = initializeApp(firebaseConfig);
export const db = getFirestore(appConfig);
