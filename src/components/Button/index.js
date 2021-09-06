// Import the necessary libraries.
import React from 'react';

// Import styles.
import { Wrapper } from './Button.styles';

// Button component.
const Button = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
)

export default Button;

