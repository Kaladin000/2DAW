// Como dijiste que no hiciesemos una API de pokemon, me dieron ganas de hacerla, entonces aquí tienes una pequeña pokedex.
// Permite elegir entre todos los pokemons y muestra información básica. Si le das click a la imagen del pokemon, te muestra info de la región.

// Muestra una lista desplegable de pokemons, tiene un evento onChange para que la página cambie según el pokemon seleccionado.
// Para ello recorro los resultados del acceso a la API donde recojo todos los pokemons.

const mostrarPokemons = (resultados, lugarDOM) => {
  var info = resultados;
  let cadena = `
  <label for="pokemon">Elige un Pokémon:</label>
  <select id="elegirPokemon">
  <option value="">Selecciona</option>
  `;
  resultados.forEach((valor) => {
        cadena += `
        <option value=${valor.name}>${valor.name}</option>`;
  });
  cadena += `</select>`
  lugarDOM.innerHTML = cadena;

  const selectPokemon = document.querySelector("#elegirPokemon");
  selectPokemon.addEventListener("change", (event) => mostrarInfo(event, info));
};

// Muestra el pokemon seleccionado en el <select>, recogiendo la información detallada del pokemon, con su url.

const mostrarInfo = async (event, info) => {
  let cadena = "";
  let cadenaTipos = "";
  let cadenaStats = "";
  info.forEach ( async element => {
    if (element.name == event.target.value) {
      let pokemon = await accederAPI(element.url);

      // Creo una cadena para el array de tipos de pokemon.

      for (let i = 0; i < pokemon.types.length; i++) {
        cadenaTipos += pokemon.types[i].type.name;
        if (pokemon.types.length > 0 && i < pokemon.types.length && i != pokemon.types.length - 1) {
          cadenaTipos += ", ";
        } else {
          cadenaTipos += ".";
        }
      }

      // Creo una cadena para el array de estadísticas.

      for (let i = 0; i < pokemon.stats.length; i++) {
        cadenaStats += pokemon.stats[i].stat.name + " " + pokemon.stats[i].base_stat;
        if (pokemon.stats.length > 0 && i < pokemon.stats.length && i != pokemon.stats.length - 1) {
          cadenaStats += ", ";
        } else {
          cadenaStats += ".";
        }
      }

      // Compruebo de qué generación es, puesto que no sale explícitamente en la API.
      // Mediante descarte, la primera generación en orden numérico que encuentre en la que exista imagen se convierte en la primera generación,
      // y por tanto, la que diríamos que es "su generación" (simplemente recojo su url para luego acceder a la API)

      let urlGeneracion = "";

      if (pokemon.sprites.versions["generation-i"].yellow.front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/1/";
      } else if (pokemon.sprites.versions["generation-ii"].silver.front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/2/";
      } else if (pokemon.sprites.versions["generation-iii"].emerald.front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/3/";
      } else if (pokemon.sprites.versions["generation-iv"].platinum.front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/4/";
      } else if (pokemon.sprites.versions["generation-v"]["black-white"].front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/5/";
      } else if (pokemon.sprites.versions["generation-vi"]["x-y"].front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/6/";
      } else if (pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/7/";
      } else if (pokemon.sprites.versions["generation-viii"]["brilliant-diamond-shining-pearl"].front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/8/";
      } else if (pokemon.sprites.versions["generation-ix"]["scarlet-violet"].front_default) {
        urlGeneracion = "https://pokeapi.co/api/v2/generation/9/";
      }

      cadena = `
        <br>
        <img src="${pokemon.sprites.front_default}"></img>
        <p>Nombre: ${pokemon.name}</p>
        <p>Orden: ${pokemon.order}</p>
        <br>
        <p>Peso: ${pokemon.weight / 10} kg</p>
        <p>Altura: ${pokemon.height / 10} m</p>
        <p>Tipos: ${cadenaTipos}</p>
        <p>Estadísticas: ${cadenaStats}</p>
        `;
      document.getElementById("info").innerHTML = cadena;

      const imgPokemon = document.querySelector("img");
      imgPokemon.addEventListener("click", (event) => mostrarRegion(event, urlGeneracion));
    }}
    
)};

// Muestra información de la región del pokemon al hacer click en su imagen

const mostrarRegion = async (event, urlGeneracion) => {
  let cadena = "";
  let cadenaJuegos = "";

  let generacion = await accederAPI(urlGeneracion);

  // Creo la cadena de juegos a los que pertenece ésta generación.

  for (let i = 0; i < generacion.version_groups.length; i++) {
    cadenaJuegos += generacion.version_groups[i].name;
    if (generacion.version_groups.length > 0 && i < generacion.version_groups.length && i != generacion.version_groups.length - 1) {
      cadenaJuegos += ", ";
    } else {
      cadenaJuegos += ".";
    }
  }

  cadena = `
    <br>
    <p>Generación: ${generacion.id}</p>
    <p>Región: ${generacion.main_region.name}</p>
    <br>
    <p>JUEGOS/VERSIONES</p>
    <p>${cadenaJuegos}</p>
    `;

    document.getElementById("region").innerHTML = cadena;
};

// Acceso a todos los pokemons de la API.

const accederPokemons = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos de la API de pokemons", error);
  }
};

// Acceso general a la API, lo uso para acceder a pokemons en específico y regiones en específico

const accederAPI = async (url) => {
  try {
    const respuesta = await fetch(url);

    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("No se han podido recoger los datos del pokémon o región", error);
  }
};

export { mostrarPokemons, mostrarInfo, accederPokemons };