"use strict";

// Después de tres segundos, mediante un switch coge el número de día y mes, lo convierte a string en español, y luego muestra la fecha actual correctamente

const id = setInterval(function () {
  var fechaActual = new Date();

  var dia;
  var mes;

  switch (fechaActual.getDay()) {
    case 0:
      dia = "Domingo";
      break;
      
    case 1:
      dia = "Lunes";
      break;

    case 2:
      dia = "Martes";
      break;

    case 3:
      dia = "Miércoles";
      break;

    case 4:
      dia = "Jueves";
      break;

    case 5:
      dia = "Viernes";
      break;

    case 6:
      dia = "Sábado";
      break;
  }

  switch (fechaActual.getMonth()) {
    case 0:
      mes = "Enero";
      break;
      
    case 1:
      mes = "Febrero";
      break;

    case 2:
      mes = "Marzo";
      break;

    case 3:
      mes = "Abril";
      break;

    case 4:
      mes = "Mayo";
      break;

    case 5:
      mes = "Junio";
      break;

    case 6:
      mes = "Julio";
      break;

    case 7:
      mes = "Agosto";
      break;

    case 8:
      mes = "Septiembre";
      break;

    case 9:
      mes = "Octubre";
      break;

    case 10:
      mes = "Noviembre";
      break;

    case 11:
      mes = "Diciembre";
      break;
  }

  console.log(`${dia}, ${fechaActual.getDate()} de ${mes} de ${fechaActual.getFullYear()}`);
  clearInterval(id);
}, 3000)