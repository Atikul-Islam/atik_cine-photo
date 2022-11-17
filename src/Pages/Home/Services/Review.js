import React from "react";

const Review = ({ review }) => {
  const { photo, name, comment } = review;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Img" />
            </div>
            <div className="font-bold">{name}</div>
          </td>
          <td>{comment}</td>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
