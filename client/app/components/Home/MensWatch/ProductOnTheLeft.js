import React, { Component } from 'react';
import ProductsMen from './ProductsMen';

class ProductOnTheLeft extends Component {
  render() {
    return (
    <div className="col-md-8 agileits_banner_bottom_grid_three">
      <div className="agileinfo_banner_bottom_grid_three_left">
      <ProductsMen />
        <p className="w3_agileits_para">Pellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.</p>
      </div>
      <div className="agileinfo_banner_bottom_grid_three_left">
        <p className="w3_agileits_para">Pellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.</p>
        <ProductsMen />
      </div>
      <div className="clearfix"> </div>
    </div>
    );
  }
}

export default ProductOnTheLeft ;
