import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritoProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id
    );
    let nuevaLista = [...favorito];
    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      return setFavorito(nuevaLista);
    }

    nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
  }
  return { favorito, agregarFavorito };
}


// ``exportamos una constante FavoritosContext que le decimos que va a ser igual a una función o un método de React que se llama createContext, nos crea un contexto. Luego le decimos a esta constante que va a tener un displayName que va a ser Favoritos y luego exportamos por defecto una función que se va a llamar FavoritosProvider y va a recibir un children. Dentro, vamos a crear un estado de este favorito. Vamos a decirle que va a tener con useState un estado favorito y otro valor para poder setear ese favorito y luego vamos a retornar FavoritosContext.Provider y le vamos a dar el valor justamente del estado para que este FavoritosContext.Provider pueda manejar el estado de nuestros favoritos y luego le pasamos aquí el children.``


// ``Dentro de este hook, vamos a declarar una función con function agregarFavorito. Esa función va a recibir un nuevoFavorito. Aquí, vamos a declarar una constante que se va a llamar favoritoRepetido y vamos a decirle que sea igual al favorito que tenemos en la línea 18, y vamos a recorrerlo con un método some. El método some() nos va a devolver un True (verdadero) o un False (falso). Entonces, vamos a pasar item como parámetro de una función flecha para preguntar si item.id es igual (===) a nuevoFavorito.id, ese nuevoFavorito que estamos recibiendo por parámetro. Entonces, vamos a acomodar un poco este código para que se vea un poco mejor.

// Ahora, siguiendo dentro de esta función, vamos a crear una nuevaLista. Esta nuevaLista va a ser una copia de favorito. En la próxima línea, vamos a decir if (!favoritoRepetido). Quiere decir que si no hay un favoritoRepetido, entonces a esta nuevaLista le vamos a agregar el nuevoFavorito con el método push(). Y vamos a retornar el setFavorito(nuevaLista). Siempre tenemos que actualizar el estado de setFavorito, tenemos que actualizar a favoritos a través de setFavorito.``

/* Además, fuera del if, vamos a decir que nuevaLista va a ser igual. Quiere decir que si esto que tenemos aquí en la línea 25, si no hay un favoritoRepetido, lo vamos a agregar a la nuevaLista y vamos a retomar nuevamente el estado para que se guarde dentro de favoritos en la línea 18.

Y si hay algún favoritoRepetido, fora del if, entonces lo que vamos a hacer es vamos a recorrerlo, vamos a filtrar nuestro array a través del método filter. Vamos a hacer un item y vamos a preguntar por los items cuyo atributo id sea distinto (!==) a nuevoFavorito.id. Entonces, si es igual, lo va a quitar. En la próxima línea, retornamos setFavorito(nuevaLista) nuevamente.

En la línea 32, salimos nuestra función agregarFavoritos y tenemos que retornar un objeto y vamos a devolver a favorito y a esta función agregarFavorito. Formateamos el código. Ahí está, lo acomodamos un poco.

Ya tenemos creado nuestro hook personalizado para poder agregar favoritos a nuestro contexto de favoritos, agregarlo a nuestra página. Todavía no lo hemos utilizado en ningún lado, pero vamos a ir a nuestro navegador. En este caso, voy a utilizar Google Chrome para utilizar algunas herramientas de desarrollador, porque esta herramienta que les vamos a mostrar ahora no funciona muy bien en Firefox, entonces funciona mejor en Google Chrome.

¿Cuál es la herramienta? Vamos a ir a la parte de extensiones y les vamos a dejar en los recursos la extensión "React Context DevTool". Aquí lo inicializamos y lo que nos permite ahora, apretando "F12" en las herramientas de desarrollador, vamos a ver que si hacemos clic en las dos flechitas en la parte superior, aquí encontramos este plugin "React Context". Entonces vamos a hacer clic en el plugin y veamos qué es lo que sucede por aquí.

Una vez que llamamos y estamos dentro de la pestaña de React Context, vamos a ver que tenemos varias cositas aquí. Si no nos llega a aparecer, recarguemos la página por las dudas para que se elimine la caché y entonces podamos visualizarlo correctamente.

Ahora sí, vamos a ver que aquí tenemos por ejemplo los "Favoritos", donde está justamente este setFavorito que estábamos trabajando en la función anterior. Todavía no lo hemos llamado en ningún lado, no hemos generado ningún contexto, no hemos agregado nada a favoritos. Eso lo vamos a hacer en el vídeo que viene, pero ya tenemos y ya vemos que a través del plugin nuestro contexto está funcionando. */