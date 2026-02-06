import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// La configuración de firebase necesaria para utilizar sus dependencias,
// la clave de la api la guardo en el .env.

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "keep-games-alive.firebaseapp.com",
  projectId: "keep-games-alive",
  storageBucket: "keep-games-alive.firebasestorage.app",
  messagingSenderId: "796266390362",
  appId: "1:796266390362:web:e5c9dd9ccbe7f7f1070963"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Base de datos
export const auth = getAuth(app); // Login, register y usuarios