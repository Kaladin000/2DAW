"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {
    var formulario = document.forms.formGenerarFormulario;
    var formularioGenerado = document.forms.formularioGenerado;

    // FUNCIÓN QUE GENERA LOS CAMPOS EN EL DOM DEPENDIENDO DE QUE INPUT ESTÉ SELECCIONADO
    // EN EL FORMULARIO SELECT

    function generarCampos(event) {
        if (event.target.value === "") {

            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

        } else if (event.target.value === "texto") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label para el campo a rellenar

            let textoLabel = document.createElement("label");
            textoLabel.setAttribute("for", "campoTexto");
            textoLabel.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel);

            // Creo el campo a rellenar

            let campoInput = document.createElement("input");
            campoInput.setAttribute("name", "campoTexto");
            campoInput.setAttribute("id", "campoTexto");
            textoLabel.appendChild(campoInput);

            // Saltos de línea

            textoLabel.appendChild(document.createElement("br"));
            textoLabel.appendChild(document.createElement("br"));
        } else if (event.target.value === "password") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label para el campo a rellenar

            let textoLabel = document.createElement("label");
            textoLabel.setAttribute("for", "campoPassword");
            textoLabel.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel);

            // Creo el campo a rellenar

            let campoInput = document.createElement("input");
            campoInput.setAttribute("name", "campoPassword");
            campoInput.setAttribute("id", "campoPassword");
            textoLabel.appendChild(campoInput);

            // Saltos de línea

            textoLabel.appendChild(document.createElement("br"));
            textoLabel.appendChild(document.createElement("br"));
        } else if (event.target.value === "textArea") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label para el campo a rellenar

            let textoLabel = document.createElement("label");
            textoLabel.setAttribute("for", "campoTextArea");
            textoLabel.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel);

            // Creo el campo a rellenar

            let campoInput = document.createElement("input");
            campoInput.setAttribute("name", "campoTextArea");
            campoInput.setAttribute("id", "campoTextArea");
            textoLabel.appendChild(campoInput);

            // Saltos de línea

            textoLabel.appendChild(document.createElement("br"));
            textoLabel.appendChild(document.createElement("br"));
        } else if (event.target.value === "label") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label 1 para el campo a rellenar

            let textoLabel1 = document.createElement("label");
            textoLabel1.setAttribute("for", "campoLabel");
            textoLabel1.innerHTML = "¿A qué input (nombre) va referido?: "
            document.getElementById("camposGenerados").appendChild(textoLabel1);

            // Creo el campo 1 a rellenar

            let campoInput1 = document.createElement("input");
            campoInput1.setAttribute("name", "campoLabel");
            campoInput1.setAttribute("id", "campoLabel");
            textoLabel1.appendChild(campoInput1);

            // Creo el label 2 para el campo a rellenar

            let textoLabel2 = document.createElement("label");
            textoLabel2.setAttribute("for", "campoLabelTexto");
            textoLabel2.innerHTML = "Texto: "
            document.getElementById("camposGenerados").appendChild(textoLabel2);

            // Creo el campo 2 a rellenar

            let campoInput2 = document.createElement("input");
            campoInput2.setAttribute("name", "campoLabelTexto");
            campoInput2.setAttribute("id", "campoLabelTexto");
            textoLabel2.appendChild(campoInput2);

            // Saltos de línea

            textoLabel1.appendChild(document.createElement("br"));
            textoLabel1.appendChild(document.createElement("br"));

            textoLabel2.appendChild(document.createElement("br"));
            textoLabel2.appendChild(document.createElement("br"));
        } else if (event.target.value === "imagen") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label 1 para el campo a rellenar

            let textoLabel1 = document.createElement("label");
            textoLabel1.setAttribute("for", "campoLabel");
            textoLabel1.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel1);

            // Creo el campo 1 a rellenar

            let campoInput1 = document.createElement("input");
            campoInput1.setAttribute("name", "campoImagen");
            campoInput1.setAttribute("id", "campoImagen");
            textoLabel1.appendChild(campoInput1);

            // Creo el label 2 para el campo a rellenar

            let textoLabel2 = document.createElement("label");
            textoLabel2.setAttribute("for", "campoSRC");
            textoLabel2.innerHTML = "src: "
            document.getElementById("camposGenerados").appendChild(textoLabel2);

            // Creo el campo 2 a rellenar

            let campoInput2 = document.createElement("input");
            campoInput2.setAttribute("name", "campoSRC");
            campoInput2.setAttribute("id", "campoSRC");
            textoLabel2.appendChild(campoInput2);

            // Saltos de línea

            textoLabel1.appendChild(document.createElement("br"));
            textoLabel1.appendChild(document.createElement("br"));

            textoLabel2.appendChild(document.createElement("br"));
            textoLabel2.appendChild(document.createElement("br"));
        } else if (event.target.value === "checkbox") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label 1 para el campo a rellenar

            let textoLabel1 = document.createElement("label");
            textoLabel1.setAttribute("for", "campoCheckbox");
            textoLabel1.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel1);

            // Creo el campo 1 a rellenar

            let campoInput1 = document.createElement("input");
            campoInput1.setAttribute("name", "campoCheckbox");
            campoInput1.setAttribute("id", "campoCheckbox");
            textoLabel1.appendChild(campoInput1);

            // Creo el label 2 para el campo a rellenar

            let textoLabel2 = document.createElement("label");
            textoLabel2.setAttribute("for", "campoValue");
            textoLabel2.innerHTML = "value: "
            document.getElementById("camposGenerados").appendChild(textoLabel2);

            // Creo el campo 2 a rellenar

            let campoInput2 = document.createElement("input");
            campoInput2.setAttribute("name", "campoValue");
            campoInput2.setAttribute("id", "campoValue");
            textoLabel2.appendChild(campoInput2);

            // Saltos de línea

            textoLabel1.appendChild(document.createElement("br"));
            textoLabel1.appendChild(document.createElement("br"));

            textoLabel2.appendChild(document.createElement("br"));
            textoLabel2.appendChild(document.createElement("br"));
        } else if (event.target.value === "radio") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label 1 para el campo a rellenar

            let textoLabel1 = document.createElement("label");
            textoLabel1.setAttribute("for", "campoRadio");
            textoLabel1.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel1);

            // Creo el campo 1 a rellenar

            let campoInput1 = document.createElement("input");
            campoInput1.setAttribute("name", "campoRadio");
            campoInput1.setAttribute("id", "campoRadio");
            textoLabel1.appendChild(campoInput1);

            // Creo el label 2 para el campo a rellenar

            let textoLabel2 = document.createElement("label");
            textoLabel2.setAttribute("for", "campoValue");
            textoLabel2.innerHTML = "value: "
            document.getElementById("camposGenerados").appendChild(textoLabel2);

            // Creo el campo 2 a rellenar

            let campoInput2 = document.createElement("input");
            campoInput2.setAttribute("name", "campoValue");
            campoInput2.setAttribute("id", "campoValue");
            textoLabel2.appendChild(campoInput2);

            // Saltos de línea

            textoLabel1.appendChild(document.createElement("br"));
            textoLabel1.appendChild(document.createElement("br"));

            textoLabel2.appendChild(document.createElement("br"));
            textoLabel2.appendChild(document.createElement("br"));
        } else if (event.target.value === "botonSubmit") {
            
            // Elimino cualquier campo a rellenar ya existente

            document.getElementById("camposGenerados").innerHTML = "";

            // Creo el label 1 para el campo a rellenar

            let textoLabel1 = document.createElement("label");
            textoLabel1.setAttribute("for", "campoBotonSubmit");
            textoLabel1.innerHTML = "Nombre: "
            document.getElementById("camposGenerados").appendChild(textoLabel1);

            // Creo el campo 1 a rellenar

            let campoInput1 = document.createElement("input");
            campoInput1.setAttribute("name", "campoBotonSubmit");
            campoInput1.setAttribute("id", "campoBotonSubmit");
            textoLabel1.appendChild(campoInput1);

            // Creo el label 2 para el campo a rellenar

            let textoLabel2 = document.createElement("label");
            textoLabel2.setAttribute("for", "campoValue");
            textoLabel2.innerHTML = "value: "
            document.getElementById("camposGenerados").appendChild(textoLabel2);

            // Creo el campo 2 a rellenar

            let campoInput2 = document.createElement("input");
            campoInput2.setAttribute("name", "campoValue");
            campoInput2.setAttribute("id", "campoValue");
            textoLabel2.appendChild(campoInput2);

            // Saltos de línea

            textoLabel1.appendChild(document.createElement("br"));
            textoLabel1.appendChild(document.createElement("br"));

            textoLabel2.appendChild(document.createElement("br"));
            textoLabel2.appendChild(document.createElement("br"));
        }
    }

    // FUNCIÓN QUE AÑADE EL ELEMENTO AL FORMULARIO DINÁMICO

    function addElemento(event) {
        event.preventDefault();
        if (document.getElementById("campoTexto")) {
            let campoTexto = document.getElementById("campoTexto")

            if (!document.getElementById(campoTexto.value)) {

                // Creo el nuevo elemento con los valores del campo

                let nuevoTexto = document.createElement("input");
                nuevoTexto.setAttribute("type", "text");
                nuevoTexto.setAttribute("id", campoTexto.value);
                nuevoTexto.setAttribute("name", campoTexto.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoTexto);

                // Saltos de línea

                formularioGenerado.appendChild(document.createElement("br"));
                formularioGenerado.appendChild(document.createElement("br"));

            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        } else if (document.getElementById("campoPassword")) {
            let campoPassword = document.getElementById("campoPassword")

            if (!document.getElementById(campoPassword.value)) {

                // Creo el nuevo elemento con los valores del campo

                let nuevoPassword = document.createElement("input");
                nuevoPassword.setAttribute("type", "password");
                nuevoPassword.setAttribute("id", campoPassword.value);
                nuevoPassword.setAttribute("name", campoPassword.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoPassword);

                // Saltos de línea

                formularioGenerado.appendChild(document.createElement("br"));
                formularioGenerado.appendChild(document.createElement("br"));

            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        } else if (document.getElementById("campoTextArea")) {
            let campoTextArea = document.getElementById("campoTextArea")

            if (!document.getElementById(campoTextArea.value)) {

                // Creo el nuevo elemento con los valores del campo

                let nuevoTextArea = document.createElement("textarea");
                nuevoTextArea.setAttribute("rows", "5");
                nuevoTextArea.setAttribute("cols", "40");
                nuevoTextArea.setAttribute("id", campoTextArea.value);
                nuevoTextArea.setAttribute("name", campoTextArea.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoTextArea);

                // Saltos de línea

                formularioGenerado.appendChild(document.createElement("br"));
                formularioGenerado.appendChild(document.createElement("br"));
            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        } else if (document.getElementById("campoLabel")) {
            let campoLabel = document.getElementById("campoLabel")
            let campoLabelTexto = document.getElementById("campoLabelTexto")

            // Si existe un elemento con ese valor Nombre

            let elementoConIDCompartido = document.getElementById(campoLabel.value)

            // Comprueba si existe algun label dentro del formulario con el mismo for

            let todosLosLabels = document.querySelectorAll("#formularioGenerado label");
            let labelRepetido = false;

            for (let i = 0; i < todosLosLabels.length; i++) {
                if (todosLosLabels[i].getAttribute("for") == campoLabel.value) {
                    labelRepetido = true;
                }
            }

            // Si existe un label repetido, salta un error

            if (!labelRepetido) {

                // Si existe un elemento con ese valor Nombre

                if (elementoConIDCompartido) {
                    // Creo el nuevo elemento con los valores de los campos

                    let nuevoLabel = document.createElement("label");
                    nuevoLabel.setAttribute("for", campoLabel.value);
                    nuevoLabel.innerHTML = campoLabelTexto.value;

                    // Lo añado al formulario

                    formularioGenerado.appendChild(nuevoLabel);

                    // Saltos de línea

                    formularioGenerado.appendChild(document.createElement("br"));
                    formularioGenerado.appendChild(document.createElement("br"));
                } else {
                    // Creo el nuevo elemento con los valores de los campos

                    let nuevoLabel = document.createElement("label");
                    nuevoLabel.setAttribute("for", campoLabel.value);
                    nuevoLabel.innerHTML = campoLabelTexto.value;

                    // Lo añado al formulario

                    formularioGenerado.appendChild(nuevoLabel);

                    alert("No existe un input " + campoLabel.value + ", elemento label creado"); 
                    // Solo aviso, por si el usuario quiere poner su elemento delante del label y no detrás
                }
            } else {
                alert("Ya existe un label con el mismo atributo for");
            }
        } else if (document.getElementById("campoImagen")) {
            let campoImagen = document.getElementById("campoImagen")
            let campoSRC = document.getElementById("campoSRC")

            if (!document.getElementById(campoImagen.value)) {

                // Creo el nuevo elemento con los valores de los campos

                let nuevoImagen = document.createElement("img");
                nuevoImagen.setAttribute("id", campoImagen.value);
                nuevoImagen.setAttribute("src", campoSRC.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoImagen);

                // Saltos de línea

                formularioGenerado.appendChild(document.createElement("br"));
                formularioGenerado.appendChild(document.createElement("br"));

            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
            
        } else if (document.getElementById("campoCheckbox")) {
            let campoCheckbox = document.getElementById("campoCheckbox")
            let campoValue = document.getElementById("campoValue")

            if (!document.getElementById(campoCheckbox.value)) {

                // Creo el nuevo elemento con los valores de los campos

                let nuevoCheckbox = document.createElement("input");
                nuevoCheckbox.setAttribute("type", "checkbox");
                nuevoCheckbox.setAttribute("name", campoCheckbox.value);
                nuevoCheckbox.setAttribute("id", campoCheckbox.value);
                nuevoCheckbox.setAttribute("value", campoValue.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoCheckbox);

            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        } else if (document.getElementById("campoRadio")) {
            let campoRadio = document.getElementById("campoRadio")
            let campoValue = document.getElementById("campoValue")

            if (!document.getElementById(campoRadio.value)) {

                // Creo el nuevo elemento con los valores de los campos

                let nuevoRadio = document.createElement("input");
                nuevoRadio.setAttribute("type", "radio");
                nuevoRadio.setAttribute("name", campoRadio.value);
                nuevoRadio.setAttribute("id", campoRadio.value);
                nuevoRadio.setAttribute("value", campoValue.value);

                // Lo añado al formulario

                formularioGenerado.appendChild(nuevoRadio);
            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        } else if (document.getElementById("campoBotonSubmit")) {
            let campoBotonSubmit = document.getElementById("campoBotonSubmit")
            let campoValue = document.getElementById("campoValue")

            if (!document.getElementById(campoBotonSubmit.value)) {

                // Creo el nuevo elemento con los valores de los campos
                
                let nuevoBotonSubmit = document.createElement("button");
                nuevoBotonSubmit.innerHTML = "Enviar";
                nuevoBotonSubmit.setAttribute("type", "submit");
                nuevoBotonSubmit.setAttribute("name", campoBotonSubmit.value);
                nuevoBotonSubmit.setAttribute("id", campoBotonSubmit.value);
                nuevoBotonSubmit.setAttribute("value", campoValue.value);

                // Lo añado al formulario

            formularioGenerado.appendChild(nuevoBotonSubmit);

            } else {
                alert("Ya existe un elemento con el mismo nombre");
            }
        }
    }
    
    formulario.input.addEventListener("change", generarCampos);
    formulario.addElemento.addEventListener("click", addElemento);
}

export { funcionalidadPrincipal };