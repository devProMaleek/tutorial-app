// Import the necessary libraries.
import React from 'react'
import PropTypes from 'prop-types';

// Import the styles
import { Wrapper, Content, Text } from './HeroImage.style';

// HeroImage Component

const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

// Validating props
HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default HeroImage;