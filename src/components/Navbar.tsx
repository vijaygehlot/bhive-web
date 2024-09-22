import React from 'react';
import '../styles/Navbar.scss';
import Logo from '../images/logo.png'
import CallLogo from '../images/call.png'
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo-left">
        <img src={Logo} alt="Logo" />
      </div>




      <div className="navbar-logo-right">
        <img src={CallLogo} alt="Call Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
