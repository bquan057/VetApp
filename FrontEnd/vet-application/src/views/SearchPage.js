import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import EditModal from "../components/EditModal";
import ChangePasswordModal from "../components/ChangePasswordModal";
import TreatmentModal from "../components/TreatmentModal";

const SearchPage= () => {
    
    const treatmentModal = () => {
        document.getElementById('TreatmentModal').classList.add('is-active');
    }

    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditModal').classList.add('is-active');
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditModal/>
            <TreatmentModal/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                <SearchBar/>
                <SearchSelectorAnimal/>    
                <button onClick = {treatmentModal}>Treatment Modal</button>
            </div>
        
        </div>
    ) 
};

export default SearchPage;