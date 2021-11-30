import React from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import NewAnimalButton from "../components/NewAnimalButton";
import SearchBarManageAnimals from "../components/SearchBarManageAnimals";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import ManageAnimalsCard from "../components/ManageAnimalsCard";

const ManageAnimalsPage = () => {
    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <NewAnimalButton/>
                <SearchBarManageAnimals/>
                <SearchSelectorAnimal/>  
                <ManageAnimalsCard/>  
            </div>
        </div>
    )
};

export default ManageAnimalsPage;