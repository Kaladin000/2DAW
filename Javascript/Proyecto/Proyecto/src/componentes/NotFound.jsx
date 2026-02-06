import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../componentes/otros/Header";
import Footer from "../componentes/otros/Footer";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Cada vez que carga la página comprueba si el parámetro loading cambia, compruebo que exista y sea true,
  // entonces vuelve (el usuario está logueado y puede navegar).
  // En caso contrario, significará que el usuario no está logueado, y lo devuelve al inicio.

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/"); 
  }, [loading]);
  return (
    <>
      <Header />

      <main>
        <h1>ERROR 404 NOT FOUND</h1>
        <Link to="/">Volver al inicio</Link>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;