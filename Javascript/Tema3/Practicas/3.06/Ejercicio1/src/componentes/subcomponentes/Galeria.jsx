import "../css/contenido.css";

function Galeria() {
  return (
    <>
      <h2>Galería</h2>
      <label htmlFor="filtrar-galeria">Filtrar por: </label>
      <select name="filtrar-galerias" id="filtrar">
        <option value="sin-filtro">No filtrar</option>
        <option value="titulo">Título</option>
        <option value="interprete">Intérprete</option>
        <option value="director">Director</option>
      </select>
      <ul>
        <li>
          <img src="https://th.bing.com/th/id/R.0da4ee575f53c09f9966ae66196fea11?rik=V9Ivax1SdWHv%2fA&pid=ImgRaw&r=0" />
        </li>
        <li>
          <img src="https://th.bing.com/th/id/R.1a460fd76a6efac9ab452058ce3716ae?rik=1abZG5iwKxBdQQ&pid=ImgRaw&r=0" />
        </li>
        <li>
          <img src="https://www.themoviedb.org/t/p/original/lcYwCSTzCHv0Z2QRpfztt75JyYj.jpg" />
        </li>
        <li>
          <img src="https://pics.filmaffinity.com/Interstellar-366875261-large.jpg" />
        </li>
        <li>
          <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/whiplash-poster-1.jpg" />
        </li>
        <li>
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/culpable-cartel-2488571.jpg?tf=1200x" />
        </li>
        <li>
          <img src="https://image.tmdb.org/t/p/original/4xDFPDHVzATGVUsICqGWtdi8YAJ.jpg" />
        </li>
        <li>
          <img src="https://pics.filmaffinity.com/shine-287140726-large.jpg" />
        </li>
        <li>
          <img src="https://www.themoviedb.org/t/p/original/96FO2Z7cAB2tFNHXWS2igeWbkhM.jpg" />
        </li>
      </ul>
    </>
  );
}

export default Galeria;
