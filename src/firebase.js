import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// REPLACE THIS WITH YOUR OWN CONFIG FROM FIREBASE
const firebaseConfig = {

  apiKey: "AIzaSyDrLKAcnaVCXJ6d_vkTbJ9Jq1JNma5jCrE",

  authDomain: "fsdtask-90500.firebaseapp.com",

  projectId: "fsdtask-90500",

  storageBucket: "fsdtask-90500.firebasestorage.app",

  messagingSenderId: "120609688011",

  appId: "1:120609688011:web:6caa9086c95cfc2cf70e4e",

  measurementId: "G-TE889RJ57T"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // This is for your Firestore database [cite: 26]