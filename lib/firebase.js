// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL5-BR3yKwER-bAij4tOTaINR5RdbnDmU",
  authDomain: "devconnector-fce7c.firebaseapp.com",
  projectId: "devconnector-fce7c",
  storageBucket: "devconnector-fce7c.firebasestorage.app",
  messagingSenderId: "159401834793",
  appId: "1:159401834793:web:4076e8bd5d9d1600555f38",
  measurementId: "G-3391CPEC23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
