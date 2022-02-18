// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVXM8gdrhVl4cBOBwUhlu2-komdMxnsWw",
  authDomain: "herracol-api-8820d.firebaseapp.com",
  databaseURL: "https://herracol-api-8820d-default-rtdb.firebaseio.com",
  projectId: "herracol-api-8820d",
  storageBucket: "herracol-api-8820d.appspot.com",
  messagingSenderId: "99858612114",
  appId: "1:99858612114:web:406e5b489709d593540b4b",
  measurementId: "G-6DBVM7ELXJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const store = getFirestore(app)