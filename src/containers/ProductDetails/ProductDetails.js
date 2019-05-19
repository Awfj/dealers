import React from "react";

import classes from './ProductDetails.module.scss';

const productDetails = props => {
  return (
    <div className={classes.productDetails}>
      <img src={props.products[props.match.params.productId - 1].image} alt={props.products[props.match.params.productId - 1].name}/>
      <section>
        <h2>{props.products[props.match.params.productId - 1].name}</h2>
        <p>{props.products[props.match.params.productId - 1].description}</p>
        <p className={classes.price}>${props.products[props.match.params.productId - 1].price}</p>
        <button onClick={() => props.clicked(props.match.params.productId)}>Add to Cart</button>
      </section>
    </div>
  );
};

export default productDetails;
