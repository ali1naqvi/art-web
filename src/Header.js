import React from "react"
import './header.css'
import gif from './files/boom.gif'

function Header() {
  return (
    <header id="top">
      <div id="top-pic-writing"><img src={gif} alt="workinnit" border="0" /></div>
        <div id="written-sec">
          <p id="subtit">  Visual Arts</p>
          <p id="name">Ali Naqvi</p>
        </div>
    </header>
    
  );
}

export default Header;