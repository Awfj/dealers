import React from "react";

import classes from "./SideDrawer.module.scss";

const sideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if(props.open){
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  // if (props.open) {
    return (
      <div className={attachedClasses.join(' ')}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          necessitatibus voluptas accusamus, soluta quisquam eaque quo animi
          adipisci sit deleniti possimus impedit cumque veritatis corporis sint
          labore unde eligendi deserunt!
        </p>
      </div>
    );
  // } else {
  //   return null;
  // }
};

export default sideDrawer;
