// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseTestConfig = {
  apiKey: "AIzaSyA-ihSCT_AYJW0KtBeCVEFpV3jrlklC-TI",
  authDomain: "wephco-site.firebaseapp.com",
  projectId: "wephco-site",
  storageBucket: "wephco-site.appspot.com",
  messagingSenderId: "980291792832",
  appId: "1:980291792832:web:ae87e0537aa7f275472225",
  measurementId: "G-E5738LW8X7",
};

const firebaseLiveConfig = {
  apiKey: "AIzaSyD_uQx2xyoKQJBeIRdQNUbH7CtvM7vHYtc",
  authDomain: "wephco-website-417eb.firebaseapp.com",
  projectId: "wephco-website-417eb",
  storageBucket: "wephco-website-417eb.appspot.com",
  messagingSenderId: "1092640047441",
  appId: "1:1092640047441:web:2107c84f376883c2ff5370",
  measurementId: "G-ZHMYMF9L96",
};

const firebaseConfig =
  process.env.NODE_ENV === "production"
    ? firebaseLiveConfig
    : firebaseTestConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
