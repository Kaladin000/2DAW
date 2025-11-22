"use strict";

import { atletasData } from "../data/atletas.js";

const funcionalidadPrincipal = () => {
    // CARGAR Y MOSTRAR DATOS

    var velocidadesMedias = [];
    var tiemposPorSegundo = [];

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    const tableBody = document.getElementById("tbodyAtletas");
    function generarTablaTodos() {
        for (let i = 0; i < atletasData.atletas.length; i++) {
        let trActual = tr.cloneNode(true);
        tableBody.appendChild(trActual);
            for (let j = 0; j < 5; j++) {
                let tdActual = td.cloneNode(true);

                if (j == 0) {
                    tdActual.innerHTML = atletasData.atletas[i].nombre;
                } else if (j == 1) {
                    tdActual.innerHTML = atletasData.atletas[i].deporte;
                } else if (j == 2) {
                    tdActual.setAttribute("class","right");
                    tdActual.innerHTML = atletasData.atletas[i].marcaMts;
                } else if (j == 3) {
                    tdActual.setAttribute("class","right");
                    tdActual.setAttribute("id", "tiempo_" + atletasData.atletas[i].id);
                    tdActual.innerHTML = atletasData.atletas[i].tiempoSeg;
                    tiemposPorSegundo.push(atletasData.atletas[i].tiempoSeg);
                } else if (j == 4) {
                    tdActual.setAttribute("colspan","2");
                    tdActual.setAttribute("class","right");
                    let velocidadMedia = Math.round((atletasData.atletas[i].marcaMts/atletasData.atletas[i].tiempoSeg) * 100) /100;
                    tdActual.innerHTML = velocidadMedia;
                    velocidadesMedias.push(velocidadMedia);
                } trActual.appendChild(tdActual);
            } 
        }   
    } generarTablaTodos();

    function establecerTiempoMedioGlobal() {
        const sumaVelocidadesMedias = velocidadesMedias.reduce((partialSum, a) => partialSum + a, 0);

        const tdTiempoMedioGlobal = document.getElementById("tiempoMedioGlobal");
        tdTiempoMedioGlobal.innerHTML = Math.round((sumaVelocidadesMedias) / velocidadesMedias.length * 100) /100;
    }

    establecerTiempoMedioGlobal();

    // MARCAR RÉCORD PERSONAL

    let mejorTiempo = tiemposPorSegundo[0];
    let atletaConMejorTiempo = atletasData.atletas[0];
        
    for (let i = 1; i < tiemposPorSegundo.length; i++) {
        if (tiemposPorSegundo[i] < mejorTiempo) {
            mejorTiempo = tiemposPorSegundo[i];
            atletaConMejorTiempo = atletasData.atletas[i];
        }
    }

    document.getElementById("tiempo_" + atletaConMejorTiempo.id).parentElement.className = "resaltarFila";

    for (let i = 0; i < tiemposPorSegundo.length; i++) {
        if (tiemposPorSegundo[i] == mejorTiempo) {
                document.getElementById("tiempo_" + atletasData.atletas[i].id).parentElement.className = "resaltarFila";
        }
    }


    // FILTRADO POR DEPORTE

    function filtrarPorDeporte(event) {
        console.log(event.target.value);

        let deporte = event.target.value;

        if (deporte == "todos") {
            tableBody.innerHTML = "";

            velocidadesMedias = [];
            tiemposPorSegundo = [];

            generarTablaTodos();
            

            // record personal todos

            let mejorTiempo = tiemposPorSegundo[0];
            let atletaConMejorTiempo = atletasData.atletas[0];
                
            for (let i = 1; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] < mejorTiempo) {
                    mejorTiempo = tiemposPorSegundo[i];
                    atletaConMejorTiempo = atletasData.atletas[i];
                }
            }

            document.getElementById("tiempo_" + atletaConMejorTiempo.id).parentElement.className = "resaltarFila";

            for (let i = 0; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] == mejorTiempo) {
                        document.getElementById("tiempo_" + atletasData.atletas[i].id).parentElement.className = "resaltarFila";
                }
            }
        
            establecerTiempoMedioGlobal();

        } else if (deporte == "Carrera") {
            tableBody.innerHTML = "";

            velocidadesMedias = [];
            tiemposPorSegundo = [];

            const atletasCarrera = {
                "atletas": []
            };

            for (let i = 0; i < atletasData.atletas.length; i++) {
                if (atletasData.atletas[i].deporte == deporte) {
                    atletasCarrera.atletas.push(atletasData.atletas[i]);
                }
            }

            for (let i = 0; i < atletasCarrera.atletas.length; i++) {
                let trActual = tr.cloneNode(true);
                tableBody.appendChild(trActual);
                for (let j = 0; j < 5; j++) {
                    let tdActual = td.cloneNode(true);

                    if (j == 0) {
                        tdActual.innerHTML = atletasCarrera.atletas[i].nombre;
                    } else if (j == 1) {
                        tdActual.innerHTML = atletasCarrera.atletas[i].deporte;
                    } else if (j == 2) {
                        tdActual.setAttribute("class","right");
                        tdActual.innerHTML = atletasCarrera.atletas[i].marcaMts;
                    } else if (j == 3) {
                        tdActual.setAttribute("class","right");
                        tdActual.setAttribute("id", "tiempo_" + atletasCarrera.atletas[i].id);
                        tdActual.innerHTML = atletasCarrera.atletas[i].tiempoSeg;
                        tiemposPorSegundo.push(atletasCarrera.atletas[i].tiempoSeg);
                    } else if (j == 4) {
                        tdActual.setAttribute("colspan","2");
                        tdActual.setAttribute("class","right");
                        let velocidadMedia = Math.round((atletasCarrera.atletas[i].marcaMts/atletasCarrera.atletas[i].tiempoSeg) * 100) /100;
                        tdActual.innerHTML = velocidadMedia;
                        velocidadesMedias.push(velocidadMedia);
                    } trActual.appendChild(tdActual);
                } 
            }


            // record personal carrera
            
            let mejorTiempo = tiemposPorSegundo[0];
            let atletaConMejorTiempo = atletasCarrera.atletas[0];
                
            for (let i = 1; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] < mejorTiempo) {
                    mejorTiempo = tiemposPorSegundo[i];
                    atletaConMejorTiempo = atletasCarrera.atletas[i];
                }
            }

            document.getElementById("tiempo_" + atletaConMejorTiempo.id).parentElement.className = "resaltarFila";

            for (let i = 0; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] == mejorTiempo) {
                        document.getElementById("tiempo_" + atletasCarrera.atletas[i].id).parentElement.className = "resaltarFila";
                }
            }

            
            establecerTiempoMedioGlobal();

        } else if (deporte == "Natación") {
            tableBody.innerHTML = "";

            velocidadesMedias = [];
            tiemposPorSegundo = [];


            const atletasNatacion = {
                "atletas": []
            };

            for (let i = 0; i < atletasData.atletas.length; i++) {
                if (atletasData.atletas[i].deporte == deporte) {
                    atletasNatacion.atletas.push(atletasData.atletas[i]);
                }
            }

            for (let i = 0; i < atletasNatacion.atletas.length; i++) {
                let trActual = tr.cloneNode(true);
                tableBody.appendChild(trActual);
                for (let j = 0; j < 5; j++) {
                    let tdActual = td.cloneNode(true);

                    if (j == 0) {
                        tdActual.innerHTML = atletasNatacion.atletas[i].nombre;
                    } else if (j == 1) {
                        tdActual.innerHTML = atletasNatacion.atletas[i].deporte;
                    } else if (j == 2) {
                        tdActual.setAttribute("class","right");
                        tdActual.innerHTML = atletasNatacion.atletas[i].marcaMts;
                    } else if (j == 3) {
                        tdActual.setAttribute("class","right");
                        tdActual.setAttribute("id", "tiempo_" + atletasNatacion.atletas[i].id);
                        tdActual.innerHTML = atletasNatacion.atletas[i].tiempoSeg;
                        tiemposPorSegundo.push(atletasNatacion.atletas[i].tiempoSeg);
                    } else if (j == 4) {
                        tdActual.setAttribute("colspan","2");
                        tdActual.setAttribute("class","right");
                        let velocidadMedia = Math.round((atletasNatacion.atletas[i].marcaMts/atletasNatacion.atletas[i].tiempoSeg) * 100) /100;
                        tdActual.innerHTML = velocidadMedia;
                        velocidadesMedias.push(velocidadMedia);
                    } trActual.appendChild(tdActual);
                } 
            }

            // record personal natación

            let mejorTiempo = tiemposPorSegundo[0];
            let atletaConMejorTiempo = atletasNatacion.atletas[0];
                
            for (let i = 1; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] < mejorTiempo) {
                    mejorTiempo = tiemposPorSegundo[i];
                    atletaConMejorTiempo = atletasNatacion.atletas[i];
                }
            }

            document.getElementById("tiempo_" + atletaConMejorTiempo.id).parentElement.className = "resaltarFila";

            for (let i = 0; i < tiemposPorSegundo.length; i++) {
                if (tiemposPorSegundo[i] == mejorTiempo) {
                        document.getElementById("tiempo_" + atletasNatacion.atletas[i].id).parentElement.className = "resaltarFila";
                }
            }

            establecerTiempoMedioGlobal();
            
        }
    }

    const selectDeporte = document.getElementById("selectDeporte");
    selectDeporte.addEventListener("change", filtrarPorDeporte);

    // Ajuste de tiempo y validación

    const ajustarTiempoH3 = document.createElement("h3");
    ajustarTiempoH3.innerHTML = "Ajustar tiempo de atleta";

    const main = document.querySelector("main");
    main.appendChild(ajustarTiempoH3);

    const labelAtleta = document.createElement("label");
    labelAtleta.setAttribute("for", "selectAtleta");
    labelAtleta.innerHTML = "Atleta: ";
    main.appendChild(labelAtleta);

    const selectAjustarTiempo = document.createElement("select");
    selectAjustarTiempo.setAttribute("id", "selectAtleta");
    main.appendChild(selectAjustarTiempo);

    const option = document.createElement("option");

    for (let i = 0; i < atletasData.atletas.length; i++) {
        let optionActual = option.cloneNode(true);
        optionActual.innerHTML = atletasData.atletas[i].nombre;
        selectAjustarTiempo.appendChild(optionActual);
    }

    const labelInput = document.createElement("label");
    labelInput.setAttribute("for", "nuevoTiempo");
    labelInput.innerHTML = "Nuevo tiempo (s): ";
    main.appendChild(labelInput);

    const inputNumber = document.createElement("input");
    inputNumber.setAttribute("type", "number");
    inputNumber.setAttribute("name", "nuevoTiempo");
    inputNumber.setAttribute("id", "nuevoTiempo");
    main.appendChild(inputNumber);

    const buttonGuardar = document.createElement("button");
    buttonGuardar.innerHTML = "Guardar";
    main.appendChild(buttonGuardar);

    function guardarNuevoTiempo() {
        let reTiempo =  new RegExp("\\d");
        inputNuevoTiempo = document.getElementById("nuevoTiempo");
        if (inputNuevoTiempo.value == "" || inputNuevoTiempo.value.match(reTiempo) || inputNuevoTiempo.value <= 0 ){
            // Aquí haría que el campo se pusiese en rojo y que saliese un error a modo de mensaje
        }

        // Aquí crearía la nueva tabla actualizada
    }

    buttonGuardar.addEventListener("click", guardarNuevoTiempo);
}

export { funcionalidadPrincipal };