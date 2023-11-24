import React, { useEffect, useState } from 'react';
import './style.css';

const Banner = () => {
    const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setminutes] = useState('');

    useEffect(() => {
      const now = new Date().getTime();

      const timeRemaining = countDownDate - now;


    setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setminutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)))

    },[])

  return (
    <div className="countdown-section">
      <h1 className="title">Save the date</h1>
      <div id="countdown" className="countdown d-flex">
        <p className='text-center'> {days}&nbsp;:&nbsp;  <br/> <span className='span-width'>Days</span> </p>
        <p> {hours}&nbsp;:&nbsp; <br/> <span>Hours</span> </p>
        <p className='text-center'> {minutes} <br/> <span>Minutes</span> </p>
      </div>

      <div className='d-flex yt-center' >
        <img src="Frameyt.png" alt="youtube" /> 
        <p className='youtube'>&nbsp;WATCH NOW ON YOUTUBE</p>
      </div>
      <h2 className='subtitle'>Thinktech 6th edition</h2>

      <div className='loc-time'>

        <div className='d-flex loc-center'>
            <img src="MapPinLine.png" alt="map" /> 
            <p className='location'>Location: Cosenza</p>
        </div>
        <div className='d-flex time-center'>
            <img src="Clock.png" alt="time" width="23px" height="23px" style={{color: "#FFFF"}} /> 
            <p className='time'>When: 27th October 2022</p>
        </div>
      </div>

      <button className='but-reg'>Register</button>  

    </div>
  );
};

export default Banner;
