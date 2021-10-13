// Import the necessary libraries
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Thumb from '../Thumb';

// Import necessary files from config folder.
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// NoImage
import NoImage from '../../images/no_image.jpg';

// Import the style component
import { Wrapper, Content, Text } from './MovieInfo.styles';

// Create the MovieInfo Component
const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb image={ movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`  : NoImage}
                   clickable={false} alt='movie-thumb'/>
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>

)

// Validating props
MovieInfo.propTypes = {
    movie: PropTypes.object
}
// Export the component
export default MovieInfo;