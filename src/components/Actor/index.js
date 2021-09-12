// Import the necessary libraries
import React from 'react';

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

// Export the component
export default Actor;