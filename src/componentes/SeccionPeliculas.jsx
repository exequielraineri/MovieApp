import React from 'react'
import { Movie } from './Movie'
import { Link, Outlet } from "react-router-dom";
export const SeccionPeliculas = (props) => {
  return (
    <section className="section-peliculas">
      {
        props.peliculas.map((pelicula) => {
          return <div title={pelicula.Title} className="bloque-pelicula" key={pelicula.imdbID}>
            <Link to={"/movie/" + pelicula.imdbID}>
              <Movie pelicula={pelicula} API_URL={props.API_URL} API_KEY={props.API_KEY}></Movie>
            </Link>
          </div>
        })
      }
    </section>
  )
}
