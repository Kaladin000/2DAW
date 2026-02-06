import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/config";

// Utilizo auntenticación con firebase para que cada usuario tenga su base de datos
// con sus juegos, cada vez que inicia este useAuth, comprueba si hay un usuario logueado
// y en caso de haberlo lo guarda en el estado.

// También guardo un estado loading, para saber si el usuario ha dejado de cargar o sigue cargando.

// El resto de funciones sirven para registrar, loguear y cerrar sesión, utilizando también
// la instancia auth de firebase.

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Comprobar si el usuario ya está logueado y si firebase ha dejado de buscarlo
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  return { user, loading, register, login, logout };
};

export default useAuth;