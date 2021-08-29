import React from 'react'
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

export default HeroImage;