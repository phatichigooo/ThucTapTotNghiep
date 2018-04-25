import React, { Component } from 'react';

// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MenuDeskTops from './../Menu/MenuDeskTops';

const App = ({ children }) => (
  <>
    <MenuDeskTops />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
