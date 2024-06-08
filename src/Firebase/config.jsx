import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd9kcpIp8Srp4Me4D1rl4L-FK5acitpwg",
  authDomain: "adblitz-36e79.firebaseapp.com",
  projectId: "adblitz-36e79",
  storageBucket: "adblitz-36e79.appspot.com",
  messagingSenderId: "712830340178",
  appId: "1:712830340178:web:24551becbb1f89cbdf638b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export  {app , auth , googleProvider , fireDB};