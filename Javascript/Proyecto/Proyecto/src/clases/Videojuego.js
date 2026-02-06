// Guardo los datos del videojuego al cargarlo de la api
// en esta clase Videojuego.

class Videojuego {
  constructor(apiJuego, mes, year, descripcion, estado) {
    // Datos IGDB
    this.nombre = apiJuego.name;
    this.generos = apiJuego.genres?.map(g => g.name) || [];
    this.ratingIGDB = apiJuego.rating ?? null;
    this.artwork = apiJuego.artworks?.[0]
      ? `https:${apiJuego.artworks[0].url}`
      : null;
    this.storyline = apiJuego.storyline || "";
    this.summary = apiJuego.summary || "";

    // Datos del usuario
    this.mes = mes;
    this.year = year;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaAdicion = new Date();
  }

  // Para guardar todos los datos en un json y que firestore lo pueda recibir correctamente.

  toJSON() {
    return {
      nombre: this.nombre,
      generos: this.generos,
      ratingIGDB: this.ratingIGDB,
      artwork: this.artwork,
      storyline: this.storyline,
      summary: this.summary,
      mes: this.mes,
      year: this.year,
      descripcion: this.descripcion,
      estado: this.estado,
      fechaAdicion: this.fechaAdicion
    };
  }
};

export default Videojuego;