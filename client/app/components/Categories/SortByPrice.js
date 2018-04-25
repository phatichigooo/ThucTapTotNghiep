import React, { Component } from 'react';
import SideBar from './Sidebar';

class SortByPrice extends Component {
  render() {
    return (
      <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
          <select className="selection-2" name="sorting">
            <option>Price</option>
            <option>$0.00 - $50.00</option>
            <option>$50.00 - $100.00</option>
            <option>$100.00 - $150.00</option>
            <option>$150.00 - $200.00</option>
            <option>$200.00+</option>
          </select>
      </div>
    );
  }
}
export default SortByPrice ;
