// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMusgPgB9bH-z681zenNUlnWw-p4m1pq4",
  authDomain: "dragon-news-b6177.firebaseapp.com",
  projectId: "dragon-news-b6177",
  storageBucket: "dragon-news-b6177.firebasestorage.app",
  messagingSenderId: "276633404566",
  appId: "1:276633404566:web:177be71d3332a46a73eeb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;