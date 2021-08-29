import React from 'react';
// Imported Components
import Header from './components/Header'
import Home from './components/Home'

// Import Style

import {GlobalStyle} from "./GlobalStyle";

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <GlobalStyle/>
    </div>
  );
}

export default App;
