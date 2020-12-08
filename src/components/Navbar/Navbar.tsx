import React from 'react';
import TopBar from 'components/Navbar/TopBar';
import SideDrawer from 'components/Navbar/SideDrawer';

const Navbar = () => {
  return (
    <div style={{display: 'flex'}}>
      <TopBar />
      <SideDrawer />
    </div>
  );
}

export default Navbar;