import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import AnimalSearchCard from "../components/AnimalSearchCard";

const SearchPage= () => {

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <SearchBar/>
                <SearchSelectorAnimal/>
                <section className="section">
                    <div className="container">
                        <ul >
                            <li className="pb-3">
                                <AnimalSearchCard/>
                            </li>
                            <li >
                                <AnimalSearchCard/>
                            </li>
                        </ul>
                    </div>

                </section>

            </div>
        </div>
    ) 
};

export default SearchPage;