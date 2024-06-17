import Banner from "../../components/Banner";
import styles from "./Player.module.css"
import Titulo from "../../components/Titulo";
import { useParams } from "react-router-dom";
//import videos from "data/db.json";
import NotFound from "../../pages/NotFound";
import { useEffect, useState } from "react";

function Player(){
 const [video,setVideo]= useState([])

const parametros = useParams()
useEffect(()=>{
    //fetch(`https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos?id=${parametros.id}`)
    fetch(`https://my-json-server.typicode.com/s-ol3/4lura-cinema-react-curso-6-api/videos?id=${parametros.id}`)
    .then(response=>response.json())
    .then(data=>{
        setVideo(...data)           //''en la línea 17 porque estamos trayendo un objeto entonces lo que vamos a hacer con ese objeto es desparramarlo (poner ... antes ) a través del split operator entonces todos los elementos o todas las propiedades de este data o de este objeto ahora les vamos a traer por separado las vamos a desparramar ''
    })
 },[])   

//const video = videos.find(video=> video.id === Number(parametros.id))   ', no la vamos a estar utilizando, luego la podemos borrar pero para que veamos de dónde viene cada cosa'
console.log(video);
if(!video)return <NotFound/>
    return(
       <>
       <Banner img="player" color="#58B9AE"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="100%" height="100%" 
        src={video.link} 
        title={video.titulo} 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </section>
       </>
    )
}

export default Player;