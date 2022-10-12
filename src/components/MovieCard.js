import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {

    const {genreList} = useSelector(state=> state.movie);
  
    return (
    <div 
        className='card'
        style={{backgroundImage: "url("+
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`+
        ")",
    }}>
        <div className='overlay'>
            <h2>{item.title}</h2>
            <div>{item.genre_ids.map( (id) => 
                (<Badge bg="danger"
                  className="genreStyle"
                >{genreList.find(item => item.id == id).name}</Badge>
                ))}
            </div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불":"Under 18"}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard