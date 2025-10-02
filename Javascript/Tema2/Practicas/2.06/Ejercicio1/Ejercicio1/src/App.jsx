function Cartela() {
  return (
    <img src="https://pics.filmaffinity.com/la_la_land-262021831-large.jpg" alt="Cartela La La Land"  width={500}/>
  );
}

function Resumen(props) {
  return (
    <p>{props.children}</p>
  );
}

function Elenco(props) {
  return (
    <article>
      <section>
        <h3>{props.actor}</h3>
        <img src={props.imagen} alt={props.actor} width={300}/>
      </section>
      <p>{props.children}</p>
    </article>
  );
}

function App(props) {
  return (
    <>
      <h1>{props.titulo}</h1>
      <h2>Escrita y dirigida por {props.director}</h2>
      <Resumen>La película cuenta la historia de Mia, una empleada de una cafetería que aspira a ser actriz y Sebastian,
                 un pianista de jazz desempleado con grandes ambiciones. A pesar de sus diferencias y sus distintas personalidades,
                 gracias a una serie de acontecimientos sus caminos acabarán cruzándose.</Resumen>
      <div className="elenco">
        <Cartela />
        <Elenco actor="Ryan Gosling" imagen="https://cdn.britannica.com/93/215393-050-E428CADE/Canadian-actor-musician-Ryan-Gosling-2016.jpg">Ryan Gosling es un actor y músico canadiense nacido el 12 de noviembre de 1980 en Londres, Ontario. 
        Comenzó su carrera en la televisión infantil antes de dar el salto al cine, donde se destacó por su versatilidad en películas como La La Land, Drive y Blade Runner 2049. Reconocido por su carisma y talento, ha sido nominado a varios 
        premios importantes, incluyendo los Óscar, y combina su carrera actoral con proyectos musicales y de producción cinematográfica.</Elenco>
        <Elenco actor="Emma Stone" imagen="https://celebmafia.com/wp-content/uploads/2014/07/emma-stone-at-good-morning-america-in-new-york-city-july-2014_17.jpg">Emma Stone, nacida el 6 de noviembre de 1988 en Scottsdale, Arizona, es una actriz
        estadounidense conocida por su versatilidad y carisma en cine y teatro. Saltó a la fama con comedias como Easy A y alcanzó el reconocimiento internacional por La La Land, película que le valió un Óscar a la Mejor Actriz. Además de su talento 
        actoral, ha participado en musicales, dramas y comedias, consolidándose como una de las figuras más destacadas de Hollywood de su generación.</Elenco>
        <Elenco actor="J. K. Simmons" imagen="https://cdn.britannica.com/74/225074-050-73CC8F24/JK-Simmons-2019.jpg?w=300">J. K. Simmons, nacido el 9 de enero de 1955 en Detroit, Michigan, es un actor estadounidense reconocido por su versatilidad 
        en cine, televisión y teatro. Ha interpretado desde personajes cómicos hasta roles intensos y dramáticos, destacando su actuación como el estricto profesor en Whiplash, que le valió un Óscar al Mejor Actor de Reparto. Con una carrera que 
        abarca décadas, Simmons es también conocido por sus papeles en Spider-Man, La La Land y numerosas series y películas de animación.</Elenco>
      </div>
    </>
  );
}

export default App;
