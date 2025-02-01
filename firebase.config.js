// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfPhoNXSwzsbEek22J6sB-ZPlRqZaKqp4",
  authDomain: "otp-project-f7af0.firebaseapp.com",
  projectId: "otp-project-f7af0",
  storageBucket: "otp-project-f7af0.firebasestorage.app",
  messagingSenderId: "356465318499",
  appId: "1:356465318499:web:caf30389e1c5ec419fb656",
  measurementId: "G-R41PTMNVZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
