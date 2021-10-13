// Import the necessary libraries
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


// Import images.
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Import the styled component
import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.styles";

// Import Context.
import { Context } from'../../context';


// Header Component

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                </Link>
                {user ? (
                    <span className='loggedin'>Logged in as: {user.username}</span>
                ): (
                    <Link to='/login'>
                        <span className='login'>Log in</span>
                    </Link>
                )}

                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
            </Content>
        </Wrapper>
    )
};

// Export the Header Component
export default Header;