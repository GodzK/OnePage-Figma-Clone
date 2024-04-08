import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-txt">
        <h1>Landing</h1>
      </div>
      <button className=" text-white py-2 px-24 btn-nav  ">
  Buy now
</button>
     
    </nav>
  );
}

export default Nav;
