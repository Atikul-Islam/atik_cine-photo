import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/Authprovider";
import ClientReview from "./ClientReview";


const ClientReviews = () => {
  const { user } = useContext(AuthContext);
  const [clientReviews, setClientReviews] = useState([]);

  useEffect(() => {
      fetch(`https://assignment11-node-mongodb-server.vercel.app/reviews?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setClientReviews(data))
  }, [user?.email])

  const deleteReview = (id) => {

    fetch(`https://assignment11-node-mongodb-server.vercel.app/reviews/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {

            if (data.deleteCdount > 0) {
                const remaining = clientReviews.filter(rv => rv._id !== id)
                setClientReviews(remaining)
            }
        })

}

  return (
    <div className='min-h-screen '>
    {
        clientReviews.length === 0 ? 
        <h1 className='text-3xl font-extrabold flex align-middle justify-center text-center'>You haven't added any reviews.</h1> 
        : 
        <h1 className='text-3xl font-extrabold  text-center my-4'>Here Is Your Reviews!!!</h1>
    }
    {
        clientReviews?.map(clientReview => <ClientReview key={clientReview._id} deleteReview={deleteReview} clientReview={clientReview}></ClientReview>)
    }
</div>
  );
};


export default ClientReviews;
