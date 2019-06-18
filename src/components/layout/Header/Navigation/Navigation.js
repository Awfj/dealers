import React from "react";
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

const navigation = (props) => {
  return (
    <nav className={[props.navHeader, props.navSideDrawer, classes.navigation].join(' ')}>
      <NavLink onClick={props.closeSideDrawer} activeClassName={classes.active} to='/dealers/' exact>Collecion</NavLink>
      <NavLink onClick={props.closeSideDrawer} activeClassName={classes.active} to='/dealers/shop'>Shop</NavLink>
      <NavLink onClick={props.closeSideDrawer} activeClassName={classes.active} to='/dealers/contact'>Contact</NavLink>
    </nav>
  );
};

export default navigation;
