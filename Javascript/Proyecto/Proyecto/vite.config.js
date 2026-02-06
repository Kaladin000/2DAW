import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// He añadido un proxy para que si el proyecto se usa con Vite también funcione
// la adición de videojuegos, he aplicado las claves de Api al backend, para que no me
// de el error de Cors.

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/igdb": {
        target: "https://us-central1-keep-games-alive.cloudfunctions.net",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/igdb/, ""),
      },
    },
  },
});