// Import the necessary the library.
import React from 'react';
import { Link } from 'react-router-dom';

// Import the styled component
import { Wrapper, Content } from './BreadCrumb.styles';

// BreadCrumb Component.
const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span> | </span>
            <span>{ movieTitle }</span>
        </Content>
    </Wrapper>
)

// Export the BreadCrumb Component
export default BreadCrumb;