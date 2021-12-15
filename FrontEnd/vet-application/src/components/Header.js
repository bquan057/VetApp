import React, {useState} from "react";
import logo from "../res/ucvm-logo.jpeg"
import PasswordModal from "./ChangePasswordModal";
import Modal from "./EditAccount";
import { useNavigate } from "react-router";

const Header = ({changePassword, editAccount}) => {

    let navigate = useNavigate();

    function loginPage() {
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('id')
        navigate('/');
    };
     
    return(
        <div className="columns is-vcentered">
            <div className="column">
            <nav class="navbar is-primary-dark" role="navigation" aria-label="dropdown navigation">
                <div className = "column is-four-fifths">
                <a href="/home">
                    <img src={logo} alt="Example1" width="300" height="130"/>
                </a>
                </div>
                
                 {/* user */}
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-primary-dark">
                    <span class="icon is-small mr-1">
                        <i class="far fa-user-circle has-text-primary-dark fas fa-2x" aria-hidden="true"></i>
                    </span>
                    </a>
                    <div class="navbar-dropdown" >
                    <a class="navbar-item" onClick = {editAccount}>
                        Edit Account
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item"  onClick = {changePassword}>
                        Change Password
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item" onClick = {loginPage}>
                        Log out
                    </a>
                    </div>
                </div>

            </nav>
            </div>
    </div>
    )    
};

export default Header;