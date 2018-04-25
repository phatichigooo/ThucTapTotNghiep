import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import ProductRelate from './ProductRelate';

class ProductdetailInformation extends Component {
  render() {
    return (
      <div className="col-lg-5">
          <div className="product_details">
            <div className="product_details_title">
              <h2>Pocket cotton sweatshirt</h2>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
            </div>
            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
              <span className="ti-truck" /><span>free delivery</span>
            </div>
            <div className="original_price">$629.99</div>
            <div className="product_price">$495.00</div>
            <ul className="star_rating">
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
            </ul>
            <div className="product_color">
              <span>Select Color:</span>
              <ul>
                <li style={{background: '#e54e5d'}} />
                <li style={{background: '#252525'}} />
                <li style={{background: '#60b3f3'}} />
              </ul>
            </div>
            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
              <span>Quantity:</span>
              <div className="quantity_selector">
                <span className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                <span id="quantity_value">1</span>
                <span className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
              </div>
              <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
              <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
            </div>
          </div>
        </div>
    );
  }
}
export default ProductdetailInformation;
