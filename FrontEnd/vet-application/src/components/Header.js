import React, {useState} from "react";
import logo from "../res/ucvm-logo.jpeg"
import PasswordModal from "./ChangePasswordModal";
import Modal from "./EditModal";

const Header = () => {

    // const [menuIsShown, setMenuIsShown] = useState(false);
    

    // // const menu = useRef();
    // const hideMenu = () => {
    //   setMenuIsShown(false);
    // };
  
    // const toggleDropDown = () =>{
    //     setMenuIsShown(true);
    // }

    const [isModal, setismodal] = useState(false)

    const handler = () => {
        setismodal(true);
    }

    const handlerClose =() =>{
        setismodal(false);
    }

    const [isModal3, setisModal3] = useState(false)

    const handlePassword =()=>{
        setisModal3(true);
    }

    const handlePasswordClose = () =>{
        setisModal3(false);
    }
     
    return(
        <div className="columns">
            <div className="column">
            {isModal && <Modal handleClose = {handlerClose}/>}
            {isModal3 && <PasswordModal handleClose = {handlePasswordClose}/>}

            { (!isModal3 && !isModal) &&
            <nav class="navbar is-primary-dark" role="navigation" aria-label="dropdown navigation">
                <div className = "column is-four-fifths">
                <img src={logo} alt="Example1" width="300" height="130"/>
                </div>
                
                 {/* user */}
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-primary-dark">
                    <span class="icon is-small mr-1">
                        <i class="far fa-user-circle has-text-primary-dark fas fa-2x" aria-hidden="true"></i>
                    </span>
                    </a>
                    <div class="navbar-dropdown" >
                    <a class="navbar-item" onClick = {handler}>
                        Edit Account
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item"  onClick = {handlePassword}>
                        Change Password
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                        Log out
                    </a>
                    </div>
                </div>
                {/* bell */}
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-primary-dark">
                    <span class="icon is-small mr-1">
                        <i class="far fa-bell has-text-primary-dark fas fa-2x" aria-hidden="true"></i>
                    </span>
                    </a>
                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        notification 1
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                        notification 2
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                        notification 3
                    </a>
                    </div>
                </div>
               
            </nav>
                }
            </div>

    
    </div>
    )    
};

export default Header;