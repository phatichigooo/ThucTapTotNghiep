import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
    <div className="container-table-cart pos-relative">
      <div className="wrap-table-shopping-cart bgwhite">
        <table className="table-shopping-cart">
          <tbody><tr className="table-head">
              <th className="column-1" />
              <th className="column-2">Product</th>
              <th className="column-3">Price</th>
              <th className="column-4 p-l-70">Quantity</th>
              <th className="column-5">Total</th>
            </tr>
            <tr className="table-row">
              <td className="column-1">
                <div className="cart-img-product b-rad-4 o-f-hidden">
                  <img src="./assets/images/item-10.jpg" alt="IMG-PRODUCT" />
                </div>
              </td>
              <td className="column-2">Men Tshirt</td>
              <td className="column-3">$36.00</td>
              <td className="column-4">
                <div className="flex-w bo5 of-hidden w-size17">
                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                  </button>
                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" defaultValue={1} />
                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                  </button>
                </div>
              </td>
              <td className="column-5">$36.00</td>
            </tr>
            <tr className="table-row">
              <td className="column-1">
                <div className="cart-img-product b-rad-4 o-f-hidden">
                  <img src="./assets/images/item-05.jpg" alt="IMG-PRODUCT" />
                </div>
              </td>
              <td className="column-2">Mug Adventure</td>
              <td className="column-3">$16.00</td>
              <td className="column-4">
                <div className="flex-w bo5 of-hidden w-size17">
                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                  </button>
                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product2" defaultValue={1} />
                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                  </button>
                </div>
              </td>
              <td className="column-5">$16.00</td>
            </tr>
          </tbody></table>
      </div>
    </div>
    );
  }
}
export default CartItem ;
