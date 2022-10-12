import api from "../api"


const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
    return async (dispatch) => {

        try{    
            //데이터 도착 전
            dispatch({type:"GET_MOVIES_REQUEST"})

            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    
    
            const topRatedApi = api.get(
                `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    
            
            const upComingApi = api.get(
                `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
                );

            const genreApi = api.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );
    
            let [popularMovies, 
                topRatedMovies, 
                upComingMovies,
                genreList] 
                = await Promise.all([popularMovieApi,topRatedApi,upComingApi,genreApi]);
    
            //데이터 도착 후

          
    
            dispatch({type:"GET_MOVIES_SUCCESS",
                      payload:
                     {popularMovies:popularMovies.data, 
                      topRatedMovies:topRatedMovies.data, 
                      upcomingMovies:upComingMovies.data,
                      genreList:genreList.data.genres,
                      loading:false,
                    }
                });

        }catch(error){
            //에러 핸들링 하는 곳
            dispatch({type:"GET_MOVIES_FAILURE"});
        }

    }   
}

export const movieAction = {
    getMovies,
}