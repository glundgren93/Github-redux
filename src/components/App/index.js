import React from 'react';
import Navbar from '../Navbar';

const App = ({ children }) => {
  return (
    <div>
      <Navbar name = "GitHub React-Redux App"/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}
export default App;
