import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import EditAccount from "../components/EditAccount";
import ChangePasswordModal from "../components/ChangePasswordModal";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";


const HomePage= () => {

    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditAccount').classList.add('is-active');
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditAccount/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal} />
                <SearchBar/>
            </div>
        </div>
    ) 
};

export default HomePage;