import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import ServiceHome from './ServiceHome';


const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Services</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4 mt-10'>
                {
                    services.map(service => <ServiceHome key={service._id} service={service}></ServiceHome>)
                }
            </div>
            <div className="text-center mt-4">

                <Link to='/services'> <button className="btn btn-primary text-lg mb-10">See All Services</button></Link>
            </div>
            <About></About>
            <Galary></Galary>
        </div>
    );
};

export default Home;