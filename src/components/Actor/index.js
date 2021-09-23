// Import the necessary libraries
import React from 'react';
import PropTypes from 'prop-types';

// Import the style component.
import { Wrapper, Image } from './Actor.styles';

// Create the Actor Component
const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt="actor-thumb"/>
        <h3>{ name }</h3>
        <p>{ character }</p>
    </Wrapper>
)


// Set PropTypes.
Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

// Export the component
export default Actor;