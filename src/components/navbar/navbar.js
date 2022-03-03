import React, { useState, useEffect } from "react";
import "./navbar.scss";
import $ from "jquery";
import { navigate } from "gatsby";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState({});

  const links = [
    {
      index: 0,
      name: "Home",
      link: "#home",
      class: "active-white-item nav-items"
    },
    {
      index: 1,
      name: "About us",
      link: "#about",
      class: "active-black-item nav-items"
    },
    {
      inex: 2,
      name: "Our Services",
      link: "#services",
      class: "active-white-item nav-items"
    },
    {
      index: 3,
      name: "Portfolio",
      link: "#portfolio",
      class: "active-white-item nav-items"
    },
    {
      index: 4,
      name: "Technologies",
      link: "#technologies",
      class: "active-black-item nav-items"
    },
    {
      index: 5,
      name: "Our Products",
      link: "#products",
      class: "active-white-item nav-items"
    },
    {
      index: 6,
      name: "Partners",
      link: "#partners",
      class: "active-white-item nav-items"
    },
    // {
    //   name: 'Our Team',
    //   link: "#our_team",
    //   color: ''
    // },
    {
      index: 7,
      name: "Life At BCD",
      link: "#bcd-life",
      class: "active-white-item nav-items"
    },
    {
      index: 8,
      name: "Contact us",
      link: "#contact_us",
      class: "active-white-item nav-items"
    },
  ];

  function selectNav(val) {
    return navigate(val.link);
  }
   
  // function moveToPage(id) {
  //   setSelectedNav(id)
  //   $('html, body').animate({
  //     scrollTop: $(id.link).offset().top
  //   }, 'slow');
  //   setShow(false)
  // }

  function mounted() {
    // console.log('dsfsdfsd', this.idType);
    //  console.log('asdasd',this.selectedID)
    var currentLocation = document.URL;
    var fields = currentLocation.split("#");
    if (fields[1]) {
      var urlName = "#" + fields[1];
      var filter = links.filter((val) => val.link === urlName)[0];
      setSelectedNav(filter);
      $("html, body").animate(
        {
          scrollTop: $(urlName).offset().top,
        },
        "slow"
      );
    } else {
      setSelectedNav(links[0]);
    }
  }

  function style (item) {
    if(item.index){
      return "active-black-item nav-items"
    } else {
      return "nav-items"
    }
      
  }



  const history = window.location.href;
  console.log("location:::",history)
  useEffect(() => {
    const unmount = mounted();
    return unmount;
  }, []);

  return (
    <nav className="bcd-nav bcd-nav2">
      <ul style={{marginTop:"6px"}}>
        {links.map((item) => (
          <li key={item.index}>
            <a
              className="nav-items"
              href={item.link}
            >
              <div>
                <span className="spans">{item.name}</span>
              </div>
              <div className="nav-circle" onClick={() => selectNav(item)}></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
