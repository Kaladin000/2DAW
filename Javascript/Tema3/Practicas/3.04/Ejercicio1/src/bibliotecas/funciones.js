//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

export { generarUuidAleatorio };
