// Import the necessary tools and libraries
import React, {useState, useEffect} from 'react';

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// Import the components
import HeroImage from './HeroImage';
import Grid from './Grid'

// Import Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Import Images
import NoImage from '../images/no_image.jpg'

// Home component
const Home = () => {

    const { state, loading, error } = useHomeFetch();

    return (
        <>
            { state.results[0] ?
                <HeroImage
                 image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                 title={state.results[0].original_title}
                 text={state.results[0].overview}/>
                : null
            }

            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <div key={movie.id}> {movie.title}</div>
                     ))}
            </Grid>
        </>

    )
}

export default Home;