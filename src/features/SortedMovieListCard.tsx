import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import {useNavigate} from 'react-router-dom';

const SortedMovieListCard = () => {

    //use navigate
    const navigate = useNavigate();

    //movies
    const movies = useSelector(
        (state: RootState) => state.movies.value
    );

    //variable that keeps track if the list is sorted
    const sorted = useSelector(
        (state: RootState) => state.movies.sorted
    );

    //redirects to homepage if list is not sorted, runs every time the page load
    useEffect(()=> {
        if(!sorted){
            navigate('/movie-sorter');
        }
    }, []);

    return (
        <div>
            {/* displays array vertically, reversed*/}
            {movies.slice(0).reverse().map((movie) =>(
                <h2>{movie}</h2>
            ))}
        </div>
    );

}

export default SortedMovieListCard;