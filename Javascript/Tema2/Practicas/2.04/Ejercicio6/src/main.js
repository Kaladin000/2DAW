"use strict";

function mostrarArrayPrimosPalindromos() {
  var arrayPrimosPalindromos = [];
  var esPrimo = true;
  var esPalindromo = true;

  var total = 0;

  for (let i = 2; i < 100001; i++) {
    
    // Comprueba si puede ser dividido por algún número que no sea él mismo (en caso positivo, no es primo)

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }

    // Convierto el número a string y el string a array, le doy la vuelta al array y lo convierto de nuevo en un string con join

    let iString = i.toString();
    let iAlReves = iString.split("").reverse("").join("");
    
    // Compruebo si el número es igual que el número al revés

    if (iString !== iAlReves) {
      esPalindromo = false;
    }

    if (esPrimo === true && esPalindromo === true) {
        arrayPrimosPalindromos.push(i);
        total++;
    }

    esPrimo = true;
    esPalindromo = true;

  }

  var stringFinal = "";

  for (let i = 0; i < arrayPrimosPalindromos.length; i++) {
    stringFinal = stringFinal.concat(`${arrayPrimosPalindromos[i]} `);
  }

  console.log(`Hay un total de ${total} números primos palíndromos`);
  console.log(stringFinal);
}

mostrarArrayPrimosPalindromos();