import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./SideDrawer.module.scss";
import Navigation from "../Navigation/Navigation";

const sideDrawer = props => {
  let sideDrawerClasses = [classes.sideDrawer, classes.closeSideDrawer];
  let modalClasses = [classes.modal, classes.closeModal];
  if (props.open) {
    sideDrawerClasses = [classes.sideDrawer, classes.openSideDrawer];
    modalClasses = [classes.modal];
  }

  return (
    <Fragment>
      <div onClick={props.close} className={modalClasses.join(" ")} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.header}>
          <button onClick={props.close}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </button>
        </div>
        <Navigation navSideDrawer={classes.navigation} />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
