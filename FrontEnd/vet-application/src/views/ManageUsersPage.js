import React from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";


const ManageUsersPage = () => {
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

export default ManageUsersPage;