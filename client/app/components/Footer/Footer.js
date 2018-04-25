import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg7 p-t-45 p-b-43 p-l-45 p-r-45">
        <div className="flex-w p-b-90">
          <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
            <h4 className="s-text1 p-b-30">
              P&CWatch
            </h4>
            <div>
              <p className="s-text8 w-size27">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quis, sapiente, possimus iure reiciendis exercitationem explicabo sunt quaerat recusandae quo animi dolore officiis, totam magni sint omnis rerum sed aspernatur.
              </p>
              <div className="flex-m p-t-30">
                <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost" />
                <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play" />
              </div>
            </div>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <h4 className="s-text1 p-b-30">
              Categories
            </h4>
            <ul>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Men
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Women
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Dresses
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Sunglasses
                </a>
              </li>
            </ul>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <h4 className="s-text1 p-b-30">
              Links
            </h4>
            <ul>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Search
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  About Us
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Contact Us
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
            <h4 className="s-text1 p-b-30">
              Help
            </h4>
            <ul>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Track Order
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Returns
                </a>
              </li>
              <li className="p-b-9 hov7">
                <a href="#" className="s-text4">
                  Shipping
                </a>
              </li>
              
            </ul>
          </div>
          <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
            <h4 className="s-text1 p-b-30">
              Newsletter
            </h4>
            <form>
              <div className="effect1 w-size9">
                <input className="s-text4 bg7 w-full p-b-5" type="text" name="email" placeholder="phatichigo@gmail.com" />
                <span className="effect1-line" />
              </div>
              <div className="w-size2 p-t-20">
                {/* Button */}
                <button className="flex-c-m size2 bg0 bo-rad-23 hov1 m-text3 trans-0-4">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </footer>
    );
  }
}
export default Footer ;
