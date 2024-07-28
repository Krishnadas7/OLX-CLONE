// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_zor8IMfEritXjzx9qcENXEuBaWnaoc8",
  authDomain: "myolx-a9398.firebaseapp.com",
  projectId: "myolx-a9398",
  storageBucket: "myolx-a9398.appspot.com",
  messagingSenderId: "162760220800",
  appId: "1:162760220800:web:16c570a9df76ce7c3f8665",
  measurementId: "G-1BWZ00M7P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

export const firestore = getFirestore(app)
export const storage = getStorage(app);