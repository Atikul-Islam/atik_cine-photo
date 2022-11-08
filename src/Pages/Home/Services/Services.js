import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services,setServics] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setServics(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Services</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non architecto odit nemo necessitatibus maiores, porro voluptatum ipsam quis rem, cumque qui laborum totam repellendus animi sequi? Quia, eos minus?</p>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                    key={service.id}
                    service={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;