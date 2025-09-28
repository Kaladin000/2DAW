"use strict";

// cada 5s pide un input dni, luego muestra cuántos has puesto, deduce la letra que le falta y los imprime

function mostrarLetraDNIS() {
    var arrayDNIS = [];
    const id = setInterval(function () {
        var dni = prompt("Escribe el dni:");
        while (dni !== "-1" && dni.length !== 8) {
            var dni = prompt("Has introducido un DNI ERRÓNEO, escribe el dni:");
        }
        if (dni === "-1") {
            clearInterval(id);
            if (arrayDNIS.length > 0) {
                console.log(`Has introducido ${arrayDNIS.length} DNIs`);
                for (let i = 0; i < arrayDNIS.length; i++) {
                    switch (arrayDNIS[i] % 23) {
                        case 0:
                            arrayDNIS[i] = arrayDNIS[i].concat("T");
                            break;
                    
                        case 1:
                            arrayDNIS[i] = arrayDNIS[i].concat("R");
                            break;
                    
                        case 2:
                            arrayDNIS[i] = arrayDNIS[i].concat("W");
                            break;
                    
                        case 3:
                            arrayDNIS[i] = arrayDNIS[i].concat("A");
                            break;
                    
                        case 4:
                            arrayDNIS[i] = arrayDNIS[i].concat("G");
                            break;
                    
                        case 5:
                            arrayDNIS[i] = arrayDNIS[i].concat("M");
                            break;
                    
                        case 6:
                            arrayDNIS[i] = arrayDNIS[i].concat("Y");
                            break;
                    
                        case 7:
                            arrayDNIS[i] = arrayDNIS[i].concat("F");
                            break;
                    
                        case 8:
                            arrayDNIS[i] = arrayDNIS[i].concat("P");
                            break;
                    
                        case 9:
                            arrayDNIS[i] = arrayDNIS[i].concat("D");
                            break;
                    
                        case 10:
                            arrayDNIS[i] = arrayDNIS[i].concat("X");
                            break;
                    
                        case 11:
                            arrayDNIS[i] = arrayDNIS[i].concat("B");
                            break;
                    
                        case 12:
                            arrayDNIS[i] = arrayDNIS[i].concat("N");
                            break;
                    
                        case 13:
                            arrayDNIS[i] = arrayDNIS[i].concat("J");
                            break;
                    
                        case 14:
                            arrayDNIS[i] = arrayDNIS[i].concat("Z");
                            break;
                    
                        case 15:
                            arrayDNIS[i] = arrayDNIS[i].concat("S");
                            break;
                    
                        case 16:
                            arrayDNIS[i] = arrayDNIS[i].concat("Q");
                            break;
                    
                        case 17:
                            arrayDNIS[i] = arrayDNIS[i].concat("V");
                            break;
                    
                        case 18:
                            arrayDNIS[i] = arrayDNIS[i].concat("H");
                            break;
                    
                        case 19:
                            arrayDNIS[i] = arrayDNIS[i].concat("L");
                            break;
                    
                        case 20:
                            arrayDNIS[i] = arrayDNIS[i].concat("C");
                            break;
                    
                        case 21:
                            arrayDNIS[i] = arrayDNIS[i].concat("K");
                            break;
                    
                        case 22:
                            arrayDNIS[i] = arrayDNIS[i].concat("E");
                            break;
                    }
                    console.log(arrayDNIS[i]);
                }
        }
        } else {
            arrayDNIS.push(dni);
        }
    }, 5000)
}

mostrarLetraDNIS();