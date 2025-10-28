import Pelicula from "./Pelicula";

// mediante props recibe el array con la información en JSON de las películas
// hago un map de dicho array y utilizo el componente Pelicula para "crear" o dar forma a cada
// película, cada una con su par de claves independientes, recogiendo los valores del array JSON

const Peliculas = ({ arrayPeliculas }) => {
  return (
    <div>
      {arrayPeliculas.map((pelicula) => (
        <Pelicula
          key={pelicula.id}
          nombre={pelicula.nombre}
          director={pelicula.director}
          cartelera={pelicula.cartelera}
          actores={pelicula.actores}
        >
          {pelicula.resumen}
        </Pelicula>
      ))}
    </div>
  );
};

export default Peliculas;
