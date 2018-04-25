import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
// import NewsDatail from './NewsDatail/NewsDatail';


class Tags extends Component {
  render() {
    return (
      <div>
          <h4 className="m-text23 p-t-50 p-b-25">
              Tags
          </h4>
          <div className="wrap-tags flex-w">
            <a href="#" className="tag-item">
              Đồng Hồ Nam
            </a>
            <a href="#" className="tag-item">
              Đồng Hồ Nữ
            </a>
            <a href="#" className="tag-item">
              Đồng Hồ Cặp
            </a>
            <a href="#" className="tag-item">
              News
            </a>
            <a href="#" className="tag-item">
              Liên Hệ
            </a>
          </div>
      </div>
    );
  }
}
export default Tags;
