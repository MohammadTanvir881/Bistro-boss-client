// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyA4d3PTj2Q_CaCZae94ZOEoY3fgD8Pgw0M",
//   authDomain: "bistro-boss-c077b.firebaseapp.com",
//   projectId: "bistro-boss-c077b",
//   storageBucket: "bistro-boss-c077b.appspot.com",
//   messagingSenderId: "330138280850",
//   appId: "1:330138280850:web:6cb07af33bd90e187c174b"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTEDID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;