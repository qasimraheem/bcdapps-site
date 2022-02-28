import React, { useEffect, useState } from "react";
import "./scss/viewportfolio.scss";
import _ from "lodash";
import { navigate } from "gatsby";
import PortfolioNav from "../components/portfolioNav/portfolioNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
// import PortfolioNav from "../components/portfolioNav/portfolioNav";
import ganderTxt from "../images/gander-text.png";
import whiteLogo from "../images/white-logo.png";
import ganderImg from "../images/gander.png";
import footerLogo from "../images/footer-logo.0c1aa2c.png";
import dwsLogo from "../images/Dws-logo.svg";
import tokenLabLogo from "../images/tokenlablogo-white.png";
import cliIbmLogo from "../images/cliiimb-logo.svg";
import lunaLogo from "../images/luna.png";
import syncFabLogo from "../images/syncfabLogo.png";
import nixCoinLogo from "../images/NixcoinLogo.png";
import arawTokenLogo from "../images/arawtokenLogo.png";
import expexLogo from "../images/expex-logo.png";
// import ganderTxt from "../images/gander-text.png";
// import ganderTxt from "../images/gander-text.png";
// import cliImbImg from "../images/Cliiimb-img.jpg";
// import DWSImg from "../images/DWS.png";
// import tokenLabImg from "../images/Tokenlab1.png";
// import googlePlayImg from "../images/google-play-store-ic.png";

