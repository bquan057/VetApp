import React, {useState} from "react";
import logo from "../res/ucvm-logo.jpeg"

const Header = () => {

    const [menuIsShown, setMenuIsShown] = useState(false);
    

    // const menu = useRef();
    const hideMenu = () => {
      setMenuIsShown(false);
    };
  
    const toggleDropDown = () =>{
        setMenuIsShown(true);
    }

     
    return(
        <div className="columns">
            <div className="column">
                <img src={logo} alt="Example1" width="300" height="130"/>
            </div>
            <div className="column has-text-right">
            
            <div class="dropdown">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={toggleDropDown}>
                    {/* <span>Click me</span> */}
                    <span class="icon is-small">
                        <i class="far fa-user-circle has-text-primary-dark fas fa-2x" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                
                {menuIsShown && <div class="dropdown-menu" id="dropdown-menu3" role="menu" >
                    <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        Overview
                    </a>
                    <a href="#" class="dropdown-item">
                        Modifiers
                    </a>
                    <a href="#" class="dropdown-item">
                        Grid
                    </a>
                    <a href="#" class="dropdown-item">
                        Form
                    </a>
                    <a href="#" class="dropdown-item">
                        Elements
                    </a>
                    <a href="#" class="dropdown-item">
                        Components
                    </a>
                    <a href="#" class="dropdown-item">
                        Layout
                    </a>
                    <hr class="dropdown-divider"/>
                    <a href="#" class="dropdown-item">
                        More
                    </a>
                    </div>
                </div>}
            </div>
{/* 
            <span className="mt-3 icon-text">
                    <div className="icon is-large">
                        <i className="far fa-bell has-text-primary-dark fas fa-2x"></i>
                    </div>
                    <div className="mx-3 icon is-large">
                        <i className="far fa-user-circle has-text-primary-dark fas fa-2x"></i>
                    </div>
            </span> */}

            
            </div>
        </div>
    )    
};

export default Header;