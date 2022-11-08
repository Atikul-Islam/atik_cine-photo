import React from "react";

const ServiceCard = ({service}) => {
    const {pic, price, name, description}= service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pic} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <h3>Price: {price} </h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;



