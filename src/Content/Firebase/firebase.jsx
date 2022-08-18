import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRMP_nFVNZ-4dypGKRiNBFP5Le1ssYIXg",
  authDomain: "leandro-e-alessandro.firebaseapp.com",
  projectId: "leandro-e-alessandro",
  storageBucket: "leandro-e-alessandro.appspot.com",
  messagingSenderId: "523428611963",
  appId: "1:523428611963:web:8901de5a6338034b6f9fde",
  measurementId: "G-CS5QW868MZ"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)