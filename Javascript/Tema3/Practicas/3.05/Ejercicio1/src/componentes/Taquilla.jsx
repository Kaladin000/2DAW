"use strict";

import { useRef } from 'react';

/* He aplicado useRef para recoger el valor de la visibilidad en CSS del párrafo que contiene la información de taquilla
   para luego poder mostrarla o esconderla cuando se pulsa el botón
*/

function Taquilla({ taquilla }) {

    const taquillaRef = useRef();

    const visibilidad = () => {
        if (taquillaRef.current.style.visibility == "hidden") {
        taquillaRef.current.style.visibility = "visible";
        } else {
        taquillaRef.current.style.visibility = "hidden";
        }
    };

    return (
        <>
            <button onClick={visibilidad} style={{ marginTop: "45px" }}>TAQUILLA</button>
            <p style={{ fontSize: "50px", padding: "0em 0em 0em 5.5em", visibility: "hidden"}} ref={taquillaRef}>{taquilla}</p>
        </>
    );
};

export default Taquilla;