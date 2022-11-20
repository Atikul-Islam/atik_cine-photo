import React from 'react';

const ServiceHome = ({service}) => {
    const { s_name, pic, price, description } = service;
    return (

        <div className="card card-compact text-start w-96 bg-base-100 ">
            <figure><img className='h-60 rounded-2xl' src={pic} alt="" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-lg">{s_name}</h2>
                <h3>Price: {price} </h3>
                <p>{description.slice(0,100) + '...'}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceHome;