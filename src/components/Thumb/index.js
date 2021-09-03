// Import the necessary library
import React from 'react';

// Import styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb'/>
     </div>
);

export default Thumb;