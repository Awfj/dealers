import React from "react";

import classes from "./CoverBlock.module.scss";
import Button from "../../../../shared/Button/Button";

const coverBlock = props => (
  <div>
    <div className={classes.CoverBlock}>
      <div className={classes.leftBlock}>
        <img className={classes.CoverBlockImg} src={props.image} alt="" />
      </div>

      <div className={classes.rightBlock}>
        <h4>{props.title}</h4>
        <h2>{props.name}</h2>

        <Button btnType="CoverBlock">Shop Now</Button>
      </div>
    </div>
    {props.children}
  </div>
);

export default coverBlock;
