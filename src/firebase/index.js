// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCch3sSc6yOEskXDTCAIzlUZMmy065S3b8",
  authDomain: "todo-app-react-cb95f.firebaseapp.com",
  projectId: "todo-app-react-cb95f",
  storageBucket: "todo-app-react-cb95f.appspot.com",
  messagingSenderId: "11282500679",
  appId: "1:11282500679:web:b58830f28b56193e20b562",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default firebaseConfig;
