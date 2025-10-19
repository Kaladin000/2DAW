"use strict";

// PRIMERA PARTE //

// Establezco el botón que cambiará a rojo y bold los primos

var botonPrimos = document.createElement("button");
botonPrimos.onclick = cambiarPrimos;
botonPrimos.textContent = "Calcular números primos";
document.body.insertBefore(botonPrimos, tabla);

// Establezco la tabla vacía

var tabla = document.createElement("table");
document.body.appendChild(tabla);
var num = 1;

// Relleno la tabla con un simple for anidado, a cada celda le agrego el número, luego le sumo 1 (++)

for (let i = 0; i < 10; i++) {
    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    for (let j = 0; j < 10; j++) {
        let celda = document.createElement("td");
        fila.appendChild(celda);
        celda.innerHTML = num;
        num++;
    }
}

// SEGUNDA PARTE //

var elementoPadre = document.body.firstElementChild;
elementoPadre = elementoPadre.nextElementSibling; // botón
elementoPadre = elementoPadre.nextElementSibling; // tabla
elementoPadre = elementoPadre.firstElementChild; // primera fila

var elemento;

var texto = "";
var esPrimo = true;

// Esto ya es un poco más complicado,
// he usado el for para saber si un número era primo (que desarrollé en un anterior ejercicio)

// He creado otra vez un for anidado, pero esta vez edito dos elementos, el elementoPadre y el elemento hijo (elemento)
// cada fila se actualiza para ser el nuevo elementoPadre cuando acaba el segundo for
// en el for anidado cojo el primer elemento hijo y recorro a él y a sus hermanos
// en el proceso, compruebo que el número que contienen sea primo, y en caso de serlo, agrego el elemento a la clase numPrimo

function cambiarPrimos() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (j === 0) {
                elemento = elementoPadre.firstElementChild;
                texto = elemento.textContent;
                let num = parseInt(texto);
            
            // Comprueba si puede ser dividido por algún número que no sea él mismo (en caso positivo, no es primo)

                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }

                if (esPrimo && num != 1) {
                    elemento.className = "numPrimo";
                } esPrimo = true;
            } else {
                elemento = elemento.nextElementSibling;
                texto = elemento.textContent;
                let num = parseInt(texto);

                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }

                if (esPrimo) {
                     elemento.className = "numPrimo";
                } esPrimo = true;
            }
        } elementoPadre = elementoPadre.nextElementSibling;
    }
}

