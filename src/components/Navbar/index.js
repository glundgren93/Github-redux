import React from 'react';

const Navbar = ({ name }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">{ name }</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
