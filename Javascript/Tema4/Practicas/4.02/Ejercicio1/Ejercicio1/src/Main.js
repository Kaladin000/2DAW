"use strict";

import { onDragStartImg, onDrop, aleatorizarImg, botonReiniciar } from './App.js';

window.onload = () => {
    botonReiniciar();
    aleatorizarImg();
    onDragStartImg();
    onDrop();
};
