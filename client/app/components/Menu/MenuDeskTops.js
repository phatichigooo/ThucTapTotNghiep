import React  from 'react';
import { BrowserRouter as Router ,Route, Link ,NavLink } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';
import News from './../News/News';
import Categories from './../Categories/Categories';


class MenuDeskTops extends React.Component{
  render(){
    return (
      <Router>
        <div className="wrap_menu">
          <nav className="menu">
            <ul className="main_menu">
              <li className="sale-noti">
                <a href="/">Trang Chủ</a>
              </li>
              <li>
                <a href="/categories">Shop</a>
              </li>
              <li >
                <a href="/news">Tin Tức</a>
              </li>
              <li>
                <a href="/about">Về PCWatch</a>
              </li>
              <li>
                <a href="/contact">Liên Hệ</a>
              </li>
            </ul>
          </nav>
          <Route path= "/" exact component ={Home} />
          <Route path= "/categories"  component ={Categories} />
          <Route path= "/news"  component ={News} />
          <Route path= "/about"  component ={About} />
          <Route path= "/contact"  component ={Contact} />
        </div>
      </Router>
    );
  }
}

export default MenuDeskTops;
