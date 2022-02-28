import React, { useEffect, useState } from "react";
import "../../pages/scss/viewportfolio.scss";

const PortfolioNav = ({ projects, select }) => {
  const [selected, setSelected] = useState({});
  function sel(val) {
    select(val);
    setSelected(val);
  }

  useEffect(() => {
    setSelected(projects[0]);
  }, []);
  return (
    <nav className="bcd-nav" id="portfolio-nav">
      <ul>
        <li>
          {/* <a className="nav-items" href="#">
          <div><span className="item">About us</span></div>
          <div className="nav-circle"></div>
          </a> */}
        </li>

        {projects.map((project, index) => (
          <li key={index} className="inner-navbar">
            <a
              id="gander"
              className={
                project.name === selected.name
                  ? "active-black-item nav-items"
                  : "nav-items"
              }
              onClick={() => sel(project)}
            >
              <div>
                <span>{project?.name}</span>
              </div>
              <div className="nav-circle"></div>
            </a>
          </li>
        ))}
        {/* <li> */}
        {/* <a id="expanse Luna Wallet" className="nav-items" href="#">
           <div><span className="item">Our Services</span></div>
            <div className="nav-circle"></div>
         </a>
       </li>
      <li>
        <a id="Tokenlab" className="nav-items" href="#">
          <div><span className="item">Portfolio</span></div>
          <div className="nav-circle"></div>
        </a>
      </li>
      <li>
        <a id="technologies" className="nav-items" href="#">
          <div><span className="item">Technologies</span></div>
          <div className="nav-circle"></div>
        </a>
      </li>
      <li>
      <a id="cliiimb" className="nav-items" href="#">
          <div><span className="item">Cliimb</span></div>
          <div className="nav-circle"></div>
        </a>
      </li>
      <li>
       <a id="dws" className="nav-items" href="#">
          <div><span className="item">DWS</span></div>
          <div className="nav-circle"></div>
        </a>
      </li>
      <li>
        <a id="contact_us" className="nav-items" href="#">
          <div><span className="item">Contact us</span></div>
          <div className="nav-circle"></div>
        </a>
      </li> */}
      </ul>
    </nav>
  );
};

export default PortfolioNav;
