"use strict";

// Añade una entrada buscando los valores escritos en el navegador, forma un array entrada
// con dichos valores, saca el valor por la key "entradas" del localStorage, comprueba si existe.
// Si no existe se edita para que sea un array vacío, y si no, obtengo las entradas en formato array.ç
// Una vez ocurre eso, pongo la entrada mendiante push().
// Guardo las entradas en el localStorage, no sin antes pasarlas a JSON.

const add = () => {
  const addBoton = document.createElement("button");
  addBoton.innerHTML = "Añadir";
  addBoton.addEventListener("click", addEntrada);

  document.querySelector("#add").appendChild(addBoton);

  function addEntrada() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    if (!nombre || !apellido || !telefono || !correo) {
      alert("No has insertado algún valor para añadir");
      return;
    }

    let entrada = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      correo: correo
    };

    let entradas = localStorage.getItem("entradas");

    if (entradas !== null) {
      entradas = JSON.parse(entradas);
    } else {
      entradas = [];
    }; entradas.push(entrada);

    localStorage.setItem("entradas", JSON.stringify(entradas));
  }
}

// Paso a array el valor de la key "entradas" del localStorage, por cada entrada
// añado a un string sus cuatro parámetros. Lo imprimo mediante DOM.

const listar = () => {
  document.querySelector("#contenedorLista").innerHTML = "";
  let stringLista = "";
  const listarBoton = document.createElement("button");
  listarBoton.innerHTML = "Listar";
  listarBoton.addEventListener("click", mostrarLista);

  document.querySelector("#lista").appendChild(listarBoton);

  function mostrarLista() {
    const entradas = JSON.parse(localStorage.getItem("entradas"));

    if (entradas === null) {
      alert("No existen entradas");
      return;
    }

    entradas.forEach((entrada) => {
      stringLista += `
      <p>Nombre: ${entrada.nombre}<p>
      <p>Apellido(s): ${entrada.apellido}<p>
      <p>Teléfono: ${entrada.telefono}<p>
      <p>Correo: ${entrada.correo}<p>
      <br>
      `;
    });

    document.querySelector("#contenedorLista").innerHTML = stringLista;
  }
}

// Al introducir uno de los valores en el navegador, busca por todo el array la coincidencia
// Guarda los valores de la coincidencia (entrada) y los imprime mediante el DOM.

const buscar = () => {
  let stringEntrada = "";
  const buscarBoton = document.createElement("button");
  buscarBoton.innerHTML = "Buscar";
  buscarBoton.addEventListener("click", buscarEntrada);

  document.querySelector("#buscarCampos").appendChild(buscarBoton);

  function buscarEntrada() {
    let nombre = document.getElementById("nombreBuscar").value;
    let apellido = document.getElementById("apellidoBuscar").value;
    let telefono = document.getElementById("telefonoBuscar").value;

    if (!nombre && !apellido && !telefono) {
      alert("No has insertado ningún valor de búsqueda");
      return;
    }

   const entradas = JSON.parse(localStorage.getItem("entradas"));
  
   if (entradas === null) {
      alert("No existen entradas");
      return;
    }

    entradas.forEach((entrada) => {
      if (entrada.nombre === nombre || entrada.apellido === apellido || entrada.telefono === telefono) {
        stringEntrada= `
        <p>Nombre: ${entrada.nombre}<p>
        <p>Apellido(s): ${entrada.apellido}<p>
        <p>Teléfono: ${entrada.telefono}<p>
        <p>Correo: ${entrada.correo}<p>
        `;
      }
    });

    document.querySelector("#entradaBuscada").innerHTML = stringEntrada;
  }
}

// AL introducir valores de búsqueda y valores de edición en el navegador, cuando
// se clique el botón editar, buscará el valor coincidente de la búsqueda y editará los valores
// que existan en los campos de edición.

const editar = () => {
  const editarBoton = document.createElement("button");
  editarBoton.innerHTML = "Editar";
  editarBoton.addEventListener("click", editarEntrada);

  document.querySelector("#editar").appendChild(editarBoton);

  function editarEntrada() {
    let nombre = document.getElementById("nombreEditar").value;
    let apellido = document.getElementById("apellidoEditar").value;
    let telefono = document.getElementById("telefonoEditar").value;
    let correo = document.getElementById("correoEditar").value;

    let nombreBuscar = document.getElementById("nombreBuscar").value;
    let apellidoBuscar = document.getElementById("apellidoBuscar").value;
    let telefonoBuscar = document.getElementById("telefonoBuscar").value;

    if (!nombreBuscar && !apellidoBuscar && !telefonoBuscar) {
      alert("No has insertado ningún valor de búsqueda");
      return;
    }

    if (!nombre && !apellido && !telefono && !correo) {
      alert("No has insertado ningún valor para editar");
      return;
    }

   const entradas = JSON.parse(localStorage.getItem("entradas"));
  
   if (entradas === null) {
      alert("No existen entradas");
      return;
    }

    entradas.forEach((entrada) => {
      if (entrada.nombre === nombreBuscar || entrada.apellido === apellidoBuscar || entrada.telefono === telefonoBuscar) {
        if (nombre) {
          entrada.nombre = nombre;
        }

        if (apellido) {
          entrada.apellido = apellido;
        }

        if (telefono) {
          entrada.telefono = telefono;
        }

        if (correo) {
          entrada.correo = correo;
        }
      }
    });

    localStorage.setItem("entradas", JSON.stringify(entradas));

    alert("¡Entrada editada!");
  }
}

// Parecido al anterior, pero simplemente borra la entrada en vez de editarla utilizando splice().

const borrar = () => {
  const borrarBoton = document.createElement("button");
  borrarBoton.innerHTML = "Borrar";
  borrarBoton.addEventListener("click", borrarEntrada);

  document.querySelector("#buscarCampos").appendChild(borrarBoton);

  function borrarEntrada() {
    let nombre = document.getElementById("nombreBuscar").value;
    let apellido = document.getElementById("apellidoBuscar").value;
    let telefono = document.getElementById("telefonoBuscar").value;

    if (!nombre && !apellido && !telefono) {
      alert("No has insertado ningún valor de búsqueda para borrar la entrada");
      return;
    }

   const entradas = JSON.parse(localStorage.getItem("entradas"));
  
   if (entradas === null) {
      alert("No existen entradas");
      return;
    }

   let index = 0;
   
   entradas.forEach((entrada) => {
      if (entrada.nombre === nombre || entrada.apellido === apellido || entrada.telefono === telefono) {
        entradas.splice(index, 1);
      } index++;
    });

    document.querySelector("#entradaBuscada").innerHTML = "";

    localStorage.setItem("entradas", JSON.stringify(entradas));

    alert("¡Entrada borrada!");
  }
}

export { listar, add, buscar, editar, borrar };
