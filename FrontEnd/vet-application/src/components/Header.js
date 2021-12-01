import React from "react";
import logo from "../res/ucvm-logo.jpeg"

const Header = () => {
     
    return(
        <div className="columns is-vcentered">
            <div className="column">
                <img src={logo} alt="Example1" width="300" height="130"/>
            </div>
            <div className="column has-text-right">
            <span className="mt-3 icon-text">
                    <div className="icon is-large ">
                        <i className="far fa-bell has-text-primary-dark fas fa-2x"></i>
                    </div>
                    <div className="mx-3 icon is-large fas fa-2x">
                        <i className="far fa-user-circle has-text-primary-dark"></i>
                    </div>
            </span>
            </div>
        </div>
 
       
    )    
};

export default Header;