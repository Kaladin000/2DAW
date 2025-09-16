"use strict";

function imprimirNumero(numeroImpresiones, numero) {

    for (let i = 0; i < numeroImpresiones; i++) {
         if (i === 0 && numeroImpresiones > 0) {
            console.log(numero);
         } else { console.log(numero *= 2);
         }
    }

}

imprimirNumero(4, 2);

console.log("---");

imprimirNumero(5, 5);

console.log("---");

imprimirNumero(6, 7);