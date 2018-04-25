import React, { Component } from 'react';
import DoudleWatchLeft from './DoudleWatchLeft';
import DoudleWatchRight from './DoudleWatchRight';

class DoudleWatch extends Component {
  render() {
    return (
      <div className="team" id="experts">
        <div className="container">
          <div className="tittle-agileinfo">
            <h3>Dịch Vụ</h3>
          </div>
          <div className="w3ls_banner_bottom_grids">
            <DoudleWatchLeft />
            <DoudleWatchRight />
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DoudleWatch ;
