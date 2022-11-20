import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, pic, price, s_name, description}= service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={pic}>
          <img src={pic} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{s_name}</h2>
        <h3>Price: {price} </h3>
        <p>{description.slice(0,100) + '...'}</p>
        <div className="card-actions justify-end">
        <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;



