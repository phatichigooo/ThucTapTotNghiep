import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import ProductRelate from './ProductRelate';
import ProductdetailImage from './ProductdetailImage';
import ProductdetailInformation from './ProductdetailInformation';
import Benefit from './Benefit';
import Newsletter from './Newsletter';

class Productdetail extends Component {
  render() {
    return (
      <div className="container single_product_container">
      <div className="row">
        <div className="col">
          {/* Breadcrumbs */}
          <Breadcrumb />
        </div>
      </div>
      <div className="row">
        <ProductdetailImage />
        <ProductdetailInformation />
      </div>
      <Benefit/>
      <Newsletter />
    </div>
    );
  }
}
export default Productdetail;
