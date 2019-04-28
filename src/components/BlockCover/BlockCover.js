import React from "react";

import classes from "./BlockCover.module.scss";
import Button from "../UI/Button/Button";
import blockCoverPic from '../../../src/assets/images/block-cover/block-cover-1.png';

const blockCover = props => (
  <div className={classes.BlockCover}>
  
    <div className={classes.leftBlock}>
      <h2>{props.collection.collectionName}</h2>
      <h4>{props.collection.collectionType}</h4>

      <div className={classes.prices}>
        <p className={classes.discountPrice}>
          {props.collection.discountPrice}
        </p>
        <p className={classes.price}>${props.collection.price}</p>
      </div>
      <Button btnType="BlockCover">Shop Now</Button>
    </div>
    
    <div className={classes.rightBlock}>
      <img className={classes.blockCoverPic} src={blockCoverPic} alt="" />
    </div>
  </div>
);

export default blockCover;
