import { useState } from 'react'

// Imprime las naves y los vehículos (todo junto esta vez) y le paso el mostrarNaves del useState para comprobar que 
// se pueda mostrar

function NavesVehiculos({ items, mostrar }) {
  if (!mostrar || items.length === 0) return null;

  return (
    <div id="naves">
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>Modelo: {item.model}</p>
          <p>Fabricante: {item.manufacturer}</p>
          <p>Clase: {item.starship_class || item.vehicle_class}</p>
        </div>
      ))}
    </div>
  );
}

export default NavesVehiculos;
