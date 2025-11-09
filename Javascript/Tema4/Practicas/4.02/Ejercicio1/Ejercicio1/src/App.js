"use strict";

const aleatorizarImg = () => {
    let imagenes = document.querySelectorAll('#imgs img');
    let divImgs = imagenes[0].parentElement.parentElement;

    let divImagenesCopia = [];
    let numerosUsados = [];

    // Hago una copia de las imágenes y las elimino del DOM

    for (let i = 0; i < imagenes.length; i++) {
        divImagenesCopia.push(imagenes[i].parentNode.cloneNode(true));
        imagenes[i].parentNode.remove();
    }

    // Genero un número aleatorio del 0 al 8, saco la imagen de la posición aleatoria en el array.
    // Después la pongo en el DOM, agrego el número usado al array de numeros usados y repito el proceso,
    // genera de nuevo el número hasta que no esté repetido.

    for (let i = 0; i < divImagenesCopia.length; i++) {
        let posicion = Math.floor(Math.random() * 9);
        while (numerosUsados.includes(posicion)) {
            posicion = Math.floor(Math.random() * 9);
        } divImgs.appendChild(divImagenesCopia[posicion]);
        numerosUsados.push(posicion); 
    }
}

const botonReiniciar = () => {

    const body = document.body.cloneNode(true); // Recoge un clon del body cuando carga la página

    function reiniciarBody() {
        document.body.replaceWith(body); // Reemplaza el body actual por el original
        botonReiniciar();
        aleatorizarImg();
        onDragStartImg();
        onDrop();
    }

    // Borra las img de la grilla y genera aleatorias otra vez

    function borrarYGenerarImgs() {
        let grilla = document.querySelectorAll('#ContenedorCeldas div');
        for (let i = 0; i < grilla.length; i++) {
            if (grillas[i].hasChildNodes()) {
                grillas[i].removeChild(grillas[i].firstElementChild);
            }
        } reiniciarBody();
    } document.getElementById("reiniciar").addEventListener("click", borrarYGenerarImgs); // Agrego la función al evento click
}
 
const onDragStartImg = () => {

    // Recoge el valor id en formato texto al agarrar la imagen

    function dragStartHandler(event) {
         event.dataTransfer.setData("text", event.target.id);
    }

    const imagenes = document.querySelectorAll('#imgs img');
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].setAttribute("draggable", true); // Hace las imágenes arrastrables
        imagenes[i].addEventListener("dragstart", dragStartHandler);
    }
}

const onDrop = () => {
    // Establezco donde se puede soltar la imagen, y compruebo si se puede poner

    function dragOverHandler(event) {
        event.preventDefault();
        comprobarSiHayImg();
    }

    // La imagen cae en la celda y cuando cae la última imagen, comprueba si has ganado
    // Ganas si todas las imágenes dentro de cada grilla están ordenadas alfanuméricamente de arriba a abajo y de izquierda a derecha

    function dropHandler(event) {
        let arrayGanador = [];

        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        if (esLaUltimaImg()) {
            for (let i = 0; i < 9; i++) {
                if (document.getElementById("grilla" + (i+1)).firstElementChild.getAttribute("alt") === "Imagen " + (i+1)) {
                    arrayGanador.push(true);
                }
            } if (arrayGanador.length === 9) {
                alert("¡Has ganado!");
            }
        }
    }

    // Agrego los EventListeners a las celdas

    const grillas = document.querySelectorAll('div div');
    for (let i = 0; i < grillas.length; i++) {
        grillas[i].addEventListener("dragover", dragOverHandler);
        grillas[i].addEventListener("drop", dropHandler);
    }
    
    // Comprueba si hay una img en la celda (cada vez que se pone una img sobre la celda, esto lo maneja el dragOverHandler)
    // , si la hay, borro los EventListeners y si no, los agrego de nuevo

    function comprobarSiHayImg() {
        for (let i = 0; i < grillas.length; i++) {
            if (grillas[i].hasChildNodes()) {
                grillas[i].removeEventListener("drop", dropHandler);
                grillas[i].removeEventListener("dragover", dragOverHandler);
            } else if (grillas[i].firstElementChild === null) {
                grillas[i].addEventListener("drop", dropHandler);
                grillas[i].addEventListener("dragover", dragOverHandler);
            }
        }
    } 

    // Comprueba que todas las imágenes estén en la grilla, y devuelve true o false dependiendo si las 9 imágenes están en la grilla o no

    const imgs = document.querySelectorAll('#imgs img');

    function esLaUltimaImg() {
        let arrayEsUltimaImg = [];
        var esUltimaImg = false;
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].parentElement.parentElement.getAttribute("class") === "grilla") {
                arrayEsUltimaImg.push(true);
            }
        } if (arrayEsUltimaImg.length === 9) {
            esUltimaImg = true;
        } return esUltimaImg;
    }
}



export { onDragStartImg, onDrop, aleatorizarImg, botonReiniciar };