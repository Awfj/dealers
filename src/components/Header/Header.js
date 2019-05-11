import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import SideDrawer from './SideDrawer/SideDrawer';
import Navigation from './Navigation/Navigation';

class Header extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return(
      <header className={classes.Header}>
      <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
      <div className={classes.wrapper}>
        <Logo className={classes.logo} />
        <Navigation navHeader={classes.navigation} />
        
        <div className={classes.icons}>
          <a href="/"><FontAwesomeIcon icon={['fas', 'search']} /></a>
          <a href="/"><FontAwesomeIcon icon={['far', 'heart']} /></a>
          <a href="/"><FontAwesomeIcon icon={['fas', 'shopping-bag']} /></a>
          <button onClick={this.sideDrawerOpenHandler}><FontAwesomeIcon icon={['fas', 'bars']} /></button>
        </div>
      </div>
      </header>
    )
  }
};

export default Header;