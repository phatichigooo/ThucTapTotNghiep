import React, { Component } from 'react';


class HeaderMobile extends Component {
  render() {
    return (
      <div className="wrap_header_mobile">
          {/* Logo moblie */}
          <a href="index.html" className="logo-mobile">
            <img src="./assets/images/icons/logo.png" alt="IMG-LOGO" />
          </a>
          {/* Button show menu */}
          <div className="btn-show-menu">
            {/* Header Icon mobile */}
            <div className="header-icons-mobile">
              <a href="#" className="header-wrapicon1 dis-block">
                <img src="./assets/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
              </a>
              <span className="linedivide2" />
              <div className="header-wrapicon2">
                <img src="./assets/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
                <span className="header-icons-noti">0</span>
              </div>
            </div>
            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </div>
      </div>
    );
  }
}
export default HeaderMobile ;
