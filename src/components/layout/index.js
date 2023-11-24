import React from "react";
import Header from "../header/header"
import "./layout.css";
import Banner from "../banner/index"
import Scrollmenu from "../scrollmenu";


const Layout =()=>{

    return (
        <div style={{ backgroundImage: `url("/backgroundimg.jpg")`}} className="home-bg">
            <Header />
            <Banner />
            <Scrollmenu />
        </div>
        
    )
}
export default Layout;