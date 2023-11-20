import { useState } from "react";

export const Movie = (props) => {
  return (
    <>
      <img src={props.pelicula.Poster} alt={props.pelicula.Title} />
      <cite className="pelicula-cite">Año: {props.pelicula.Year}</cite>
      <h3>{props.pelicula.Title}</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolores.</p>
    </>
  )
}
