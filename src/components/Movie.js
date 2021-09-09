// Import the necessary libraries
import React from'react';
import { useParams } from 'react-router-dom';

// Import config file
import { IMAGE_BASE_URL, POSTER_SIZE }  from "../config";

// Import component.
import Grid from './Grid';
import Spinner from './Spinner';

// Import Hooks
import { useMovieFetch } from '../Hooks/useMovieFetch';

// Import image
import NoImage from '../images/no_image.jpg'

// Movie Component
const Movie = () => {
    // Get the movieId params
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie);
    return (
        <>
            <div>Movie</div>
        </>
    );

}

export default Movie;