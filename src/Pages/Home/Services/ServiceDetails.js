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
  const {_id:id, s_name, pic, price, description } = service;


  useEffect( () => {
    fetch(`https://assignment11-node-mongodb-server.vercel.app/reviews/${id}`)
          .then(res => res.json())
          .then(data => setReviews(data))
  },[id,loader])

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
      s_name: s_name,
      s_id: id
    }

    fetch('https://assignment11-node-mongodb-server.vercel.app/reviews',{
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
          <h2 className="card-title">{s_name}</h2>
          <h3>Price: {price} </h3>
          <p>{description}</p>
        </div>
      </div>
      <Reviews reviews={reviews}></Reviews>
      <div >
                {
                    user ? <div className="mt-8 mb-20">
                        <h1 className='text-start font-bold text-3xl mb-4'>Add Your Review</h1>
                        <form onSubmit={handleReview}>
                            <input type="text" name='name' readOnly defaultValue={user?.displayName} className="input w-1/2 mb-3 bg-slate-200" />
                            <input type="email" name='email' readOnly defaultValue={user?.email} className="input w-1/2 mb-3 bg-slate-200" /><br />
                            <textarea name='comment' className="textarea textarea-bordered w-full" placeholder="Type what you wanna say" required></textarea>
                            <div className="text-center mt-2">  <button className="btn btn-primary " type='submit'>Add Review</button>
                          </div>
                        </form>

                    </div> : <div className="text-center mt-4 mb-5"><Link to='/login'><button className="btn btn-primary">Please LogIn to add your Review</button></Link></div>
                }
            </div>
    </div>
  );
};

export default ServiceDetails;
