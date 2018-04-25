import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
// import NewsDatail from './NewsDatail/NewsDatail';


class Categories extends Component {
  render() {
    return (
    <div>
      <h4 className="m-text23 p-t-56 p-b-34">
          Categories
      </h4>
      <ul>
        <li className="p-t-6 p-b-8 bo6">
          <a href="#" className="s-text13 p-t-5 p-b-5">
            Tin Mới Nhất
          </a>
        </li>
        <li className="p-t-6 p-b-8 bo7">
          <a href="#" className="s-text13 p-t-5 p-b-5">
            Kiến Thức Về Đồng Hồ
          </a>
        </li>
        <li className="p-t-6 p-b-8 bo7">
          <a href="#" className="s-text13 p-t-5 p-b-5">
            Đánh Giá Sản Phẩm
          </a>
        </li>
        <li className="p-t-6 p-b-8 bo7">
          <a href="#" className="s-text13 p-t-5 p-b-5">
            Tin Tức Về Khuyến Mãi
          </a>
        </li>
        <li className="p-t-6 p-b-8 bo7">
          <a href="#" className="s-text13 p-t-5 p-b-5">
            Linh Kiện
          </a>
        </li>
      </ul>
    </div>
    );
  }
}
export default Categories;
