"use strict";

// La función dibuja una cruz, ahora con puntos enmedio :O (he hecho un bucle bidimensional, pero ésta vez he tenido en cuenta los dos tercios de mi número exterior, ya que es el número máximo de puntos que puede tener de diametro el cubo (menos 1))
// Por lo tanto, dibujo filas de solo "#", cuando i sea menor a la diferencia de los dos tercios con mi número interior o cuando sea mayor a la diferencia entre mi numero exterior y la diferencia anteriormente mencionada.
// (el bucle interior funciona parecido, solo que los if son contrarios, ahora dibuja en horizontal, y imprime ya los puntos)
// ( he tenido salir a darme un paseo para pillar la lógica x) )

function dibujarCruz(numExterior, numInterior) {
  var cruz = "";
  var dosTercios = (numExterior/3)*2;
  if (numExterior % 3 === 0 && numExterior > 0 && numInterior < dosTercios) {

    var cruz;
    for (let i = 0; i < numExterior; i++) {
      for (let j = 0; j < numExterior; j++) {
        if (dosTercios-numInterior > i || i >= numExterior-(dosTercios-numInterior)) {
        cruz = cruz.concat("#");
        } else {
          if (j < dosTercios-numInterior || j >= numExterior-(dosTercios-numInterior)) {
            cruz = cruz.concat("#");
          } else {
            cruz = cruz.concat(".");
          }
        }
      } cruz = cruz.concat("\n");
    }
    
  } else {
    console.log("ERROR. El número no es múltiplo de 3 o es negativo, o numExterior es mayor al permitido");
    return;
  }

  console.log(cruz);
}

dibujarCruz(20, 7);
dibujarCruz(21,8);
dibujarCruz(9, 7);
dibujarCruz(9, 5);
dibujarCruz(3, 1);

dibujarCruz(21,13);
dibujarCruz(21,12);
