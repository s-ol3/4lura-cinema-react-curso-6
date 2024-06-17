import Banner from "../../components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritosContext } from "../../context/Favoritos";  /* ya no esta la clase de traerlo desde el json, ver aula 2 github */
// ''nuestro hook personalizado useFavoritosContext''

function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favorite" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
