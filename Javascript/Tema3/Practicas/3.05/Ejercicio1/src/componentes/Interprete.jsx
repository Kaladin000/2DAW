"use strict";

// Recibe el array del actor con su información por el prop datos
// finalmente le doy forma al html con ésta información

const Interprete = ({ datos }) => {
  const { nombre, imagen, biografia } = datos;

  return (
    <>
      <div>
        <h4>{nombre}</h4>
        <img className="imgActor" src={imagen} />
        <p>{biografia}</p>
      </div>
    </>
  );
};

export default Interprete;