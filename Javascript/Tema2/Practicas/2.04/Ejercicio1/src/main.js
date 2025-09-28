"use strict";

// Paso una cadena y reemplazo algunos de sus caracteres, la c por la k, y algunos carac por mayúsculas, al final le concateno dos Hs

function toCani (string) {
  for (let i = 0; i < string.length; i++) {
    string = string.replace('c', 'k');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('o', 'O');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('d', 'D');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('n', 'N');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('e', 'E');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('b', 'B');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('k', 'K');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('i', 'I');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('p', 'P');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('l', 'L');
  }
  for (let i = 0; i < string.length; i++) {
    string = string.replace('g', 'G');
  }
  string = string.concat("HH");
  return string;
}

console.log(toCani("esto es una cadena bien cani"));
console.log(toCani("Tengo que ir a comprar pan"));
console.log(toCani("Vamos a otro luga"));