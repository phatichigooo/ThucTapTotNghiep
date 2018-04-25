import React from 'react';

import { Link } from 'react-router-dom';
import BannerText from './BannerText';
import Contact from './Contact';
import MensWatch from './MensWatch/MensWatch';
import WomensWatch from './WonsMenWatch/WomensWatch';
import DoudleWatch from './DoudleWatch/DoudleWatch';
import BackgroundVideo from './BackgroundVideo';
import MenuDeskTops from './../Menu/MenuDeskTops';


const Home = () => (
  <div>
    <MensWatch />
    <WomensWatch />
    <DoudleWatch />
  </div>
);

export default Home;
