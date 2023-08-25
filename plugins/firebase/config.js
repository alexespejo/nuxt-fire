// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAwGnFg_tD5tQQI4KiX6K6Gnmd-Tsh1PpE",
 authDomain: "firenuxt-c4d77.firebaseapp.com",
 projectId: "firenuxt-c4d77",
 storageBucket: "firenuxt-c4d77.appspot.com",
 messagingSenderId: "999400069893",
 appId: "1:999400069893:web:c7d598555daa6f43bcb56c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
