import React from "react";

const productDetails = props => {
  console.log(props)
  return (
    <div>
      <p>{props.products[props.match.params.productId - 1].name}</p>
      <button onClick={() => props.clicked('test')}>Add to Cart</button>
    </div>
  );
};

export default productDetails;
