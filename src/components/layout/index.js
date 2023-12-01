import React from "react";
import Header from "../header/header"
import "./layout.css";
import Banner from "../banner/index"
import Scrollmenu from "../scrollmenu";
import About from "../about";
import Events from "../events";
import Partners from "../partners";
import Footer from "../footer";


const Layout =()=>{

    return (
        <>
        <div style={{ backgroundImage: `url("/backgroundimg.jpg")`}} className="home-bg">
            <Header />
            <Banner />
            <Scrollmenu />
        </div>
        <About />
        <Events />
        <Partners />
        <Footer />
        </>
    )
}
export default Layout;