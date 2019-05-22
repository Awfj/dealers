import React from "react";

import classes from "./Cart.module.scss";

const cart = props => {
  if (props.cartState.products.length >= 1) {
    return (
      <div className={classes.cart}>
        {props.cartState.products.map(id => {
          return props.collections.products.map(product => {
            if (+id === product.id) {
              return (
                <div className={classes.table} key={product.id}>
                  <div className={classes.cell}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={classes.cell}>
                    <p>{product.name}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>${product.price}</p>
                  </div>
                  <div className={classes.cell}>
                    <p>1</p>
                  </div>
                  <div className={classes.cell}>
                    <p>${product.price}</p>
                  </div>
                  <div className={classes.cell}>
                    <button onClick={() => props.clicked(product.id)}>Remove</button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          });
        })}
      </div>
    );
  } else {
    return <h1>Your Cart is empty</h1>;
  }
};

export default cart;
