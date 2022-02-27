import React,{useState} from "react";
import '../navbar/navbar.scss';



const PortfolioNav = () => {
    const [project, setProject] = useState([]);
    const [selectedProject, setSelectedProject] = useState('')
  
    return (
        <nav className="bcd-nav" id="portfolio-nav">
    <ul>
       <li>
        <a className="nav-items" href="#">
          <div><span className="item">About us</span></div>
          <div className="nav-circle"></div>
          </a>
          </li>

     {project.map((project,index) => <li key={index} className="inner-navbar">
        <a id="gander" className="nav-items"  className={ selectedProject === project && ' active-black-item'} onClick="select(project)">
          <div><span >{project?.name}</span></div>
          <div className="nav-circle"></div>
        </a>
      </li>)}
       <li>
        <a id="expanse Luna Wallet" className="nav-items" href="#">
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
      </li>
    </ul>
  </nav>
    )
}