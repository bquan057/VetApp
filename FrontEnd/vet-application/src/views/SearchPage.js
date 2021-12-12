import React, {useState} from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import AnimalSearchCard from "../components/AnimalSearchCard";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditModal from "../components/EditModal";
import TreatmentModal from "../components/TreatmentModal";
import animalData from "../data/animalData";

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

    // ** api call here ** //
    const [components, setComponents] = useState([]); 
    
    const addComponent = () => {
        setComponents(animalData)
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditModal/>
            <TreatmentModal/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                <SearchBar addComponent = {addComponent}/>
                <SearchSelectorAnimal/>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        {
                            components.map((item) => (<AnimalSearchCard animal={item}/>))
                        }
                    </div>
                </div>    
            </div>
        </div>
    ) 
};

export default SearchPage;