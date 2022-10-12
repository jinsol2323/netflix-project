import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {

    const dispatch = useDispatch()
    const {popularmovies,topRatedMovies,upComingMovies,loading} = useSelector(state => state.movie);
    

    console.log("home", popularmovies,topRatedMovies,upComingMovies);

    useEffect(()=>{
        dispatch(movieAction.getMovies());
    },[]);
    
    //loading이 true면 loading스피터를 보여줌
    //loading이 false면 data를 보여줌


    //true: 데이터 도착 전
    //false: 데이터 도착 후, 에러가 났을 때
 
    if(loading) {
        console.log('clip',loading)
        return <ClipLoader color="#ccc" loading={loading} size={150} />
    }

    return (
    <div className='homeBody'>
        <Banner movie={popularmovies.results[1]}/>
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularmovies}/>
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies}/>
        <h1>UpComing Movie</h1>
        <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home