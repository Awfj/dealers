import React from "react";

import classes from "./ProductPreview.module.scss";

const productPreview = props => {
  return (
    <a href="/" className={classes.ProductPreview}>
      <img src={props.image} alt="" />
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p className={classes.collection}>{props.collection}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
    </a>
  );
};

export default productPreview;
