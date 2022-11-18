import React from "react";

const ClientReview = ({clientReview}) => {
  const {name, comment} = clientReview
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
    </div>
  );
};

export default ClientReview;
