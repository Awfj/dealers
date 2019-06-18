import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./SideDrawer.module.scss";
import Navigation from "../Navigation/Navigation";

const sideDrawer = props => {
  let sideDrawerClasses = [classes.sideDrawer, classes.closeSideDrawer];
  let modalClasses = [classes.modal, classes.closeModal];
  if (props.isSideDrawerOpen) {
    sideDrawerClasses = [classes.sideDrawer, classes.openSideDrawer];
    modalClasses = [classes.modal];
  }

  return (
    <Fragment>
      <div onClick={props.closeSideDrawer} className={modalClasses.join(" ")} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.header}>
          <button onClick={props.closeSideDrawer}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </button>
        </div>
        <Navigation navSideDrawer={classes.navigation} closeSideDrawer={props.closeSideDrawer} />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
