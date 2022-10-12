// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ihSCT_AYJW0KtBeCVEFpV3jrlklC-TI",
  authDomain: "wephco-site.firebaseapp.com",
  projectId: "wephco-site",
  storageBucket: "wephco-site.appspot.com",
  messagingSenderId: "980291792832",
  appId: "1:980291792832:web:ae87e0537aa7f275472225",
  measurementId: "G-E5738LW8X7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
