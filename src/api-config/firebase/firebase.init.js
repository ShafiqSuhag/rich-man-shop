import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase

const initFirebase = () => {
     initializeApp(firebaseConfig);
}

export default initFirebase; 