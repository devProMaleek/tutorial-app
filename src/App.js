// Import the necessary libraries
import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// Routing libraries
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
// Imported Components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
// Context
import UserProvider from './context';
// Import Style

import {GlobalStyle} from "./GlobalStyle";

const App = () => (
    // Renamed as Router
    <Router>
        <UserProvider>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/>}/>
                <Route path='/:movieId' element={ <Movie/> }/>
                <Route path='/*' element={ <NotFound/> }/>
            </Routes>
            <GlobalStyle/>
            <ToastContainer/>

        </UserProvider>
    </Router>
);

export default App;
