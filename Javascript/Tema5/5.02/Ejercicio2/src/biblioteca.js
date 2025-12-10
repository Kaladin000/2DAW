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
  info.forEach(element => {
    if (element.episode_id == event.target.getAttribute("id")) {

      // Saco la fecha y le doy el formato europeo

      let fecha = new Date(element.release_date);
      if (fecha.getMonth() > 9) {
        fecha = fecha.getDate() + "0" + fecha.getMonth() + "-" + fecha.getFullYear();
      } else {
        fecha = fecha.getDate() + "-0" + fecha.getMonth() + "-" + fecha.getFullYear();
      }

      // Creo la cadena única de la información de la peli

      cadena = `
        <br>
        <p>Título: ${element.title}</p>
        <p>Sinopsis: ${element.opening_crawl}</p>
        <br>
        <p>Director: ${element.director}</p>
        <p>Productor: ${element.producer}</p>
        <p>Fecha de lanzamiento: ${fecha}</p>`;
    }
  });
  document.getElementById("info").innerHTML = cadena;
};

export { mostrarPeliculas, mostrarInfo };
