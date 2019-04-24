import React from "react";

import classes from "./BlockCover.module.css";
import Button from "../UI/Button/Button";

const blockCover = props => (
  <div className={classes.BlockCover}>
    <div>
      <h2>{props.collection.collectionName}</h2>
      <h4>{props.collection.collectionType}</h4>
      <p>{props.collection.discountPrice}</p>
      <p>{props.collection.price}</p>
      <Button btnType="BlockCover">Shop Now</Button>
    </div>
    <div>
      <img src={props.blockCover.banner} alt=""/>
    </div>
  </div>
);

export default blockCover;