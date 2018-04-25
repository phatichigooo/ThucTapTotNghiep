import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
// import NewsDatail from './NewsDatail/NewsDatail';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import Search from './Search';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Archive from './Archive';
import Tags from './Tags';
import MenuDeskTops from './../Menu/MenuDeskTops';


class News extends Component {
  render() {
    return (
    <div>
       {/* <MenuDeskTops /> */}
       <div className="tittle-agileinfo">
          <h3>Tin Tức</h3>
      </div>
      <section className="bgwhite p-t-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-75">
              <div className="p-r-50 p-r-0-lg">
                <NewsItem />
              </div>
              {/* Pagination */}
              <Pagination/>
            </div>
            <div className="col-md-4 col-lg-3 p-b-75">
              <div className="rightbar">
                {/* Search */}
                <Search />
                {/* Categories */}
                <Categories />
                {/* Featured Products */}
                <FeaturedProducts />
                {/* Archive */}
               <Archive/>
                {/* Tags */}
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <NewsDatail /> */}
      </div>
    );
  }
}
export default News;
