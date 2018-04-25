import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';


class Cart extends Component {
  render() {
    return (
    <div>
      <Header />
      <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          {/* Cart item */}
          <CartItem />
          
          {/* Total */}
          <Total />
        </div>
      </section>
      <Footer />
    </div>
    );
  }
}
export default Cart ;
