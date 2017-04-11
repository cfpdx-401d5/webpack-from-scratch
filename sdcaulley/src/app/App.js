import React from 'react';
import Header from '../components/header/Header.js';
import Content from '../components/content/Content.js';
import Footer from '../components/footer/Footer.js';
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