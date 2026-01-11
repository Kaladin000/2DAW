import { useState } from 'react'

// Imprime los personajes y, utilizando el controlador de eventos, muestro la info detallada

function Personajes({ personajes, onSelect }) {
  return (
    <ol>
      {personajes.map((p) => (
        <li id={p.name} onClick={() => onSelect(p)}>
          {p.name}
        </li>
      ))}
    </ol>
  );
}

export default Personajes;