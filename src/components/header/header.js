import React from "react";
import "./header.css"

const Header = () => {

    return (
        <div className="container header-menu">
            <div className="row row-menu">
                <div className="col-md-4">
                    <img className="logo-img" src="logo.png" alt="logo"/>
                </div>
                <div className="col-md-8">
                    <div className="menu-list">
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Partners
                            </li>
                            <li>
                                Events
                            </li>
                        </ul>
                        <div className="button-update">
                            <button>Stay Updated</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;