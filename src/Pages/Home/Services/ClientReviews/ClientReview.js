import React from "react";

const ClientReview = ({clientReview, deleteReview}) => {
  const {_id,name, comment} = clientReview
  return (
    <div className="overflow-x-auto w-full  mt-5">
      <table className="lg:table w-full">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                  <div className="font-bold">{name}</div>
              </div>
            </td>
            <td>{comment}</td>
          </tr>
        </tbody>
      </table>
      <div className='text-center'>
                <button onClick={() => deleteReview(_id)} className="btn btn-primary btn-xs">Delete Review</button>
            </div>
    </div>
  );
};

export default ClientReview;
