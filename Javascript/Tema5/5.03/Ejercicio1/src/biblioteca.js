// Recoge el array resultados, lo itera y por cada iteración 
// muestra en una lista superpuesta los valores de cada película

// Después añade a todas ellas (mediante la clase listaPelis) el eventListener
// para que al hacer click en cada lista, muestre su título y sinopsis,
// junto a sus valores importantes

const mostrarPeliculas = (resultados, lugarDOM) => {
  var info = resultados;
  let cadena = "";
  resultados.length
    ? resultados.map((valor) => {
        cadena += `
        <br>
        <ul class="listaPelis" id=${valor.episode_id}>
          <li>ID: ${valor.episode_id}</li>
          <li>Título: ${valor.title}</li>
        </ul><br>`;
      })
    : (cadena = "No se han encontrado datos con el fetch");
  lugarDOM.innerHTML = cadena;

  const ulsPelis = document.querySelectorAll(".listaPelis");
  ulsPelis.forEach(peli => {
    peli.addEventListener("click", (event) => mostrarInfo(event, info));
  });
};

const mostrarInfo = (event, info) => {
  let fecha = new Date();
  let cadena = "";
  let cadenaProtagonistas = "";
  info.forEach(element => {
    if (element.episode_id == event.target.getAttribute("id")) {

      // Saco la fecha y le doy el formato europeo

      let fecha = new Date(element.release_date);
      if (fecha.getMonth() > 9) {
        fecha = fecha.getDate() + "0" + fecha.getMonth() + "-" + fecha.getFullYear();
      } else {
        fecha = fecha.getDate() + "-0" + fecha.getMonth() + "-" + fecha.getFullYear();
      }

      // recojo todos los arrays de personaje y los junto en un array de personajes promesa

      const promesasPersonajes = element.characters.map((url) => {
        return accederPersonajes(url);
      });

      // Espero a que todas las promesas terminen, entonces itero el array de personajes
      // para establecer un li por cada protagonista, hasta tener 10

      Promise.all(promesasPersonajes).then((personajes) => {

        personajes.forEach((personaje, index) => {
          if (index < 10) {
            cadenaProtagonistas += "<li>" + personaje.name + "</li>";
          } 
        });

      // Creo la cadena única de la información de la peli

      cadena = `
        <br>
        <p>Título: ${element.title}</p>
        <p>Sinopsis: ${element.opening_crawl}</p>
        <br>
        <p>Director: ${element.director}</p>
        <p>Productor: ${element.producer}</p>
        <p>Fecha de lanzamiento: ${fecha}</p>
        <div id="divPersonas">
          <p>Protagonistas:</p>
          <ol>
            ${cadenaProtagonistas}
          </ol>
        </div>`;
      
      document.getElementById("info").innerHTML = cadena;

      const olPersonajes = document.querySelectorAll("ol li");
      olPersonajes.forEach(personaje => {
      personaje.addEventListener("click", (event) => mostrarPersona(event, promesasPersonajes));
      });
      });

    }}
)};

// Recoge las promesas y itera el array de personajes para acceder solo a la que coincide con el nombre clickado
// Después recoge los datos específicos y los muestra una vez hecha la cadena

const mostrarPersona = (event, promesas) => {
  let promesasPersonajes = promesas;
  let cadena = "";
  Promise.all(promesasPersonajes).then((personajes) => {

    personajes.forEach((personaje, index) => {
      if ( index < 10 ) {
        if ( personaje.name == event.target.innerHTML ) {
          cadena = `
          <p>${personaje.name}</p>
          <br>
          <p>Género: ${personaje.gender}</p>
          <p>Altura: ${personaje.height} cm</p>
          <p>Peso: ${personaje.mass} kg</p>
          <p>Color de pelo: ${personaje.hair_color}</p>
          <p>Color de ojos: ${personaje.eye_color}</p>`;
        }
      } 
    });

    document.getElementById("persona").innerHTML = cadena;
  });
}

// Devuelve el fetch del acceso a la API films

const accederPeliculas = () => {
  const url = "https://swapi.dev/api/films";
  return fetch(url)
    .then((objetoRespuesta) => {
      // Se recibe un objeto respuesta y se consume (para acceder a su contenido).
      return objetoRespuesta.json();
    })
    .then((datosRespuesta) => {
      // Esta API devuelve un objeto y en su clave "results" están los datos que se están buscando.
      return datosRespuesta;
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    });
};

const accederPersonajes = (urlPersonaje) => {
  const url = urlPersonaje;
  return fetch(url)
    .then((objetoRespuesta) => {
      // Se recibe un objeto respuesta y se consume (para acceder a su contenido).
      return objetoRespuesta.json();
    })
    .then((datosRespuesta) => {
      // Esta API devuelve un objeto y en su clave "results" están los datos que se están buscando.
      return datosRespuesta;
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    });
};



export { mostrarPeliculas, mostrarInfo, accederPeliculas };
