import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAninal from "../components/SearchSelectorAnimal";


const SearchPage= () => {

    return(
        <section class="hero has-background-success-light is-fullheight">
            <div className="columns">
                <SideBar/>
                <div className="column">
                    <Header/>
                    <SearchBar/>
                    <SearchSelectorAninal/>    
                </div>
            </div>
        </section>
    ) 
};

export default SearchPage;