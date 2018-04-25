import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import ProductOnTheLeft from './ProductOnTheLeft';
import ProductOnTheRight from './ProductOnTheRight';


const MensWatch = () => (
  <div className="latest-works" id="works">
        <div className="container">
          <Title />
          <ProductOnTheLeft />
          <ProductOnTheRight />
          
          <div className="clearfix"> </div>
        </div>
      </div>
);

export default MensWatch;
