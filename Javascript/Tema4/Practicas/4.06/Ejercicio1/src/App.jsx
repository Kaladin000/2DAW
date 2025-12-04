import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState([])

  // Genero un número aleatorio que almacena en el useState dentro de un array (junto a los anteriores), vacío el ul, luego crea un li
  // que tiene el evento para borrar su estado y a sí mismo, y 
  // creo la lista de números utilizando el array de numeros del useState

  const generarNumero = () => {
    let num = Math.floor(Math.random() * 100) + 1;
    let listaNums = [...number, num];
    setNumber(listaNums)
    const ul = document.getElementById("contenedor");

    ul.innerHTML = "";

    for (let i = 0; i < listaNums.length; i++) {
      let li = document.createElement("li");
      li.addEventListener("click", borrarEstado);
      li.innerHTML = listaNums[i];
      ul.appendChild(li);
    }
  }

  // recojo el valor del número en el li, recojo la lista de números en el setNumber y devuelve un nuevo
  // array filtrando/quitando del array el número del li

  function borrarEstado(event) {
    const valor = Number(event.target.innerHTML);
    console.log(valor);
    setNumber(anterior => anterior.filter(n => n !== valor));
  }

  // Vacía todos los elementos del estado setNumber

  const borrarTodos = () => {
    setNumber([]);
  }

  return (
    <>
      <p>
        <ul id="contenedor">

        </ul>
      </p>
      <button type="button" onClick={generarNumero}>Generar</button>
      <button type="button" onClick={borrarTodos}>Eliminar</button>
    </>
  )
}

export default App
