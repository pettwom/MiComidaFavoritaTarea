import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // Pegar configuración de Firebase Console
  apiKey: "AIzaSyDWAS-mwBJU08rcg5QJciZKkiT17m0lWMc",
  authDomain: "micomidafavorita-61e39.firebaseapp.com",
  projectId: "micomidafavorita-61e39",
  storageBucket: "micomidafavorita-61e39.firebasestorage.app",
  messagingSenderId: "1072137422210",
  appId: "1:1072137422210:web:a23d7f183dae8e5e31fb9b",
  measurementId: "G-LS6D84VEKQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
