import React from 'react';
import { Link } from 'react-router';

const Navbar = ({ name, profile }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" >{ name }</Link>
        </div>
          <p className="navbar-text navbar-right">Signed in as { profile.name }</p>
      </div>
    </nav>
  )
}

export default Navbar;
