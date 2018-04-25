import React from 'react';
import { Link } from 'react-router-dom';


const MenuMobile = () => (
  <div className="wrap-side-menu">
    <nav className="side-menu">
      <ul className="main-menu">
        <li className="item-menu-mobile">
          <a href="index.html">Trang Chủ</a>
        </li>
        <li className="item-menu-mobile">
          <a href="product.html">Shop</a>
        </li>
        <li className="item-menu-mobile">
          <a href="product.html">Tin Tức</a>
        </li>
        <li className="item-menu-mobile">
          <a href="cart.html">Về PCWatch</a>
        </li>
        <li className="item-menu-mobile">
          <a href="blog.html">Liên Hệ</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default MenuMobile;
