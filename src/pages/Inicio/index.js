import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
// import videos from "data/db.json";    no usa mas, hizo repo en github y luego lo trae desde aca, SOLO  para GET  "https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos"

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      //"https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos"
      "https://my-json-server.typicode.com/s-ol3/4lura-cinema-react-curso-6-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  /* vamos a analizar un poco esto. En la línea 8, estamos definiendo un estado para los videos y ponemos la variable videos y setVideos. Con useEffect, lo que estamos haciendo es que cuando se carga la aplicación, lo que tiene aquí adentro de este fetch se ejecute. Entonces, llama a la API y trae todos los datos de los videos. En la línea 14, estamos convirtiendo esa respuesta a un JSON. Luego, en la línea 15, estamos trayendo esos datos y se los estamos pasando a setVideo, que es precisamente el que maneja el estado, el que va a modificar el estado de videos. Como último parámetro para useEffect, pasamos un array vacío. ¿Para qué? Para que esto se ejecute una sola vez cada vez que se carga la aplicación. Si no, esto se convertiría en un bug infinito.
  
  Entonces, ¿cómo es que se vuelven a pintar los elementos o se vuelven a pintar las tarjetas? Porque aquí, en nuestro map, lo que dijimos es que recorra videos. Entonces, al ponerle el mismo nombre en la línea 8, al ponerle videos, se mantiene la misma lógica y no tenemos que modificar nada en las líneas siguientes. Si aquí hubiéramos puesto cualquier otro nombre en la línea 8, hubiéramos tenido que cambiar este nombre por el nombre que pusimos arriba. Como no fue necesario hacer eso, lo pusimos de la misma manera y todo vuelve a funcionar como si estuviéramos consumiendo los datos de forma local.
  
  En el próximo vídeo, vamos a seguir trabajando para poder pintar los favoritos y para poder pintar los vídeos de forma asíncrona */
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
