import React from 'react';
import "./thinktech.css"

const Thinktech = () => {
  return (
    <div className='posters'>
      <div className='poster-1'>
        <h2 className='thinktech-title1'>Thinktech 1st edition</h2>
        <p className='thinktech-subtitle'>For the first time, Landmark Communications and Technologies introduced a conference which focuses entirely on technology as the field of the future. </p>
        
        <div className='location1 d-flex'>
          <img src='Vector.png' alt='location'/>
          <p className='loc-arturbina'>ArTurbina</p>
        </div>

        <div className='date1 d-flex'>
          <img src='Group7.png' alt='date'/>
          <p className='date-arturbina'>5th Feb 2020</p>
        </div>

        <div className='seemore d-flex'>
          <p className='seemore-txt'>See more &emsp; about this edition</p>
          <img src='ArrowCircleRight.png' alt='next'/>
        </div>
        
      </div>
    </div>
  );
};

export default Thinktech;
