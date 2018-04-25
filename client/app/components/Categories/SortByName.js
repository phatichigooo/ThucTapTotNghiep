import React, { Component } from 'react';

class SortByName extends Component {
  render() {
    return (
      <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
        <select className="selection-2" name="sorting">
          <option>Default Sorting</option>
          <option>Popularity</option>
          <option>Price: low to high</option>
          <option>Price: high to low</option>
        </select>
      </div>
    );
  }
}
export default SortByName;
