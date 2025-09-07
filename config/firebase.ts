// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGHsJkuXrN4cDnA6YEWGbNHk_SVQeaEww",
  authDomain: "finfam-8b7c5.firebaseapp.com",
  projectId: "finfam-8b7c5",
  storageBucket: "finfam-8b7c5.firebasestorage.app",
  messagingSenderId: "98813393987",
  appId: "1:98813393987:web:2e9a5bbf8936c2e6eee8f6",
  measurementId: "G-6LLNCBY521",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const fireStore = getFirestore(app);
