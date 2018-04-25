import React, { Component } from 'react';
import MenuMobile from './../Menu/MenuMobile';
import MenuDeskTops from './../Menu/MenuDeskTops';
import HeaderIcon from './HeaderIcon';
import HeaderMobile from './HeaderMobile';

class Header extends Component {
  render() {
    return (
      <header className="header1">
        {/* Header desktop */}
        <div className="container-menu-header">
          <div className="wrap_header">
            {/* Logo */}
            <a href="index.html" className="logo">
              <img src="./assets/images/logo.png" alt="IMG-LOGO" />
            </a>
            {/* Menu */}
            <MenuDeskTops />
            {/* Header Icon */}
            <HeaderIcon />
          </div>
        </div>
        {/* Header Mobile */}
          <HeaderMobile/>
        {/* Menu Mobile */}
       <MenuMobile />
      </header>
    );
  }
}
export default Header ;
