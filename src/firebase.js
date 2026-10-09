// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTpGge_K3mkSsAVUY60oxn20tq1Di66k",
  authDomain: "ced-firebase-2.firebaseapp.com",
  projectId: "ced-firebase-2",
  storageBucket: "ced-firebase-2.firebasestorage.app",
  messagingSenderId: "456608593789",
  appId: "1:456608593789:web:f3dcc53bd0b6e13e11be14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);