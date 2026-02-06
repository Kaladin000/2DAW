import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// Uso este Header en todas las páginas.

const Header = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  // Aquí en el Header tengo el botón de cerrar sesión, este es su handle,
  // espera a que la función de logout del useAuth se ejecute, entonces navega
  // a inicio y confirma que a cerrado sesión.

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      alert("Sesión cerrada");
    } catch {
      setError("Error al cerrar sesión");
    }
  };

  return (
    <header style={{ }}>
      <h1  style={{ fontSize: "3rem", textAlign: "center" }}>Keep games alive</h1>
      <p style={{ color: "#9ca3af", fontSize: "1.2rem", textAlign: "center" }}>
        Registro personal de videojuegos
      </p>
      <button className="logout-btn" onClick={handleLogout} style={{ display: "flex", alignItems: "center" }}>Cerrar sesión</button>
    </header>
  );
};

export default Header;