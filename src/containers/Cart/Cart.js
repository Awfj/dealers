import React from "react";

import classes from "./Cart.module.scss";

const cart = props => {
  let body = null;

  if (props.cartState.products.length >= 1) {
    body = (
      <div className={classes.table}>
        {props.cartState.products.map((addedProduct, index) => {
          return props.collections.products.map(product => {
            if (+addedProduct.id === product.id) {
              return (
                <div className={classes.product} key={product.id}>
                  <div className={classes.cell}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={classes.cell}>
                    <p>{product.name}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>{addedProduct.quantity}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>${+product.price * addedProduct.quantity}</p>
                  </div>
                  <div className={classes.cell}>
                    <button onClick={() => props.clicked(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            } else {
              return (body = null);
            }
          });
        })}
      </div>
    );
  } else {
    body = <h1>Your Cart is empty</h1>;
  }

  return <div className={classes.cart}>{body}</div>;
};

export default cart;
