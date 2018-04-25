import React, { Component } from 'react';
import SideBar from './Sidebar';
import Products from './Products/Products';

class Contents extends Component {
  render() {
    return (
      <section className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            <SideBar />
            <Products />
          </div>
        </div>
      </section>
    );
  }
}
export default Contents ;
