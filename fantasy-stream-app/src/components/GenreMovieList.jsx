import React from 'react'
import GenreList from '../constant/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenreList.genere.map((item,index)=>index<=4&&(
          <div className='p-8 pxx-8 md:px-16'>
            <h2 className='text-[20px] font-bold text-white '>{item.name}</h2>
            <MovieList genreId={item.id}/>
        </div>  
        ))}
    </div>
  )
}

export default GenreMovieList