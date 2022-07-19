import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../features/store";
import { swapMovies } from "../features/MovieSlice";
import { setSorted } from "../features/MovieSlice";
import {useNavigate} from 'react-router-dom';

const CompareMovies = () => {

    //to dispatch actions
    const dispatch = useDispatch();
    //navigate
    const navigate = useNavigate();

    //to access root state
    const movies = useSelector(
        (state: RootState) => state.movies.value
    );

    //redirect to homepage if less than two movies in selection, runs every time the page loads
    useEffect(()=> {
        if(movies.length < 2) {
            navigate('/movie-sorter');
        }
    }, []);

    //react variables to keep track of
    const [swapped, setSwapped] = useState(false)
    const [movieIndex, setMovieIndex] = useState(0)
    const [firstMovie, setFirstMovie] = useState(movies[movieIndex])
    const [secondMovie, setSecondMovie] = useState(movies[movieIndex + 1])

    //logic to control incrementing index
    const incrementMovieIndex = () => {
        console.log("swapped", swapped);
        if (movieIndex === movies.length - 2){
            setMovieIndex(0); 
            if (!swapped) {
                dispatch(setSorted(true));
                navigate('/results');
            } else {
                setSwapped(false)
            }
        } else  {
            setMovieIndex(movieIndex + 1);    
        } 
    }

    //update UI when movie index changes
    useEffect(()=> {
        setFirstMovie(movies[movieIndex]);
        setSecondMovie(movies[movieIndex + 1]);
        console.log("current index = ", movieIndex)
    }, [movieIndex]);

    return (
        <div>

            {/* First movie with onlick functionalyity, will swap */}
            <h1 onClick={() =>{
                dispatch(swapMovies(movieIndex));
                setSwapped(true);
                incrementMovieIndex();         
            }}>{firstMovie}</h1>

            <h1>VS</h1>

            {/* Second movie with onclick functionality */}
            <h1 onClick={() => {
                incrementMovieIndex();
            }}>{secondMovie}</h1>

        </div>
    );

}

export default CompareMovies;
