import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import "bulma/css/bulma.css";
import cat from "../res/sora.jpg"
import LoginHeader from "../components/LoginHeader";

const LoginPage = () => {
    return ( 
        <section class = "hero has-background-success-light is-fullheight">

            <LoginHeader>100GB</LoginHeader>
            <div className = "columns is-centered is-vcentered">
              <Login/>
                <img src={cat} alt="Example1" width="300" height="130"/>
            </div>
            {/* <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                    <Login/>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Following</p>
                    <p class="title">123</p>
                    </div>
                </div>
            </nav> */}
        </section>
     );
}
 
export default LoginPage;