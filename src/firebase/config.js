import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqhivDDabq7JeAcYb0sI3tcbFmWT6DG44",
  authDomain: "axiom-play.firebaseapp.com",
  projectId: "axiom-play",
  storageBucket: "axiom-play.firebasestorage.app",
  messagingSenderId: "1059068159936",
  appId: "1:1059068159936:web:0cddf99e78b608c55e4a25"
};


export const app = initializeApp(firebaseConfig);