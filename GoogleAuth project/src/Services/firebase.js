// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_D-cQpzUOKkruRoZaTSEnZkH6PZ1LO8E",
  authDomain: "login-auth-b1948.firebaseapp.com",
  projectId: "login-auth-b1948",
  storageBucket: "login-auth-b1948.firebasestorage.app",
  messagingSenderId: "1086469904427",
  appId: "1:1086469904427:web:80a9b30ffe949c92faf26e",
  measurementId: "G-R5HHSYJPCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
