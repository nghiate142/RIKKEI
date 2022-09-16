// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKP5Ow5YlgzorcAVkKn1622HhHjvsjAr0",
  authDomain: "chat-app-87805.firebaseapp.com",
  projectId: "chat-app-87805",
  storageBucket: "chat-app-87805.appspot.com",
  messagingSenderId: "690416133187",
  appId: "1:690416133187:web:725af69d43ed1eb098e0f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
