import React from 'react'

const MovieCard = ({
  movie : {title, vote_average, poster_path, release_date, originol_language
  }}) => {
  return (
    <div className='movie-card'>
        <img src= {poster_path ?
        `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title}
        />

        <div className='mt-4'>
          <h3>{title}</h3>

          <div className='content'>
            <div className='rating'>
              <img src="star.svg" alt="star icon" />
              <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>
            <span className='text-white'>•</span>
            <p className='text-white'>
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
            <span className='text-white'>•</span>
            <p className='text-white'>
              {originol_language ? originol_language.toFiexed(1) : 'N/A'}
            </p>
          </div>
        </div>
    </div>
  )
}

export default MovieCard
