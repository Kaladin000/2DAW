// Como divido la original biblioteca en componentes, hago una especie de biblioteca solo
// para el acceso a la API

export const accederPeliculas = async () => {
  const resp = await fetch("https://swapi.info/api/films");
  const data = await resp.json();
  return data;
};

export const accederPersonajes = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
};

export const accederNaves = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
};

export const accederVehiculos = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
};