import React,{ useEffect, useState } from 'react';
import "./slide.css";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";




const Slideshow = ({closeSlider, src, next, prev,img, index}) => {
    
    const slideImages = [
        'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife1.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife2.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife3.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife4.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife5.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife6.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife7.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife8.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife9.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife10.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife11.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife12.png'
    ];
    
    return (
    
      <div className="slide-container">
          <button className='btn-close' onClick={() => closeSlider()}>x</button>
          <button className='btn-prev' onClick={() => prev()}><HiChevronLeft/></button>
          <div className='zoomed-img'>
         
            <div className="each-slide">
              <img src={img !== "" ? img : src} className='current-img' alt='selected-img'/>
              </div>

          </div>
          <button className='btn-next' onClick={() => next()}><HiChevronRight/></button>
          {/* <div className="rest-gallery">
              <div className='image-num'>2/2</div>
              <div className="all-images" >
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife1.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife2.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife3.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife4.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife5.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife6.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife7.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife8.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife9.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife10.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife11.png' alt='team-imgs' className='slide-gallery-img'/>
                  <img src='https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife12.png' alt='team-imgs' className='slide-gallery-img'/>
              </div>
          </div> */}
      </div>
    )
}


export default Slideshow;