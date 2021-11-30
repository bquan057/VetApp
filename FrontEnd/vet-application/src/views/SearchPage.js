import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";


const SearchPage= () => {

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <SearchBar/>
                <SearchSelectorAnimal/>    
            </div>
        </div>
    ) 
};

export default SearchPage;