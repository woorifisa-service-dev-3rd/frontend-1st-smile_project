// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3KmUtYyJMMUJPl6F1vkCnhwrGR36_iM",
  authDomain: "smsauth-b6da6.firebaseapp.com",
  projectId: "smsauth-b6da6",
  storageBucket: "smsauth-b6da6.appspot.com",
  messagingSenderId: "530024047187",
  appId: "1:530024047187:web:30f6f30b03b3d38d861ca6",
  measurementId: "G-RV247GWG29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
