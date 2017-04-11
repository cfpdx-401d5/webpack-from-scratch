import React from 'react';

import Header from '../header/Header.js';
import Content from '../content/Content.js';
import Footer from '../footer/Footer.js';

import './App.scss';

function App() {
    return (
        <div className='site-wrapper'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;