import React, { useState } from 'react';
import "./events.css"
import Thinktech from './thinktech/thinktech';
import Hackathon from './hackathon/hackathon';
import Meetups from './meetups/meetups';

const Events = () => {
  const [selectedTab, setSelectedTab] = useState('Thinktech');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (

  <div >
    
    <div className="events-container">
      
      <div className="tabs-container">
      <h1 className='events-title'>Events</h1>
        <div
          className={`tab ${selectedTab === 'Thinktech' ? 'active' : ''}`}
          onClick={() => handleTabClick('Thinktech')}
        >
          <p className='tab-title'>Thinktech</p>
        </div>
        <div
          className={`tab ${selectedTab === 'Hackathon' ? 'active' : ''}`}
          onClick={() => handleTabClick('Hackathon')}
        >
          <p className='tab-title'>Hackathon</p>
        </div>

        <div
          className={`tab ${selectedTab === 'Meetups' ? 'active' : ''}`}
          onClick={() => handleTabClick('Meetups')}
        >
          <p className='tab-title'>Meetups</p>
        </div>
    
      </div>

      <div className="content-container">
        {selectedTab === 'Thinktech' && <Thinktech />}
        {selectedTab === 'Hackathon' && <Hackathon />}
        {selectedTab === 'Meetups' && <Meetups />}
      </div>
    </div>
  </div> 
  );
};

export default Events;