const ViewPortfolio = () => {
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  // index: 0,
  // gander2: false,
  // selected: '',
  // ExpanseLuna1: document.getElementById('ExpanseLuna1'),

  // import {
  //   Carousel,
  //   Slide
  // } from 'vue-carousel';

  const projects = [
    {
      name: "Gander",
      bold: "The Block Explorer for the Expanse Blockchain.",
      link: "https://gander.tech/",
      image: ganderTxt,
      bullets: [],
      foo: ganderTxt,
      description:
        "Gander is the Block Explorer for the Expanse Blockchain. A Block Explorer is basically a search engine that allows users to easily lookup, confirm and validate transactions that have taken place on the Expanse Blockchain.<br><br>",
      // images: ['tokenlab-final.png','Gander-img.jpg', 'gander2.png', 'gander3.png', 'gander4.png', 'gander5.png']
      images: ["g1.png", "g2.png", "g3.png", "g4.png"],
      hasApp: false,
    },
    {
      name: "Tokenlab",
      bold: "A laboratory for creating tokens",
      link: "https://www.tokenlab.io/",
      image: tokenLabLogo,
      bullets: [],
      foo: { footerLogo },
      description:
        " Tokenlab is just what it sounds like-a laboratory for creating tokens for crowd sales, tech projects-anything you can imagine.<br><br> It is also a super easy way for people to launch ERC 20 tokens on the Expanse.Tech™ platform with time-locked, integrated ICO contracts.<br><br> ",
      images: ["tokenlab-final.png", "t1.png", "t5.png", "t4.png"],
      hasApp: false,
    },
    {
      name: "Cliiimb",
      bold: "Impacting Young People to Be the Best Version of Themselves",
      link: "https://cliiimb.com/",
      image: cliIbmLogo,
      bullets: [],
      description:
        "Cliiimb is a next generation communication tool for mobile devices. It was created so that local professionals can collectively work together to connect and engage our young people on relevant issues that affect them. <br><br>",
      images: ["C1.png", "C2.png", "C3.png", "C4.png"],
      hasApp: true,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=io.cliiimb.app",
    },
    {
      name: "Luna Wallet",
      bold: "The next generation of the Expanse Luna Wallet",
      link: "https://github.com/expanse-org/luna-wallet",
      image: lunaLogo,
      bullets: [
        "- Generate a wallet",
        "- Import the wallet via private key /JSON Key Store File.",
        "- Generate and import BIP39 mnemonic codes to create the HD Wallets",
      ],
      description:
        "The next generation of the Expanse Luna Wallet provides the following features.",
      images: ["L1.png", "l2.png", "l3.png", "Lunawallet-small-img.jpg"],
      hasApp: false,
    },
    {
      name: "DWS",
      bold: "A Professional platform for Pilots and Customers",
      link: "https://droneworkforcesolutions.com/",
      image: dwsLogo,
      bullets: [],
      foo: { dwsLogo },
      description:
        "Whether you are a drone pilot or you need a drone pilot for a project, DWS offers the resources you need to secure what you need from this industry.<br><br> It is developed in order to connect the right people with the right skills to the jobs that need them. <br><br>",
      images: [
        "D1.png",
        "D2.png",
        "D3.png",
        "D6.png",
        "D5.png",
        "DWS-final.png",
      ],
      hasApp: false,
    },
    {
      name: "Syncfab",
      bold: "Manufacture Easily & Securely on Blockchain",
      link: "https://syncfab.com/",
      image: syncFabLogo,
      bullets: [],
      foo: { dwsLogo },
      description:
        "Available capacity, transparent order tracking, and purchase order management secured by blockchain",
      images: ["S2.png", "S3.png", "S4.png", "S5.png", "S6.png"],
      hasApp: false,
    },
    {
      name: "Nix Coin",
      bold: "The world's first read smartphone mining game!",
      link: "https://www.nixblock.io/",
      image: nixCoinLogo,
      bullets: [],
      foo: { dwsLogo },
      description:
        "Coin Monster is a fun, thrilling and also a profitable smartphone mining game and expected in over 180 countries.<br><br>",
      images: ["N1.png", "N2.png", "N3.png", "N4.png"],
      hasApp: false,
    },
    {
      name: "Arawtoken",
      bold: "The Decentralized Payment for E-Commerce Ecosystem.",
      link: "https://arawtoken.io/",
      image: arawTokenLogo,
      bullets: [],
      foo: { dwsLogo },
      description:
        "An end-to-end solutions for E-Commerce Marketplace, Touch & Pay Cryptocurrency Card, Online Cryptocurrency Payment, and Unified Reward System powered by the Ethereum Blockchain",
      images: ["Aw1.png", "Aw2.png", "Aw3.png", "Aw4.png"],
      hasApp: false,
    },
    {
      name: "EXPEX",
      bold: "An expanse wallet and decentralized exchange .",
      link: "http://beta.expex.io/",
      image: expexLogo,
      bullets: [],
      foo: { dwsLogo },
      description:
        "EXPEX allows user to generate the wallet and access the already existing one through watch only, Metamask, Trezor, Ledger Wallet, Key store, Mnemonics and Private Key. <br><br> Moreover, we can send, receive and trade with the four main currencies EXP, LAB, PEX and WEXP.",
      images: ["expex1.png", "expex2.png", "expex3.png"],
      hasApp: false,
    },
  ];

  function mounte() {
    // var that = this;
    setSelected([projects[0]]);
    setLoading(false);
    console.log("hereeeeee");

    //       window.onscroll = function(e) {
    //         console.log("FDSDF old",this.oldScroll);
    //         console.log("FDSDF y",this.scrollY);

    //   // print "false" if direction is down and "true" if up
    //   console.log(this.oldScroll > this.scrollY);
    //   this.oldScroll = this.scrollY;
    // }
    // $(window).scroll(_.throttle(function() {

    //   $('.inner-navbar a:first').removeClass('active-white-item')
    //   that.selected = that.projects[that.index++];
    //   //  console.log("jnknn",that.index);
    //   if (that.index == 8) {
    //     that.index = 0;
    //   }

    //   //  console.log(that.projects[that.a++]);
    //   //  var position = window.pageYOffset;
    //   // var target = $('#portfolio').offset().top;
    //   // if

    //   // console.log("target" , target);
    //   // console.log("position" ,position);
    //   // if( position == 1 ){
    //   //   position = 0;
    //   //    $('html, body').animate({
    //   //   scrollTop: $('#portfolio').offset().top
    //   // }, 'slow');
    //   // }
    //   //  console.log("again target" , target);
    //   // console.log("again position" ,position);

    // }, 500));
    // var position = $(window).scrollTop();
    //   console.log(scroll);

    // should start at 0

    // $(window).scroll(function() {
    //   var scroll = $(window).scrollTop();
    //   console.log(scroll);
    //   $('.inner-navbar a:first').removeClass('active-white-item');

    //   if (scroll > position) {
    //     console.log("hereeee")
    //     $('.inner-navbar a:first').removeClass('active-white-item')

    //     that.selected = that.projects[that.index++];
    //     // if (that.index == 8) {
    //     //   that.index += 0;
    //     // }

    //   } else {
    //     // if (that.index == 0) {
    //     //   that.index -= 0;
    //     // }
    //     that.selected = that.projects[that.index--];
    //     // position = scroll;
    //   }
    //   console.log("Scerooll", scroll, position)
    //   // position = scroll;
    // });
  }

  function moveToHome() {
    navigate("/");
  }

  function selectProject(val) {
    return setSelected([val]);
  }

  useEffect(() => {
    mounte();
  }, []);
  return (
    loading === false && (
      <section className="portfolio-container" id="portfolio">
        <div className="nav-component new-class-bar">
          <div className="top-content">
            <img src={whiteLogo} className="logo folo-logo" />
            <button className="home-btn btn-folo" onClick={() => moveToHome()}>
              Home
            </button>
          </div>
        </div>
        <PortfolioNav
          projects={projects}
          select={selectProject}
          selectedProject={selected}
        />
        <div>
          <div className="folio-col">
            <div className="portfolio-frst-col">
              <svg
                className="mouse-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="55"
                viewBox="0 0 33 55"
              >
                <path
                  id="Rounded_Rectangle_4"
                  data-name="Rounded Rectangle 4"
                  className="cls-1"
                  d="M16.5,55A16.5,16.5,0,0,1,0,38.5v-22a16.5,16.5,0,1,1,33,0v22A16.5,16.5,0,0,1,16.5,55ZM31,17.5a14.5,14.5,0,0,0-29,0v20a14.5,14.5,0,0,0,29,0v-20ZM16.5,22A2.5,2.5,0,0,1,14,19.5v-6a2.5,2.5,0,0,1,5,0v6A2.5,2.5,0,0,1,16.5,22Z"
                />
              </svg>
              <figure className="animate-angle">
                <img
                  src={ganderImg}
                  className="gander-img animate-image animation-image1"
                />
                {/* <img src={cliImbImg} className="gander-img animate-image animation-image2"/> */}
                {/* <img src={DWSImg} className="gander-img animate-image animation-image3"/> */}
                {/* <img src={tokenLabImg} className="gander-img animate-image animation-image4"/> */}
                {/* {selected?.images.map((img,index) => <img key={index} src={img} className={index ? `nimation-image${index}`: "gander-img animate-image"} />)} */}
                <Carousel>
                  {selected?.map((item) =>
                    item.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="gander-img"
                          src={`https://s3.ap-south-1.amazonaws.com/blockchaindapps/${img}`}
                          alt={img}
                        />
                      </Carousel.Item>
                    ))
                  )}
                </Carousel>
              </figure>
            </div>
            <div className="second-column">
              {selected?.map((project, index) => (
                <div className="white-border-one" key={index}>
                  <figure className="img-1">
                    <img className="img-1" src={project.image} />
                  </figure>
                  <div className="text-1">
                    <h3 id="gander2">{project.bold}</h3>
                    <br />
                    <p>{project.description}</p>
                    <ul className="text-list">
                      {project?.bullets.map((bullet, index) => (
                        <li key={index}>
                          <span className="dot-list"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className={project.hasApp && "app-details"}>
                      <a href={project.playStoreLink} target="_blank">
                        {/* <img src={googlePlayImsg} alt="play store"/></a> */}
                      </a>
                    </div>
                  </div>
                  <div className="outer-border-svg">
                    <div className="ring-svg">
                      <a
                        className="visit-gander"
                        href={project.link}
                        target="_blank"
                      >
                        Visit {project.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ViewPortfolio;
