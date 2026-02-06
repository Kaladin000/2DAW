# Keep Games Alive - DAVID GARCÍA VALERO

Este proyecto empieza unos años atrás, en 2024, un momento de mi vida en el que pensaba que había perdido toda ilusión por jugar videojuegos, y realmente en mi cabeza se había instaurado la idea de que solo jugaría juegos por entretenerme, no por disfrutar de sus experiencias.

En algún momento decidí que eso no estaba bien, y creé una lista de juegos para mi año 2025, en ella almacenaba los juegos que me había pasado en cada mes, y en consecuencia, empecé a jugar más y mejores experiencias, intentando siempre completarlas, no me importaba que fuesen cortas.

De esta manera, en 2026 he conseguido amar la industria y el videojuego de nuevo, y apreciarla por lo que es, ahora más que nunca todos los juegos que he jugado forman parte de mí y de mi camino.



Ahora, he creado este proyecto preocupándome de que pueda utilizarlo y que nunca se pierdan esos datos, y que de igual manera cualquiera lo pueda hacer.

## Descripción

En esta página web podrás registrarte y tener tu propia cuenta, en la cual podrás almacenar una lista de juegos clasificados por el año y mes que hayas elegido, así como el estado de completación. Podrás ver la nota global del juego, sus géneros principales, el resumen de qué va el juego y de qué va la historia, y una pequeña imagen ilustrativa.

Para añadir juegos, en el formulario simplemente tendrás que escribir el juego que quieres guardar (saldrá una lista desplegable y tendrás que elegir el que quieres clicando sobre él), el mes y el año donde quieras situarlo, su estado de completación, y una pequeña descripción opcional. 

Podrás borrar o editar el juego si has hecho algo mal.

Tus juegos quedarán guardados de manera permanente y podrás acceder a la lista cuando quieras, añadir juegos cuando los completes o estés jugándolos, o quieras simplemente nombrarlos porque lo has probado.

(¡Recuerda apuntar tu correo y contraseña porque no hay sistema de recuperación de contraseña y email todavía!)

## Tecnologías usadas

Utiliza React + Vite + Javascript en su core o desarrollo central, así como tecnologías dispuestas por Firebase: 

Firestore, para guardar los campos generados por cada usuario en una base de datos; 

Authentication, para guardar a los usuarios por su correo y contraseña, y que puedan tener sus propios datos individuales almacenados; 

Hosting, para que la web esté en deploy y se pueda usar en cualquier momento por cualquiera; 

Functions (Firebase Cloud, backend) que lo he utilizado para crear una función index.js que recoge los datos de la API enmascarando las claves importantes en el backend, para que no surjan errores de CORS.

Para la API he usado IGDB, la mayor base de datos de juegos con rating que he podido encontrar y que a la vez fuese funcional. Funciona mediante Twitch Developer, necesita que crees una cuenta en el mismo, y generes tu ID y CLIENT SECRET, que son las claves que utilizas para generar un Token que te permite llamar a la API, más info aquí: [IGDB API docs](https://api-docs.igdb.com/#getting-started).

## Instrucciones de ejecución

- En la carpeta raíz del proyecto, escribe `npm run dev` para iniciar el proyecto mediante Vite, te saldrá una dirección que podrás usar para abrirlo.
  
  
- Abriendo [este enlace](https://keep-games-alive.web.app/), ya que he abierto la web en firebase hosting para que cualquiera la pueda usar.
