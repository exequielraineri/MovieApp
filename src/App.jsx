import { useEffect, useState } from "react"
import { Movie } from "./componentes/Movie"
import "./css/styles.css";
import { Encabezado } from "./componentes/Encabezado";
function App() {

  const API_URL = "https://www.omdbapi.com/?";
  const API_KEY = "3cd99f3e"

  //para descripcion de pelicula mediante id
  //https://www.omdbapi.com/?apikey=3cd99f3e&i=tt0317219
  const [peliculas, setPeliculas] = useState([]);
  const [titulo, setTitulo] = useState("funny");
  const [detallePelicula, setDetallePelicula] = useState([]);
  useEffect(() => {
    fetchPeliculasAPI();
  }, []);

  const fetchPeliculasAPI = () => {
    fetch(API_URL + "apikey=" + API_KEY + "&s=" + titulo)
      .then(response => response.json())
      .then(data => {
        setPeliculas(data.Search);

      })
      .catch(err => console.log(err));


  }

  function mostrar(id) {
    const fetchDetalle = () => {
      fetch(API_URL + "apikey=" + API_KEY + "&i=" + id)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          setDetallePelicula(data);
        })
        .catch(error => console.log(error));
    }
    fetchDetalle()
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchPeliculasAPI();
  }



  return (
    <div className="contenedor">
      <Encabezado></Encabezado>
      <form className="formInput" onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar pelicula..." className="inputPelicula" onChange={(e) => setTitulo(e.target.value)} />
      </form>
      <section className="section-peliculas">
        {
          peliculas.map((pelicula) => {
            return <div title={pelicula.Title} className="bloque-pelicula" key={pelicula.imdbID} onClick={() => mostrar(pelicula.imdbID)}>
              <Movie pelicula={pelicula} detalle={detallePelicula}></Movie>
            </div>
          })
        }
      </section>
      <hr />
    </div>
  )
}

export default App
