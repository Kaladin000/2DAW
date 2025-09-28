"use strict";

// función temporizador, que utiliza setInterval, con una función que imprime minutos y segundos cada 1000 ms (1s)

function temporizador(minutos, segundos) {
  if (minutos < 0 || segundos < 0 || typeof minutos ==! "number" || typeof segundos ==! "number" || segundos > 59) {
    console.log("Has introducido algún tipo de minuto o segundo erróneo.");
    return;
  }

  // esto es para que funcione el temporizador si solo tiene un parámetro, se cambia el parametro minutos al de segundos

  if (segundos == null || isNaN(segundos)) {
    segundos = minutos;
    minutos = 0;
  }

  const id = setInterval(function () {
    if (segundos < 10) {
      console.log(`${minutos}:0${segundos}`);
    } else {
      console.log(`${minutos}:${segundos}`);
    }
    segundos--;
    
    // para restar los minutos y sumarle sus segundos

    if (segundos < 0 && minutos > 0) {
      minutos--;
      segundos = 59;
    }

    if (segundos < 0) {
      clearInterval(id);
    }
  }, 1000);
}

temporizador(-1);
temporizador(50);