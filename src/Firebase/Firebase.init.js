// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8jbPNPdv-svGBk_bCbTu4r21hVTIE5ec",
  authDomain: "dragon-news-7c471.firebaseapp.com",
  projectId: "dragon-news-7c471",
  storageBucket: "dragon-news-7c471.firebasestorage.app",
  messagingSenderId: "238507232379",
  appId: "1:238507232379:web:5eb82b30d77098723b66de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;