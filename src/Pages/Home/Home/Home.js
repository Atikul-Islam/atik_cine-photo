import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Galary></Galary>
        </div>
    );
};

export default Home;