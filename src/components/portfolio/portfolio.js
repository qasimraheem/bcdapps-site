import React,{ useState, useEffect } from "react";
import "./portfolio.scss";
import bcdLogo from "../../images/bcd-logo.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Portfolio = () => {
  const [ selectedPortfolio , setSelectedPortfolio ] = useState({});
  const  msg = 'Welcome to Your Vue.js App';
  const full = [{
    id: 0,
    sheet: 'Tokenlab-img.jpg',
    sheettxt: 'Tokenlab',
  },
  {
    id: 1,
    sheet: 'LunaWallet-img.jpg',
    sheettxt: 'Luna Wallet',
  },
  {
    id: 2,
    sheet: 'Cliiimb-img.jpg',
    sheettxt: 'Cliiimb',
  },
  { 
    id: 3,
    sheet: 'DWS-img.jpg',
    sheettxt: 'DWS',
  },
  {
    id: 4,
    sheet: 'Gander-img.jpg',
    sheettxt: 'Gander',
  }
];
// selectedPortfolio,
// isZeroIndex,
// isIndexOutOfRange
// }  


console.log("fullFirst :",full[0])

  function created() {
    setSelectedPortfolio(full[0])
  }

  console.log("selectedPortfoilo:",selectedPortfolio)
  function selectPortfolio(val) {
    setSelectedPortfolio(val);
  }
  
  function add() {
    setSelectedPortfolio(full[selectedPortfolio.id + 1])
  }
  
  function subtract() {
    setSelectedPortfolio(full[selectedPortfolio.id - 1])
  }

  function goToPorfolio() {
    this.$router.push({
      path: 'view-portfolio'
    })
  }
  
  useEffect(() => {
    created();

  },[])
 console.log("created::",selectedPortfolio.id)
    return (
  <section id="portfolio" className="portfolio flex-display white-bg">
    <div>
      <div className="portfolio-grid container">
        <h1 className="main-heading white-circle circle">Portfolio</h1>
        <div className="verticle-slider">
          <a>
            <span className={full.indexOf(selectedPortfolio) !== 0 ? "movement back" : 'disabledBtn'} onClick={() => subtract()}>
                   <IoIosArrowUp className="angle-up"/>
                  </span>
          </a>
          <div className="slide-show">
            <div className="bcd-graylogo-container">
              {selectedPortfolio !== {} ? <img className="slides" slot="image" src= {`https://s3.ap-south-1.amazonaws.com/blockchaindapps/${selectedPortfolio.sheet}`} alt=""/>
              : <img slot="preloader" className="preloader-img" src={bcdLogo} alt=""/>}
            </div>
  
          </div>
          <div className="border-black">
            <ul className="slide-dots">
              {}
              {full.map((item) => <li id={item.id} onClick={() => selectPortfolio(item)} >
                <a className={item.id === selectedPortfolio.id ?  'dot-active': "" }></a>
              </li>)}
  
            </ul>
            <div className="next-div">
              <h4>{selectedPortfolio.sheettxt}</h4>
              <a>
                <span className={full.indexOf(selectPortfolio) !== full.length-1 ? "movement forwardBtn" : 'disabledBtn'} onClick={() => add()} >
                           <IoIosArrowDown />
                         </span>
              </a>
            </div>
  
          </div>
          <a className="bcd-btn" onClick={() => goToPorfolio()}>View Full Portfolio</a>
        </div>
      </div>
    </div>
  </section>

    )
}

export default Portfolio;