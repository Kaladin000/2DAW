import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  const [tiempo, setTiempo] = useState(0);
  const [estado, setEstado] = useState(false);
  const intervalo = useRef(null);

  // si se le ha dado al botón de empezar, por lo tanto, estado es true, el temporizador empieza, estableciendo la variable única del useRef (intervalo)
  // en caso contrario, limpia el intervalo.
  // al reiniciar el tiempo vuelve a 0 y se pausa.

  useEffect(() => {
    if (estado === true) {
      intervalo.current = setInterval(() => {
      setTiempo((tiempo) => tiempo + 0.01);
    }, 10);
    }  else {
      clearInterval();
    }

    return () => clearInterval(intervalo.current);
  }, [estado]);

  function empezar() {
    setEstado(true);
  }

  function pausar() {
    setEstado(false);
  }

  function reiniciar() {
    setEstado(false);
    setTiempo(0);
  }

  return (
    <>
      <p id="contenedor">
        {tiempo.toFixed(3)}
      </p>
      <button type="button" onClick={empezar}>Empezar</button>
      <button type="button" onClick={pausar}>Pausar</button>
      <button type="button" onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

export default App