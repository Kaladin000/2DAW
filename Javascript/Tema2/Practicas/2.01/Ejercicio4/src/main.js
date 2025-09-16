"use strict";

// Muestra el nombre y precio total del producto, así como un error si introduces un número inválido

function mostrarProducto(nombreProducto = "Producto Genérico", precio = 100, porcentajeImpuesto = 21) {
  if (isNaN(precio) || isNaN(porcentajeImpuesto) || porcentajeImpuesto < 0 || porcentajeImpuesto > 100 || precio < 0) {
    console.log("Error. Número(s) no válido(s).");
  } else {
    console.log(`Producto: ${nombreProducto} | Precio: ${(precio + ((porcentajeImpuesto/100)*precio)).toFixed(2)}`);
  }
}

mostrarProducto();
mostrarProducto("Hollow Knight: Silksong", 16.116, 21);
mostrarProducto("a", 16.116, 101);
mostrarProducto("b", "c", "d");