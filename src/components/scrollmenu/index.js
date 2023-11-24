import "./scrollmenu.css";

import React from 'react'

const Scrollmenu =()=> {
  return (
    <div className="scroll-menu">
        <ul className="ul-menu">
            <li className="menu-content">
            Thinktech 1st edition
            </li>
            <li className="menu-content">
            Thinktech 2nd edition
            </li>
            <li className="menu-content">
            Thinktech 3rd edition
            </li>
            <li className="menu-content">
            Hackathon 1st edition
            </li>
        </ul>
    </div>
  )
}

export default Scrollmenu;
