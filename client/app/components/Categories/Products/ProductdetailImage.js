import React, { Component } from 'react';

class ProductdetailImage extends Component {
  render() {
    return (
      <div className="col-lg-7">
          <div className="single_product_pics">
            <div className="row">
              <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                <div className="single_product_thumbnails">
                  <ul>
                    <li><img src="./assets/images/g21.jpg" alt data-image="./assets/images/g21.jpg" /></li>
                    <li className="active"><img src="./assets/images/g22.jpg" alt data-image="./assets/images/g22.jpg" /></li>
                    <li><img src="./assets/images/g23.jpg" alt data-image="./assets/images/g23.jpg" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 image_col order-lg-2 order-1">
                <div className="single_product_image">
                  <div className="single_product_image_background" style={{backgroundImage: 'url(./assets/images/g25.jpg)'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default ProductdetailImage;
