import React from 'react'
import { BiTime }  from 'react-icons/bi'
import { Movie } from './movieData'

const MovieCard = ({movie}: {movie: Movie}) => {
  const {main, runtime, src, title} = movie

  return (
    <div className='card'>
      <img src={src} />
      <div className="text-white p-4">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className='badge'>
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  )
}

export default MovieCard