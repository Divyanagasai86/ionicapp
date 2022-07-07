// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnsZZEnJNqU8SRUeBUflsiRxCHAzf2yzU",
  authDomain: "dictionaryapps-3c6cb.firebaseapp.com",
  projectId: "dictionaryapps-3c6cb",
  storageBucket: "dictionaryapps-3c6cb.appspot.com",
  messagingSenderId: "677665023154",
  appId: "1:677665023154:web:6dc204669e32255115d5ab",
  measurementId: "G-791CZ94C4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app