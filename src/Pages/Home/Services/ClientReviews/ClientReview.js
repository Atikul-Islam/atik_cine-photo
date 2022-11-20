import React from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../../../Layout/Hooks/UseTitle";

const ClientReview = ({clientReview, deleteReview}) => {
  const {_id,s_name, comment} = clientReview;
  UseTitle('Reviews')
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
                  <div className="font-bold">{s_name}</div>
              </div>
            </td>
            <td>{comment}</td>
          </tr>
        </tbody>
      </table>
      <div className='text-end mb-2'>
        <Link to={`/updatereview/${_id}`}><button className="btn btn-primary btn-xs mr-4">Edit Review</button></Link>
        <button onClick={() => deleteReview(_id)} className="btn btn-primary btn-xs">Delete Review</button>
      </div>
    </div>
  );
};

export default ClientReview;
