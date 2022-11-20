import React from "react";

const Review = ({ review }) => {
  const { photo, name, comment } = review;
  return (
    <div className="overflow-x-auto w-full mt-5">
      <table className="lg:table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Img" />
              </div>
              <div className="font-bold">{name}</div>
            </td>
            <td>{comment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
