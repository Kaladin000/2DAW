import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const useFirestore = () => {
  const [juegos, setJuegos] = useState([]);
  const [user, setUser] = useState(null);

  const [years, setYears] = useState([]);

  // Escuchar cambios en el Auth
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  // Escuchar los videojuegos del usuario (formulario)
  useEffect(() => {
    if (!user) return;

    // Creo una referencia a mi subcolección de firestore

    const ref = collection(db,"users",user.uid,"videojuegos");

    // Utilizo onSnapshot para escuchar cambios en tiempo real, como en anteriores ejercicios,
    // Lo primero de todo, recojo todos los juegos, y les pongo su id detrás (doc.id).
    // Luego los pongo en el estado de juegos.

    const unsubscribe = onSnapshot(ref, snapshot => {
      const data = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}));

      setJuegos(data);

      // Para recoger los años en los que tiene juegos
      const yearsSet = new Set();
      data.forEach((juego) => {
        if (juego.year) yearsSet.add(juego.year); // Si existe el año lo, añade al Set
      });

      setYears(Array.from(yearsSet).sort()); // lo guardo en el estado ordenado

    });

    return () => unsubscribe();
  }, [user]);

  // Añadir el juego
  const addJuego = async (juego) => {
    if (!user) return;

    const ref = collection(db,"users",user.uid,"videojuegos");
    await addDoc(ref, juego);
  };

  // Borrar juego
  const borrarJuego = async (id) => {
    if (!user) return;

    const ref = doc(db, "users", user.uid, "videojuegos", id);
    await deleteDoc(ref);
  };

  // Editar juego
  const editarJuego = async (id, nuevosDatos) => {
    if (!user) return;

    const ref = doc(db, "users", user.uid, "videojuegos", id);
    await updateDoc(ref, nuevosDatos);
  };

  return { juegos, addJuego, borrarJuego, editarJuego, years };
};

export default useFirestore;