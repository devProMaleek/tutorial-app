// Import the necessary libraries.
import React from 'react';
import PropTypes from 'prop-types';

// Import styles.
import { Wrapper } from './Button.styles';

// Button component.
const Button = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
)

// Set propTypes.
Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button;

