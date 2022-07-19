import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../features/store";
import { addMovie } from "../features/MovieSlice";
import MovieCard from "../features/MovieCard";
import {useNavigate} from 'react-router-dom';

const MovieListBuilder = () => {

    //to edit movieTtitle 
    const [movieTitle, setMovieTitle] = useState("")

    //to dispatch actions
    const dispatch = useDispatch();

    //to access root state
    const movies = useSelector(
        (state: RootState) => state.movies.value
    );

    // to navigate to different routes
    const navigate = useNavigate();

    return (
        <div className="MovieListBuilder">

            {/* Textbox input, set to movieTitle, onchange will set movie title using usestate */}
            <input value={movieTitle}
              onChange={(e) => {
                setMovieTitle(e.target.value);
              }}>
              </input>

            {/* buton to add movie, on click will dispatch addmovie action, movie title will be set to empty string using usestate */}
            <button onClick={() => {
                dispatch(addMovie(movieTitle));
                setMovieTitle("")
            }}> Add 
            </button>

            {/* will navigate to compare route */}
            <button disabled={movies.length < 2} onClick={()=>{
              navigate('/compare');
            }}> Start </button>

            {/* will vertically print movies list using map function */}
            <div>
              {movies.map((MovieTitle) => {
                return <MovieCard MovieTitle={MovieTitle} />;
              })}
            </div>

        </div>
    );
}

export default MovieListBuilder;