// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU3Auwe0fBadBCnHgKm5xEMKVHcuYzSPc",
  authDomain: "filmy-gpt-95ef2.firebaseapp.com",
  projectId: "filmy-gpt-95ef2",
  storageBucket: "filmy-gpt-95ef2.appspot.com",
  messagingSenderId: "857048431715",
  appId: "1:857048431715:web:98fee74a1ee55b726d4c56",
  measurementId: "G-D8X1LHCF70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();