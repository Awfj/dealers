import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductPreview.module.scss";

const productPreview = props => {
  return (
    <Link to={{pathname: '/dealers/details/' + props.id}} className={classes.ProductPreview}>
      <img src={props.image} alt={props.name} />
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p className={classes.collection}>{props.collection}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
    </Link>
  );
};

export default productPreview;
