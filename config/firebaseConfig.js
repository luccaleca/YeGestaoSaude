// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@react-native-firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIKw7MmFNiWBHudRopK_5ubBEtydAdIxY",
  authDomain: "yegestaosaude-33937.firebaseapp.com",
  projectId: "yegestaosaude-33937",
  storageBucket: "yegestaosaude-33937.appspot.com",
  messagingSenderId: "67462386020",
  appId: "1:67462386020:web:fd4e2b977ae0e2ed9a2a71",
  measurementId: "G-0Q6ZM89LFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)