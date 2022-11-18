import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/Authprovider";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const {_id, name, pic, price, description } = service;
  console.log(pic, description);

  useEffect( () => {
    fetch(`http://localhost:5000/reviews/${_id}`)
          .then(res => res.json())
          .then(data => setReviews(data))
  },[_id,loader])

  const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const {photo} = user;
    const client = {
      name: name,
      email: email,
      comment: comment,
      photo: photo,

    }

    fetch('http://localhost:5000/reviews',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        setLoader(false)
      }
    })
    form.reset();
    toast.success('Review added successfully');
    setLoader(true);
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-20">
        <figure>
          <img src={pic} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>Price: {price} </h3>
          <p>{description}</p>
        </div>
      </div>
      <Reviews reviews={reviews}></Reviews>
      <div >
                {
                    user ? <div className="mt-8 mb-20">
                        <h1 className='text-center font-bold text-3xl mb-4'>Add Your Review</h1>
                        <form onSubmit={handleReview}>
                            <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Type what you wanna say" required></textarea>
                            <div className="text-center mt-2">  <button className="btn btn-primary " type='submit'>Add Review</button>
                          </div>
                        </form>

                    </div> : <div className="text-end mt-4"><Link to='/login'><button className="btn btn-primary">Please LogIn to add your Review</button></Link></div>
                }
            </div>
    </div>
  );
};

export default ServiceDetails;
