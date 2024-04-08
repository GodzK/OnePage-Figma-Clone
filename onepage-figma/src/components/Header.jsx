import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="content-container">
        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl" style={{ marginTop: "10rem", marginLeft: "2rem" }}>
          Introduce Your Product <br />
          Quickly & Effectively
        </h1>
        <br />
        <p style={{ color: "#505F98", fontWeight: "500", marginLeft: "2rem" }} className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deserunt amet quia <br/>
          sint facilis ex dolor accusantium nesciunt, debitis reprehenderit culpa in reiciendis <br/>
          distinctio fugiat excepturi explicabo! Maxime temporibus placeat ducimus<br/>ad sunt facere 
          atque et dolor.
        </p>
        <br />
        <br />
        <div className="group-button">
          <button
            type="button"
            className="text-white text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none btn-header1 ml-8"
          >
            Purchase UI Kit
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm btn-header2"
          >
            Learn More
          </button>
        </div>
      </div> 
       <div className="background-images">
        <img src="./images/fm1.svg" alt="" className="header-image" />
      </div>
    </div>
  );
}

export default Header;
