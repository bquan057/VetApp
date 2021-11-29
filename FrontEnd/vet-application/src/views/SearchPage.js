import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";


const SearchPage= () => {

    return(
        <section class="hero has-background-success-light is-fullheight">
            <div className="columns">
                <SideBar/>
                <div className="column">
                    <Header/>
                    <div className="container">
                        <SearchBar/>    
                    </div>         
                </div>
            </div>
        </section>
    ) 
};

export default SearchPage;