import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
// import NewsDatail from './NewsDatail/NewsDatail';


class Pagination extends Component {
  render() {
    return (
      <div className="pagination flex-m flex-w p-r-50">
        <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
        <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
       </div>
    );
  }
}
export default Pagination;
