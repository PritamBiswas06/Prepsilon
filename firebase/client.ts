// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe-qC3UMX6cC2PYNOhJwy6I8s-83JQEZo",
  authDomain: "prepsilon-2e28e.firebaseapp.com",
  projectId: "prepsilon-2e28e",
  storageBucket: "prepsilon-2e28e.firebasestorage.app",
  messagingSenderId: "141272821192",
  appId: "1:141272821192:web:0e1a090020e83f1dd1a4fd",
  measurementId: "G-WBQSJ4DDZ5"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth =getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);