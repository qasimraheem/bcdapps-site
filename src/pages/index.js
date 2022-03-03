import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import $ from "jquery";
import bcdLogoImg from "../images/bcd-logo.png";
import menuIcon from "../images/menu-icon.svg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Home from "../components/home/home";
import About from "../components/about/about";
import Services from "../components/services-comp/services";
import Portfolio from "../components/portfolio/portfolio";
import Technologies from "../components/technologies/technologies";
import Products from "../components/products/products";
import Partners from "../components/partners/partners";
import LifeAtBcd from "../components/life-at-bcd/life-at-bcd";
import Contact from "../components/contact/contact";
import Navbar from "../components/navbar/navbar";
import _ from "lodash";
import { navigate } from "gatsby";

const IndexPage = () => {
  const [show, setShow] = useState(false);
  const [visible,setVisible] = useState("visibles");

  function click() {
    $(".menu").fadeToggle("slow");
  }

  // function Up() {
    
  //   // $("html, body").animate(
  //   //   {
  //   //     scrollTop: $("#home").offset().top,
  //   //   },
  //   //   "slow"
  //   // );
  // }
//    function Up(){
//     $(".top-btn").one('click', function () {  
         
// });
     
//    }


   function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    _callback();    
}

function Up(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function() {
      navigate("/#home"); 
    });    
}

  function moveToPage(id) {
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      "slow"
    );
    setShow(false);
  }
  function down() {
    $("html, body").animate(
      {
        scrollTop: $("#contact_us").offset().top,
      },
      "slow"
    );
  }

  function mounted() {
    var that = this;
    var r;
    $(".top-btn").hide();
    $(".nav-items").css("color", "white");
    $(".spans").css("visibility", "hidden");
    $(".spans").eq(0).css({
      color: "#000000",
      visibility: "visible",
    });

    /////////
    $(window).scroll(function () {
      var position = $(this).scrollTop;

      if ($(document).scrollTop() > 100) {
        $(".top-btn").fadeIn("slow");
      } else {
        $(".top-btn").fadeOut("slow");
      }
      if ($(document).scrollTop() < window.innerHeight * 0.6) {
        $(".spans").css("visibility", "hidden");
        $(".spans").eq(0).css({
          color: "#000000",
          visibility: "visible",
        });
        $(".nav-items").removeClass("active-white-item");
        // $('.nav-items').eq(2).removeClass("active-white-item");
        $(".nav-items").eq(0).addClass("active-white-item");
      }

      var position = window.pageYOffset;

      $(".section").each(function () {
        var target = $(this).offset().top;
        let id = "";
        id = $(this).attr("id");

        var navLinks = $("li a");

        if (position >= target - window.innerHeight * 0.5) {
          if (id === "home") {
            id = "home";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(0).css({
              color: "black",
              visibility: "visible",
            });
          } else if (id === "about") {
            id = "about";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-black-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(1).css({
              color: "#FFCB05",
              visibility: "visible",
            });
          } else if (id === "services") {
            id = "services";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(2).css({
              color: "black",
              visibility: "visible",
            });
          } else if (id === "portfolio") {
            id = "portfolio";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(3).css({
              color: "black",
              visibility: "visible",
            });
          } else if (id === "technologies") {
            id = "technologies";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-black-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(4).css({
              color: "#FFCB05",
              visibility: "visible",
            });
          } else if (id === "products") {
            id = "products";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(5).css({
              color: "black",
              visibility: "visible",
            });
          } else if (id === "partners") {
            id = "partners";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(6).css({
              color: "black",
              visibility: "visible",
            });
          } else if (id === "bcd-life") {
            id = "bcd-life";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(7).css({
              color: "#000",
              visibility: "visible",
            });
          } else if (id === "contact_us") {
            id = "contact_us";
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-white-item");
            $(".spans").css("visibility", "hidden");
            $(".spans").eq(8).css({
              color: "#000",
              visibility: "visible",
            });
          } else {
            navLinks.removeClass("active-white-item");
            navLinks.removeClass("active-black-item");
            $('li a[href="#' + id + '"]').addClass("active-black-item");
          }
        }
      });
    });

    $(window).scroll(
      _.throttle(function () {
        if ($(".spans").eq(0).css("visibility") === "visible") {
          window.history.pushState(null, null, "#home");
          return show;
        }
        if ($(".spans").eq(1).css("visibility") === "visible") {
          window.history.pushState(null, null, "#about");
          return show;
        }
        if ($(".spans").eq(2).css("visibility") === "visible") {
          window.history.pushState(null, null, "#services");
          return show;
        }
        if ($(".spans").eq(3).css("visibility") === "visible") {
          window.history.pushState(null, null, "#portfolio");
          return show;
        }
        if ($(".spans").eq(4).css("visibility") === "visible") {
          window.history.pushState(null, null, "#technologies");
          return show;
        }
        if ($(".spans").eq(5).css("visibility") === "visible") {
          window.history.pushState(null, null, "#products");
          return show;
        }
        if ($(".spans").eq(6).css("visibility") === "visible") {
          window.history.pushState(null, null, "#partners");
          return show;
        }
        if ($(".spans").eq(7).css("visibility") === "visible") {
          window.history.pushState(null, null, "#life_at_bcd");
          return show;
        }
        if ($(".spans").eq(8).css("visibility") === "visible") {
          window.history.pushState(null, null, "#contact_us");
          return show;
        }
      }, 500)
    );

    // ($('#yourElement').css('position') == 'absolute')
  }
   
  const style = {
    textDecoration:"none"
  }
  useEffect(() => {
    mounted();
  }, []);

  return (
    <div>
      <div className="nav-component">
        <div className="top-content padd-x-y" style={{margin:"0 auto",width:"97.2%" }}>
          <img className="logo" style={{marginLeft:"1px"}} src={bcdLogoImg} />
          <div className="nav-menu">
            <button
              className="bcd-btn hire invisible-hire-btn1"
              id="hire"
              onClick={() => down()}
            >
              Hire Us
            </button>
            <img onClick={() => click()} className="menu-svg" src={menuIcon} />
            <ul style={{paddingLeft:"0rem"}} className="menu">
              <li>
                <a style={style}
                  className="menu-items"
                  href="#home"
                  onClick={() => moveToPage("#about")}
                >
                  Home
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#about"
                  onClick={() => moveToPage("#about")}
                >
                  About us
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#services"
                  onClick={() => moveToPage("#services")}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#portfolio"
                  onClick={() => moveToPage("#portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#technologies"
                  onClick={() => moveToPage("#technologies")}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#partners"
                  onClick={() => moveToPage("#partners")}
                >
                  Partners
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#our_team"
                  onClick={() => moveToPage("#our_team")}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#bcd-life"
                  onClick={() => moveToPage("#bcd-life")}
                >
                  Life At BCD
                </a>
              </li>
              <li>
                <a style={style}
                  className="menu-items"
                  href="#contact_us"
                  onClick={() => moveToPage("#contact_us")}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
      <button className="top-btn" onClick={() => Up()}>
        <HiOutlineChevronDoubleUp style={{fontSize:"1.2rem"}} />
        <p style={{marginTop:"-2px"}}>Top</p>
      </button>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Products />
      <Partners />
      {/* <Team/> */}
      <LifeAtBcd />
      <Contact />
    </div>
  );
};

export default IndexPage;
