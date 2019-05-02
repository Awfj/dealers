import React from "react";

import classes from "./CoverBlock.module.scss";
import Button from "../../UI/Button/Button";

const coverBlock = props => (
  <div className={classes.CoverBlock}>
  
    <div className={classes.leftBlock}>
      <h4>{props.coverBlock.title}</h4>
      <h2>{props.coverBlock.items[0]}</h2>

      {/* <div className={classes.prices}>
        <p className={classes.discountPrice}>
          {props.collection.discountPrice}
        </p>
        <p className={classes.price}>${props.collection.price}</p>
      </div> */}

      <Button btnType="CoverBlock">Shop Now</Button>
    </div>
    
    <div className={classes.rightBlock}>
      <img className={classes.CoverBlockImg} src={props.coverBlock.images[0]} alt="" />
    </div>
  </div>
);

export default coverBlock;
