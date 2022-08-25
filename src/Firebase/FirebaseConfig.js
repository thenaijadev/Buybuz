import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrygfee2cfm3bO8aPOHuID6kCZ8wWwHkY",
  authDomain: "buyzaar-ee6c5.firebaseapp.com",
  projectId: "buyzaar-ee6c5",
  storageBucket: "buyzaar-ee6c5.appspot.com",
  messagingSenderId: "34237681439",
  appId: "1:34237681439:web:51bebf3c38014e1c36aa2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
