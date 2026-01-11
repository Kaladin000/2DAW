import { useState } from 'react'

// Imprime los detalles del personaje

function Personaje({ persona }) {
  if (!persona) return null;

  return (
    <div id="personaje">
      <p>{persona.name}</p>
      <p>Género: {persona.gender}</p>
      <p>Altura: {persona.height}</p>
      <p>Peso: {persona.mass}</p>
      <p>Pelo: {persona.hair_color}</p>
      <p>Ojos: {persona.eye_color}</p>
    </div>
  );
}

export default Personaje;