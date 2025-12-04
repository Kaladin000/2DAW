import { useState } from 'react'
import './App.css'

function App() {
  const [apuestas, setApuesta] = useState([])

  const generarApuesta = () => {

    // array para comparar la apuesta con la apuesta que se supone que gana

    const apuestaGanadora = {
      "num1": 5,
      "num2": 45,
      "num3": 21,
      "num4": 34,
      "num5": 27,
      "estrella1": 6,
      "estrella2": 12
    };

    // genero la apuesta de manera aleatoria

    let apuesta = {
      "num1": Math.floor(Math.random() * 50) + 1,
      "num2": Math.floor(Math.random() * 50) + 1,
      "num3": Math.floor(Math.random() * 50) + 1,
      "num4": Math.floor(Math.random() * 50) + 1,
      "num5": Math.floor(Math.random() * 50) + 1,
      "estrella1": Math.floor(Math.random() * 12) + 1,
      "estrella2": Math.floor(Math.random() * 12) + 1
    };

    // establezco la lista de apuestas con la nueva apuesta y las anteriores

    let listaApuestas = [...apuestas, apuesta];

    // la añado al useState

    setApuesta(listaApuestas);

    const p = document.getElementById("contenedor");

    p.innerHTML = "";

    // genero en el html las apuestas y compruebo si ganan o pierden, si es así, les doy la clase premiado o noPremiado

    for (let i = 0; i < listaApuestas.length; i++) {
      let pHijo = document.createElement("p");
      pHijo.innerHTML = listaApuestas[i].num1 + " " + listaApuestas[i].num2 + " " + listaApuestas[i].num3 + " " + listaApuestas[i].num4 + " " + listaApuestas[i].num5 + " " + listaApuestas[i].estrella1 + " " + listaApuestas[i].estrella2;

      

      if ( (listaApuestas[i].num1 == apuestaGanadora.num1 && listaApuestas[i].num2 == apuestaGanadora.num2) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || apuesta.estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num1 && listaApuestas[i].num3 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num1 && listaApuestas[i].num4 == apuestaGanadora.num4) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num1 && listaApuestas[i].num5 == apuestaGanadora.num5) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num2 && listaApuestas[i].num3 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num2 && listaApuestas[i].num4 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num2 && listaApuestas[i].num5 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num3 && listaApuestas[i].num4 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num3 && listaApuestas[i].num5 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else if ( (listaApuestas[i].num1 == apuestaGanadora.num4 && listaApuestas[i].num5 == apuestaGanadora.num3) && listaApuestas[i].estrella1 == apuestaGanadora.estrella1 || listaApuestas[i].estrella2 == apuestaGanadora.estrella2) {
        pHijo.className = "premiado";
      } else {
        pHijo.className = "noPremiado";
      }

      p.appendChild(pHijo);
    }
  }

  return (
    <>
      <p id="contenedor">
        
      </p>
      <button type="button" onClick={generarApuesta}>Generar</button>
    </>
  )
}

export default App
