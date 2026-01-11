import { useState } from 'react'

// Le agrego el controlador de eventos (es lo único que tiene distinto)

function Peliculas({ peliculas, onSelect }) {
  console.log(peliculas);
  return (
    <div id="peliculas">
      {peliculas.map((peli) => (
        <ul id={peli.episode_id} class="listaPelis" onClick={() => onSelect(peli)}>
          <li>ID: {peli.episode_id}</li>
          <li>Título: {peli.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default Peliculas
