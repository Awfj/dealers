import React from "react";

import classes from './Navigation.module.scss';

const navigation = (props) => {
  return (
    <nav className={[props.navHeader, props.navSideDrawer, classes.navigation].join(' ')}>
      <a href="/">Collection</a>
      <a href="/">Shop</a>
      <a href="/">Catalogs</a>
      <a href="/">Contact</a>
    </nav>
  );
};

export default navigation;
