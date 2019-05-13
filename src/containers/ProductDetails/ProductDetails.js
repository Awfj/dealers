import React from "react";

const productDetails = props => {
  return (
    <div>
      <p>{props.products[0].name}</p>
      <button onClick={props.clicked}>Add to Cart</button>
    </div>
  );
};

export default productDetails;
