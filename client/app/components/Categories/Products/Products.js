import React, { Component } from 'react';
import SortByName from './../SortByName';
import SortByPrice from './../SortByPrice';
import Product from './Product';

class Products extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
        {/*  */}
        <div className="flex-sb-m flex-w p-b-35">
          <div className="flex-w">
              <SortByName />
              <SortByPrice />
           
          </div>
          <span className="s-text8 p-t-5 p-b-5">
            Showing 1–12 of 16 results
          </span>
        </div>
        {/* Product */}
        <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        {/* Pagination */}
        <div className="pagination flex-m flex-w p-t-26">
          <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
          <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
        </div>
      </div>
    );
  }
}

export default Products ;
