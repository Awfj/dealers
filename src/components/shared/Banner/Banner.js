import React from "react";
import {Link} from 'react-router-dom';

import classes from "./Banner.module.scss";

const banner = props => {
  return (
    <div className={classes.BannerCollection}>

      <div className={classes.leftBlock}>
        <h2>{props.banner.name}</h2>
        <h4>{props.banner.type}</h4>
        {/* <div className={classes.prices}>
          <p className={classes.price}>{props.banner.price}</p>
          <p className={classes.discountPrice}>{props.banner.discountPrice}</p>
        </div> */}
        <Link to='/dealers/shop'>Shop Now</Link>
      </div>

      <div className={classes.rightBlock}>
        <img src={props.banner.image} alt="" />
      </div>

    </div>
  );
};

export default banner;
