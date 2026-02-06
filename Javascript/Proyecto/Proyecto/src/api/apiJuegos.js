// Dependiendo de si estoy usando la web desplegada con firebase hosting,
// o el propio React Vite, elijo una dirección (la segunda dirección) es en la que
// las claves de la api pasan por el backend para generar un token con el que puedo empezar
// a pedirle campos a la api, y así no tener errores de cors. 
// La primera dirección es un proxy de ésta, para poder trabajar en React Vite de igual manera.

const IGDB_URL = import.meta.env.DEV
  ? "/igdb/igdbProxy" // Vite proxy (dev)
  : "https://us-central1-keep-games-alive.cloudfunctions.net/igdbProxy"; // Producción

// Hago una petición a la api de IGDB (la api de recoje datos de todos los juegos así como la puntuación de
// toda la prensa). Funciona de tal manera que, hago un método POST, con un cuerpo que tiene su propio método de
// búsqueda específico.

// Aquí busco los 10 primeros juegos y los campos que me interesan, de ésta manera al escribir el juego,
// sugeriré juegos al usuario para que pueda seleccionar el que quiere guardar.

export const buscarJuegos = async (texto) => {
  if (texto.length < 3) return [];

  try {
    const response = await fetch(IGDB_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: `
          search "${texto}";
          fields 
            name,
            genres.name,
            rating,
            artworks.url,
            storyline,
            summary;
          limit 10;
        `,
      }
    );

    const data = await response.json();

    console.log("IGDB DATA:", data);

    return data;
  } catch (error) {
    console.error("Error buscando juegos en IGDB", error);
    return [];
  }
};