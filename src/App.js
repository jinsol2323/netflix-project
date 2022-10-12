import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

// 1. 3개 페이지 (홈페이지, movie페이지, movieDetail 페이지)
// 2. 홈페이지 > 배너/섹션별 영화 (popular, top rated, upcoming)
// 3. 각 영화에 마우스 오버 > 제목/장르/점수/인기도/청불 여부 알 수 있음
// 4. 영화를 슬라이드로 넘기면서 확인 가능 / 영화 정렬 / 검색 가능 / 영화 필터링

// 6. 영화 디테일 페이지 > 포스터/제목/줄거리/등등...
// 7. trailer누르면 trailer를 볼 수 있다.
// 8. 영화의 리뷰 확인 가능
// 9. 광련된 영화
 


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>   
    </div>
  );
}

export default App;
