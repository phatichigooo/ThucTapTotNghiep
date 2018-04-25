import React, { Component } from 'react';
import ProductRelate from './ProductRelate';
import Productdetail from './Productdetail';
import Header from './../../Header/Header';
import Footer from './../../Footer/Footer';

class ProductDetails extends Component {
  render() {
    return (
      <div>
       
        <Header />
        {/* Product Detail */}
          <Productdetail />
        {/* Relate Product */}
        <Footer />
      </div>
    );
  }
}
export default ProductDetails;
