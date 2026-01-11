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

const mostrarInfo = async (event, info) => {
  let fecha = new Date();
  let cadena = "";
  let cadenaProtagonistas = "";
  info.forEach ( async element => {
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
      
      crearCadenaNavesVehiculos(promesasPersonajes);

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

const mostrarPersona = async (event, promesas) => {
  let cadena = "";
  try {
    const personajes = await Promise.all(promesas);

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
  } catch (error) {
    console.error("No se han cargado los personajes correctamente"), error;
  }
};

// Crea la cadena de texto que muestra las naves y vehículos en orden por personaje, se ejecuta en el mostrarInfo() para recoger las promesas de los protagonistas

const crearCadenaNavesVehiculos = async (promesas) => {
  let cadena = "";
  var botonPilota = document.createElement("button");
  botonPilota.innerHTML = "Pilota";
  try {
    const personajes = await Promise.all(promesas);
    

    personajes.forEach( async (personaje, index) => {

        const promesasNaves = personaje.starships.map((url) => {
          return accederNaves(url);
        });

        const promesasVehiculos = personaje.vehicles.map((url) => {
          return accederVehiculos(url);
        });

        Promise.all(promesasNaves).then((naves) => {
          if (naves.length > 0) {
            naves.forEach((nave) => {
              cadena += `
              <p>${personaje.name + ", " + nave.name + " (nave)"}</p>
              <br>
              <p>Modelo: ${nave.model} cm</p>
              <p>Fabricante: ${nave.manufacturer} kg</p>
              <p>Clase: ${nave.starship_class}</p>
              <br>`;
            });
          }
        });

        Promise.all(promesasVehiculos).then((vehiculos) => {
          if (vehiculos.length > 0) {
            vehiculos.forEach((vehiculo) => {
              cadena += `
              <p>${personaje.name + ", " + vehiculo.name + " (vehiculo)"}</p>
              <br>
              <p>Modelo: ${vehiculo.model} cm</p>
              <p>Fabricante: ${vehiculo.manufacturer} kg</p>
              <p>Clase: ${vehiculo.vehicle_class}</p>
              <br>`;
            });
          }
        });
        

        botonPilota.addEventListener("click", (event) => mostrarNavesVehiculos(event, cadena));
      
      });
      document.querySelector("#boton").innerHTML = "";
      document.getElementById("naves").innerHTML = "";
      document.querySelector("#boton").appendChild(botonPilota);
  } catch (error) {
    console.error("No se han cargado las naves y vehículos correctamente"), error;
  }
};

// Función que inserta la cadena en el div de naves, para mostrar las naves y vehiculos de dicha pelicula

const mostrarNavesVehiculos = async (event, cadena) => {
  try {
    document.getElementById("naves").innerHTML = cadena;
  } catch (error) {
    console.error("No se han cargado las naves y vehiculos correctamente"), error;
  }
};

// Devuelve el fetch del acceso a la API films

const accederPeliculas = async () => {
  try {
    const url = "https://swapi.info/api/films";
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos de la API peliculas", error);
  }
};

const accederPersonajes = async (urlPersonaje) => {
  try {
    const url = urlPersonaje;
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos de los personajes", error);
  }
};

const accederNaves = async (urlNave) => {
  try {
    const url = urlNave;
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos de las naves", error);
  }
};

const accederVehiculos = async (urlVehiculo) => {
  try {
    const url = urlVehiculo;
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos de los vehiculos", error);
  }
};



export { mostrarPeliculas, mostrarInfo, accederPeliculas };
