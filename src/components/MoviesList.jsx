import React from 'react'
import MoviesCard from './MoviesCard'
import CardModal from './CardModal'

const MoviesList = ({movies,search}) => {
  return (
    <div className='list'>
     {movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase())).map(el=><MoviesCard el={el}/>)}

    </div>
  )
}

export default MoviesList
