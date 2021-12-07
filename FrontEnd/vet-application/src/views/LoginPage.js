import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import "bulma/css/bulma.css";
import cat from "../res/sora.jpg"
import LoginHeader from "../components/LoginHeader";
import '../Customization/LoginCard.css'
import ForgotPassword from "../components/ForgotPassword";

const LoginPage = () => {

    const forgotPassword = () => {
        document.getElementById('ForgotPassword').classList.add('is-active');
    }

    return ( 
        <section class = "hero has-background-success-light is-fullheight">
            <div className = "is-centered">
                <LoginHeader/>
                <ForgotPassword/>
                <div className = "columns is-centered is-vcentered">
                <Login forgotPassword = {forgotPassword}/>
                <img src={cat} alt="Example1" width="300" height="130"/>
                </div>
            </div>
        </section>
     );
}
 
export default LoginPage;