import React from "react";

import classes from "./Banner.module.scss";
import Button from '../UI/Button/Button';

const banner = props => {
  return (
    <div className={classes.BannerCollection}>

      <div className={classes.leftBlock}>
        <h2>{props.collection.name}</h2>
        <h4>{props.collection.type}</h4>
        <div className={classes.prices}>
          <p className={classes.price}>{props.collection.price}</p>
          <p className={classes.discountPrice}>{props.collection.discountPrice}</p>
        </div>
        <Button btnType="CoverBlock">Shop Now</Button>
      </div>

      <div className={classes.rightBlock}>
        <img src={props.collection.image} alt="" />
      </div>

    </div>
  );
};

export default banner;
