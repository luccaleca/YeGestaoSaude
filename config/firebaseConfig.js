import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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

// Using auth, firestore, and storage without passing app should use the default Firebase app
const firebaseAuth = auth();
const firebaseFirestore = firestore();
const firebaseStorage = storage();

export { firebaseAuth, firebaseFirestore, firebaseStorage };
