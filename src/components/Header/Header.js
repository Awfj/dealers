import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Header.module.scss';

const header = (props) => {
  return(
    <header className={classes.Header}>
    <div className={classes.wrapper}>
      <a className={classes.logo} href="/">Dealers</a>
      <nav>
        <a href="/" className={classes.test}>Collection</a>
        <a href="/">Shop</a>
        <a href="/">Catalogs</a>
        <a href="/">Contact</a>
      </nav>
      <div className={classes.icons}>
        <a href="/"><FontAwesomeIcon icon={['fas', 'search']} /></a>
        <a href="/"><FontAwesomeIcon icon={['far', 'heart']} /></a>
        <a href="/"><FontAwesomeIcon icon={['fas', 'shopping-bag']} /></a>
        <button onClick={props.toggleSideDrawer}><FontAwesomeIcon icon={['fas', 'bars']} /></button>
      </div>
    </div>
    </header>
  )
};

export default header;