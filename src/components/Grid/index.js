// Import the necessary libraries
import React  from 'react';
import PropTypes from 'prop-types';

// Import Styles
import { Wrapper, Content } from  './Grid.styles'

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{ header }</h1>
        <Content>{ children }</Content>
    </Wrapper>
)

// Validate Props
Grid.propTypes = {
    header: PropTypes.string
}
export default Grid;
