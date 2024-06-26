// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpVAgjILgQiQkGfh3sSNDO_lig1c2vwnw",
  authDomain: "dragon-news-1b69a.firebaseapp.com",
  projectId: "dragon-news-1b69a",
  storageBucket: "dragon-news-1b69a.appspot.com",
  messagingSenderId: "691286141740",
  appId: "1:691286141740:web:c6919d2f1c9fc5a1375a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;