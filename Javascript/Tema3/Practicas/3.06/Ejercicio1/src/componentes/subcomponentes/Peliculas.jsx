import "../css/contenido.css"

function Peliculas() {
  return (
    <>
      <h2>Películas</h2>
      <label htmlFor="filtrar-peliculas">Filtrar por: </label>
      <select name="filtrar-peliculas" id="filtrar">
        <option value="sin-filtro">No filtrar</option>
        <option value="titulo">Título</option>
        <option value="interprete">Intérprete</option>
        <option value="director">Director</option>
      </select>
      <ul>
        <li>Django Desencadenado</li>
        <li>Cadena Perpetua</li>
        <li>La La Land</li>
        <li>Interestellar</li>
        <li>Whiplash</li>
        <li>Culpable</li>
        <li>Crazy, Stupid, Love</li>
        <li>Shine. El resplandor de un genio</li>
        <li>Star Wars: Episodio VIII - Los últimos Jedi</li>
      </ul>
    </>
  );
}

export default Peliculas;
