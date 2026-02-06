import { onRequest } from "firebase-functions/v2/https";
import fetch from "node-fetch";
import cors from "cors";

// Utilizo esta función de firebase cloud para evitar el error de CORS, mandando las claves importantes
// que no pueden ser estar en el frontend por el backend, y haciendo la llamada a la api desde la misma
// y devolviendo el objeto json al frontend.

const corsHandler = cors({
  origin: "https://keep-games-alive.web.app",
});

export const igdbProxy = onRequest(
  { region: "us-central1" },
  async (req, res) => {
    corsHandler(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }

      if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
      }

      try {
        // Recojo las claves de la base de datos de firebase cloud (backend)
        const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
        const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

        // ID y Secreto, dos claves utilizadas para conseguir el token
        const tokenResponse = await fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
          { method: "POST" }
        );

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Llamada a la api de IGDB, con ese token generado y mi ID de Twitch Developer
        const igdbResponse = await fetch("https://api.igdb.com/v4/games", {
          method: "POST",
          headers: {
            "Client-ID": CLIENT_ID,
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "text/plain",
          },
          body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
        });

        // Devuelve los datos
        const data = await igdbResponse.json();
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "IGDB proxy error" });
      }
    });
  }
);