// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZrGmJ1yf9e0V_IqdVQNXfuoCpNIztjJE",
  authDomain: "reactts-firebase-learning.firebaseapp.com",
  projectId: "reactts-firebase-learning",
  storageBucket: "reactts-firebase-learning.appspot.com",
  messagingSenderId: "251364471064",
  appId: "1:251364471064:web:f7ad774544ce0e3944ee6d",
  measurementId: "G-W6CGZQ2BFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Khởi tạo Authentication
export const auth = getAuth(app);

// Khởi tạo Firestore Database
export const db = getFirestore(app);
