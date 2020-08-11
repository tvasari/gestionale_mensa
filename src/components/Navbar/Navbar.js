import React from 'react';
import TopBar from './TopBar.js';
import SideDrawer from './SideDrawer.js';

const Navbar = () => {
  return (
    <div style={{display: 'flex'}}>
      <TopBar />
      <SideDrawer />
    </div>
  );
}

export default Navbar;