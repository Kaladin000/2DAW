import { useState } from 'react'

// Imprime la película y sus datos

function Pelicula({ pelicula }) {
  if (!pelicula) return null;

  return (
    <div id="info">
      <p>Título: {pelicula.title}</p>
      <p>Sinopsis: {pelicula.opening_crawl}</p>
      <p>Director: {pelicula.director}</p>
      <p>Productor: {pelicula.producer}</p>
      <p>Fecha: {pelicula.release_date}</p>
    </div>
  );
}

export default Pelicula