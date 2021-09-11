// Import the necessary libraries
import React from'react';
import { useParams } from 'react-router-dom';

// Import config file
import { IMAGE_BASE_URL, POSTER_SIZE }  from "../config";

// Import component.
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar';

// Import Hooks
import { useMovieFetch } from '../Hooks/useMovieFetch';

// Import image
import NoImage from '../images/no_image.jpg'

// Movie Component
const Movie = () => {
    // Get the movieId params
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong...</div>
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
        </>
    );

}

export default Movie;