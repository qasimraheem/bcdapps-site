import React, { useState } from "react";
import "./life-at-bcd.scss";
import bcdLifePic0 from "../../images/bcdlife1.png";
import bcdLifePic1 from "../../images/bcdlife2.png";
import bcdLifePic2 from "../../images/bcdlife3.png";
import bcdLifePic3 from "../../images/bcdlife4.png";
import bcdLifePic4 from "../../images/bcdlife5.png";
import bcdLifePic5 from "../../images/bcdlife6.png";
import bcdLifePic6 from "../../images/bcdlife7.png";
import bcdLifePic7 from "../../images/bcdlife8.png";
import bcdLifePic8 from "../../images/bcdlife9.png";
import bcdLifePic9 from "../../images/bcdlife10.png";
import bcdLifePic10 from "../../images/bcdlife11.png";
import bcdLifePic11 from "../../images/bcdlife12.png";
import Slideshow from "./image-slider/slider";

const LifeAtBcd = () => {
  const [index, setIndex] = useState(0);
  const [showSlider, setShowSlider] = useState("none");
  const [img, setImg] = useState("");

  const [src, setSrc] = useState("");

  const images = [
    {
      id: 0,
      image: "bcdlife1.png",
      className: "full-size-container",
    },
    {
      id: 1,
      image: "bcdlife2.png",
      className: "full-size-container",
    },
    {
      id: 2,
      image: "bcdlife3.png",
      className: "full-size-container",
    },
    {
      id: 3,
      image: "bcdlife4.png",
      className: "small-size-container",
    },
    {
      id: 4,
      image: "bcdlife5.png",
      className: "small-size-container",
    },
    {
      id: 5,
      image: "bcdlife6.png",
      className: "small-size-container",
    },
    {
      id: 6,
      image: "bcdlife7.png",
      className: "full-size-container",
    },
    {
      id: 7,
      image: "bcdlife8.png",
      className: "full-size-container",
    },
    {
      id: 8,
      image: "bcdlife9.png",
      className: "full-size-container",
    },
    {
      id: 9,
      image: "bcdlife10.png",
      className: "full-size-container",
    },
    {
      id: 10,
      image: "bcdlife11.png",
      className: "full-size-container",
    },
    {
      id: 11,
      image: "bcdlife12.png",
      className: "small-size-container",
    },
  ];

  const Slider = [
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife1.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife2.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife3.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife4.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife5.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife6.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife7.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife8.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife9.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife10.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife11.png",
    "https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife12.png",
  ];

  function zoomImage(num) {
    setIndex(num);
    setSrc(Slider[num]);
    setShowSlider("block");
  }
  function prev() {
    if (index > 0) {
      setIndex(index - 1);
      return setImg(Slider[index - 1]);
    } else {
      setImg("");
      setShowSlider('none')
    }
  }
  function next() {
    if (index > 0 && index < Slider.length - 1) {
        setIndex(index + 1);
        setImg(Slider[index + 1]);
      
    } else {
      setImg("")
      setShowSlider("none");
    }
  }

  function closeSlider() {
    setShowSlider("none");
    setImg("");
  }

  return (
    <section
      id="bcd-life"
      className="flex-display bcd-life yellow-bg section postion"
    >
      <div className="bcd-life-left-container">
        <h1 className="white-circle main-heading">Life at Bcd</h1>
        <p>
          Professional developers, designers and marketers working together to
          provide finest blockchain solutions and marketing services at
          economical prices.
        </p>
      </div>
      <div className="bcd-life-right-container">
        <figure>
          {/* { */}
          {/* // images.map((item) => (<a className={`${item.className}bcdlife-img${parseInt(item.id + 1 )}-container-a`}  key={item.id} onClick="index = i"> */}
          {/* <img /*:src="require('../../assets/images/'+pic.image)"*/}
          {/* </a> */}
          {/* // ))} */}
          <a className="bcdlife-img1-container-a full-size-container">
            <img src={bcdLifePic0} onClick={() => zoomImage(0)} />
          </a>
          <a className="bcdlife-img2-container-a full-size-container">
            <img src={bcdLifePic1} onClick={() => zoomImage(1)} />
          </a>
          <a className="bcdlife-img3-container-a full-size-container">
            <img src={bcdLifePic2} onClick={() => zoomImage(2)} />
          </a>
          <a className="bcdlife-img4-container-a small-size-container">
            <img src={bcdLifePic3} onClick={() => zoomImage(3)} />
          </a>
          <a className="bcdlife-img5-container-a small-size-container">
            <img src={bcdLifePic4} onClick={() => zoomImage(4)} />
          </a>
          <a className="bcdlife-img6-container-a small-size-container">
            <img src={bcdLifePic5} onClick={() => zoomImage(5)} />
          </a>
          <a className="bcdlife-img7-container-a full-size-container">
            <img src={bcdLifePic6} onClick={() => zoomImage(6)} />
          </a>
          <a className="bcdlife-img8-container-a full-size-container">
            <img src={bcdLifePic7} onClick={() => zoomImage(7)} />
          </a>
          <a className="bcdlife-img9-container-a full-size-container">
            <img src={bcdLifePic8} onClick={() => zoomImage(8)} />
          </a>
          <a className="bcdlife-img10-container-a full-size-container">
            <img src={bcdLifePic9} onClick={() => zoomImage(9)} />
          </a>
          <a className="bcdlife-img11-container-a full-size-container">
            <img src={bcdLifePic10} onClick={() => zoomImage(10)} />
          </a>
          <a className="bcdlife-img12-container-a small-size-container">
            <img src={bcdLifePic11} onClick={() => zoomImage(11)} />
          </a>
        </figure>
      </div>
      <div style={{ display: showSlider }}>
        <div className="slideshow">
          <div className="cover-page"></div>
          <Slideshow
            closeSlider={closeSlider}
            src={src}
            next={next}
            prev={prev}
            img={img}
            index={index}
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtBcd;
