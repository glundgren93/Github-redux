import React from 'react';
import { Link } from 'react-router';

const Navbar = ({ name }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" >{ name }</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
