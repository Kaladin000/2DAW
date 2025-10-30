import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <h2>Menú</h2>

                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/peliculas">Películas</Link></li>
                        <li><Link to="/interpretes">Intérpretes</Link></li>
                        <li><Link to="/galeria">Galería</Link></li>
                    </ul>
                </ul>
            </nav>
        </>
    );
}

export default Menu