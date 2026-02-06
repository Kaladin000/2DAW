import { Link } from "react-router-dom";


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../componentes/otros/Header";
import Footer from "../componentes/otros/Footer";

const Inicio = () => {
  const { login, register, user } = useAuth();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Cuando el usuario clica el botón de loguear, ocurre este handle,
  // evita que se recargue la página, loguea al usuario con el método
  // login de useAuth y los parámetros, y si se ha hecho con éxito,
  // lo redirige a la lista de juegos.

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setError("");
      await login(loginEmail, loginPassword);
      navigate("/lista");
    } catch {
      setError("Credenciales incorrectas");
    }
  };

  // Cuando el usuario clica el botón de registrar, ocurre este handle,
  // evita que se recargue la página, registra al usuario con el método
  // register de useAuth y los parámetros, y si se ha hecho con éxito,
  // lo redirige a la lista de juegos.

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setError("");
      await register(registerEmail, registerPassword);
      navigate("/lista");
    } catch {
      setError("Error al registrar el usuario");
    }
  };

  // Los campos escuchan constantemente cambios, y cuando lo hacen guardan
  // en su estado los parámetros (véase contraseña o correo) y si hay
  // un error se muestra un párrafo junto al error.

  return (
    <>
      <Header />

      <main>

        {/* SOLO si el usuario está logueado */}
        {user && (
          <nav>
            <Link to="/lista">Lista de juegos</Link>
            <Link to="/formulario">Añadir juego</Link>
          </nav>
        )}


        <div className="auth-container">
          {/* LOGIN */}
          <section className="auth-block">
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />

              <button type="submit">Login</button>
            </form>
          </section>

          {/* REGISTER */}
          <section className="auth-block">
            <h3>Registro</h3>

            <form onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={e => setRegisterEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={registerPassword}
                onChange={e => setRegisterPassword(e.target.value)}
              />

              <button type="submit">Registro</button>
            </form>
          </section>
        </div>

        {error && <p className="auth-error">{error}</p>}
      </main>

      <Footer />
    </>
  );
};

export default Inicio;