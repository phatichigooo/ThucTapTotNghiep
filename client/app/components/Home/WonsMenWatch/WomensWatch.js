import React from 'react';
import { Link } from 'react-router-dom';
import ProductsWomenLeft from './ProductsWomenLeft';
import ProductWomenRight from './ProductsWomenRight';
import Title from './Title';

const WomensWatch = () => (
  <div className="services" id="services">
        <div className="container" style={{border: '5px solid #ccc'}}>
          <div className="tittle-agileinfo">
            <h3>Đồng Hồ Nữ</h3>
          </div>
          <div className="w3_agileits_services_grids" >
            <ProductsWomenLeft />
               <ProductWomenRight />
               <ProductWomenRight />
               <ProductWomenRight />
               <ProductWomenRight />
               <ProductWomenRight />
               <ProductWomenRight />
          </div>
        </div>
      </div>
);

export default WomensWatch;
