import React, { useState, useEffect } from "react";
import "./navbar.scss";
import $ from "jquery";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState({});

  const links = [
    {
      index: 0,
      name: "Home",
      link: "#home",
      color: "",
    },
    {
      index: 1,
      name: "About us",
      link: "#about",
      color: "black",
    },
    {
      inex: 2,
      name: "Our Services",
      link: "#services",
      color: "",
    },
    {
      index: 3,
      name: "Portfolio",
      link: "#portfolio",
      color: "",
    },
    {
      index: 4,
      name: "Technologies",
      link: "#technologies",
      color: "black",
    },
    {
      index: 5,
      name: "Our Products",
      link: "#products",
      color: "",
    },
    {
      index: 6,
      name: "Partners",
      link: "#partners",
      color: "",
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
      color: "",
    },
    {
      index: 8,
      name: "Contact us",
      link: "#contact_us",
      color: "",
    },
  ];

  function selectNav(val) {
    setSelectedNav(val);
    $("html, body").animate(
      {
        scrollTop: $(val.link).offset().top,
      },
      "slow"
    );
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

  useEffect(() => {
    const unmount = mounted();
    return unmount;
  }, []);

  return (
    <nav className="bcd-nav bcd-nav2">
      <ul className="nav_ul">
        {links.map((item) => (
          <li onClick={() => selectNav(item)} key={item.index}>
            <a
              className={
                (selectedNav?.index === item.index &&
                  "active-white-item nav-items") ||
                (item.index === selectedNav.index && item.color === "black")
                  ? "active-black-item nav-items"
                  : "nav-items"
              }
              href={item.link}
            >
              <div>
                <span className="spans">{item.name}</span>
              </div>
              <div className="nav-circle"></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
