import React from 'react'
import { Movie } from './Movie'
export const SeccionPeliculas = (props) => {
  return (
    <section className='section-peliculas p-0'>
      {
        props.peliculas.map((pelicula) => {
          return (
            <div title={pelicula.Title} className='bloque-pelicula' key={pelicula.imdbID}>
              <Movie pelicula={pelicula} API_URL={props.API_URL} API_KEY={props.API_KEY} />
            </div>
          )
        })
      }
    </section>
  )
}
