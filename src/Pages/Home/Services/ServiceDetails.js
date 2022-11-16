import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/Authprovider";
import Reviews from "./Reviews";

const ServiceDetails = () => {

  const service = useLoaderData();
  const { name, pic, price, description } = service;
  console.log(pic, description);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={pic} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>Price: {price} </h3>
          <p>{description}</p>
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default ServiceDetails;
