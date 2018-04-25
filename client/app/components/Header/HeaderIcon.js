import React, { Component } from 'react';


class HeaderIcon extends Component {
  render() {
    return (
      <div className="header-icons">
          <a href="#" className="header-wrapicon1 dis-block">
            <img src="./assets/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
          </a>
          <span className="linedivide1" />
          <div className="header-wrapicon2">
            <span className="header-icons-noti">0</span>
            <img src="./assets/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
            {/* Header cart noti */}
          </div>
        </div>
    );
  }
}
export default HeaderIcon ;
