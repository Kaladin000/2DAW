"use strict";

import { 
db, 
addDoc, 
collection, 
writeBatch, 
doc, 
getDocs, 
onSnapshot, 
updateDoc, 
query, 
where, 
or, 
deleteDoc
} from "./firestore/getFirestore.js"

// Añade una entrada buscando los valores escritos en el navegador, forma un array entrada y
// lo añado a la base de datos de firebase.

const add = () => {
  const addBoton = document.createElement("button");
  addBoton.innerHTML = "Añadir";
  addBoton.addEventListener("click", addEntrada);

  document.querySelector("#add").appendChild(addBoton);

  async function addEntrada() {
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

    try {
      await addDoc(collection(db, "contactos"), entrada);
      alert("Contacto añadido a la base de datos");
    } catch (error) {
      console.error(error);
      alert("Error al añadir el contacto a la base de datos");
    }
    
  }
}

// Al introducir uno de los valores en el navegador, busca por todo el objeto de firestore la coincidencia
// Guarda los valores de la coincidencia (entrada) y los imprime mediante el DOM.

const buscar = () => {
  const buscarBoton = document.createElement("button");
  buscarBoton.innerHTML = "Buscar";
  buscarBoton.addEventListener("click", buscarEntrada);

  document.querySelector("#buscarCampos").appendChild(buscarBoton);

  function buscarEntrada() {
    let stringEntrada = "";

    let nombre = document.getElementById("nombreBuscar").value;
    let apellido = document.getElementById("apellidoBuscar").value;
    let telefono = document.getElementById("telefonoBuscar").value;
    let correo = document.getElementById("correoBuscar").value;

    if (!nombre && !apellido && !telefono &&!correo) {
      alert("No has insertado ningún valor de búsqueda");
      return;
    }

    onSnapshot(collection(db, "contactos"), (snapshot) => {

      if (snapshot.empty) {
        alert("No hay contactos");
        return;
      }

      snapshot.forEach((doc) => {
        const entrada = doc.data();

        if (entrada.nombre === nombre || entrada.apellido === apellido || entrada.telefono === telefono || entrada.correo === correo) {
          stringEntrada= `
          <p>Nombre: ${entrada.nombre}<p>
          <p>Apellido(s): ${entrada.apellido}<p>
          <p>Teléfono: ${entrada.telefono}<p>
          <p>Correo: ${entrada.correo}<p>
          `;
        }
      });

      document.querySelector("#entradaBuscada").innerHTML = stringEntrada;

    });
  }
}

// AL introducir valores de búsqueda y valores de edición en el navegador, cuando
// se clique el botón editar, buscará el valor coincidente de la búsqueda y editará los valores
// que existan en los campos de edición mediante la query (con la query busca el/los objetos a editar) directamente.

const editar = () => {
  const editarBoton = document.createElement("button");
  editarBoton.innerHTML = "Editar";
  editarBoton.addEventListener("click", editarEntrada);

  document.querySelector("#editar").appendChild(editarBoton);

  async function editarEntrada() {
    let nombre = document.getElementById("nombreEditar").value;
    let apellido = document.getElementById("apellidoEditar").value;
    let telefono = document.getElementById("telefonoEditar").value;
    let correo = document.getElementById("correoEditar").value;

    let nombreBuscar = document.getElementById("nombreBuscar").value;
    let apellidoBuscar = document.getElementById("apellidoBuscar").value;
    let telefonoBuscar = document.getElementById("telefonoBuscar").value;
    let correoBuscar = document.getElementById("correoBuscar").value;


    if (!nombreBuscar && !apellidoBuscar && !telefonoBuscar && !correoBuscar) {
      alert("No has insertado ningún valor de búsqueda");
      return;
    }

    if (!nombre && !apellido && !telefono && !correo) {
      alert("No has insertado ningún valor para editar");
      return;
    }

    // Cualquier entrada la cual cualquiera de sus campos que sea igual al campo buscar

    const q = query(
      collection(db, "contactos"),
      or(
        where("nombre", "==", nombreBuscar),
        where("apellido", "==", apellidoBuscar),
        where("telefono", "==", telefonoBuscar),
        where("correo", "==", correoBuscar)
      )
    );

    var snapshot = "";

    try {
      snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("No hay contactos");
        return;
      }

    } catch (error) {
      console.error(error);
      alert("Error al buscar la entrada a editar");
      return;
    }

    snapshot.forEach( async (documento) => {
          
        const entrada = {};

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

      await updateDoc( doc(db, "contactos", documento.id), entrada );

    });

    alert("Contacto editado");
  }
}

// Parecido al anterior, pero simplemente borra la entrada en vez de editarla utilizando deleteDoc.

const borrar = () => {
  const borrarBoton = document.createElement("button");
  borrarBoton.innerHTML = "Borrar";
  borrarBoton.addEventListener("click", borrarEntrada);

  document.querySelector("#buscarCampos").appendChild(borrarBoton);

  async function borrarEntrada() {
    let nombre = document.getElementById("nombreBuscar").value;
    let apellido = document.getElementById("apellidoBuscar").value;
    let telefono = document.getElementById("telefonoBuscar").value;
    let correo = document.getElementById("correoBuscar").value;

    if (!nombre && !apellido && !telefono && !correo) {
      alert("No has insertado ningún valor de búsqueda para borrar la entrada");
      return;
    }
   
   const q = query(
      collection(db, "contactos"),
      or(
        where("nombre", "==", nombre),
        where("apellido", "==", apellido),
        where("telefono", "==", telefono),
        where("correo", "==", correo)
      )
    );

    var snapshot = "";

    try {
      snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("No hay contactos");
        return;
      }

    } catch (error) {
      console.error(error);
      alert("Error al buscar la entrada a borrar");
      return;
    }

    snapshot.forEach( async (documento) => {
      await deleteDoc( doc(db, "contactos", documento.id));
    });

    document.querySelector("#entradaBuscada").innerHTML = "";

    alert("¡Entrada borrada!");
  }
}

// Lista los objetos de la base de datos de firestore de manera persistente mediante onSnapshot

const listarFirestore = () => {

  // Creo el botón

  const listarFirestoreBoton = document.createElement("button");
  listarFirestoreBoton.innerHTML = "Listar Firestore";
  listarFirestoreBoton.addEventListener("click", listadoFirestore);

  document.querySelector("#firestore").appendChild(listarFirestoreBoton);

  // función del eventListener

  function listadoFirestore() {

    onSnapshot(collection(db, "contactos"), (snapshot) => {

      let stringLista = "";

      if (snapshot.empty) {
        alert("No hay contactos");
        return;
      }

      snapshot.forEach((doc) => {
        const entrada = doc.data();

        stringLista += `
        <p>Nombre: ${entrada.nombre}<p>
        <p>Apellido(s): ${entrada.apellido}<p>
        <p>Teléfono: ${entrada.telefono}<p>
        <p>Correo: ${entrada.correo}<p>
        <br>`;
      });

      document.querySelector("#contenedorFirestore").innerHTML = stringLista;

    });

  }
}

export { add, buscar, editar, borrar, listarFirestore };