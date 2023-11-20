import { useEffect, useState } from "react";

export const Movie = (props) => {

  const [detalle, setDetalle] = useState([]);


  const fetchDetalle = () => {
    fetch(props.API_URL + "apikey=" + props.API_KEY + "&i=" + props.pelicula.imdbID)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setDetalle(data);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchDetalle()
  }, [])

  return (
    <>
      <img src={props.pelicula.Poster} alt={props.pelicula.Title} />
      <cite className="pelicula-cite">{props.pelicula.Year}</cite>
      <h3>{props.pelicula.Title}</h3>
      <p>{detalle.Plot}</p>
    </>
  )
}
