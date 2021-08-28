// Import the necessary libraries
import React, {Component} from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.styles";


// Header Component

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

// Export the Header Component
export default Header;