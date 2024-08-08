// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUM6pjUpUdtyl0FkPg0wk9ZQzU7VOG1o",
  authDomain: "inventory-manager-2bc4e.firebaseapp.com",
  projectId: "inventory-manager-2bc4e",
  storageBucket: "inventory-manager-2bc4e.appspot.com",
  messagingSenderId: "288729988917",
  appId: "1:288729988917:web:5990036729fdbc8e2cd67c",
  measurementId: "G-XL5SQ8SFJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
