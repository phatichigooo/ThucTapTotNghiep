import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
// import NewsDatail from './NewsDatail/NewsDatail';


class Search extends Component {
  render() {
    return (
      <div className="pos-relative bo11 of-hidden">
          <input className="s-text7 size16 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search" />
          <button className="flex-c-m size5 ab-r-m color1 color0-hov trans-0-4">
              <i className="fs-13 fa fa-search" aria-hidden="true" />
          </button>
      </div>
    );
  }
}
export default Search;
