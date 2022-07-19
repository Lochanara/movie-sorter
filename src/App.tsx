import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieListBuilder from './features/MovieListBuilder'
import CompareMovies from './features/CompareMovies';
import SortedMovieListCard from './features/SortedMovieListCard';

function App() {

  return (
    <div className="App">
      {/* Routes */}
      <Router>
        <Routes>
          <Route  path="/movie-sorter" element={<MovieListBuilder/>}/>
          <Route  path="/compare" element={<CompareMovies/>}/>
          <Route  path="/results" element={<SortedMovieListCard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
