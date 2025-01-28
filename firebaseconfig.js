// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmdpeGfdR4dwcU5v0Tk2UrAt9kHs67LoU",
  authDomain: "first--firestore--project.firebaseapp.com",
  projectId: "first--firestore--project",
  storageBucket: "first--firestore--project.firebasestorage.app",
  messagingSenderId: "553085571238",
  appId: "1:553085571238:web:c551457fa4c481ffd16467",
  measurementId: "G-TPGVQT6D5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);