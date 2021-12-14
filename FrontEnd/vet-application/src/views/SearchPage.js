import React, {useState} from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import AnimalSearchCard from "../components/AnimalSearchCard";
import ChangePasswordModal from "../components/ChangePasswordModal";
import TreatmentModal from "../components/TreatmentModal";
import EditAccount from "../components/EditAccount";

import axios from "axios";

const SearchPage= () => {
    
    const treatmentModal = () => {
        document.getElementById('TreatmentModal').classList.add('is-active');
    }

    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditAccount').classList.add('is-active');
    }

    
    const [animals, setAnimals] = useState([]); 
    
    const addComponents = () => {
        var apiEndpoint=""

        setAnimals([])

        if (document.getElementById("search_by_id_manage_animals").checked) {
            apiEndpoint = "http://localhost:8080/animal/search?animalid=" + document.getElementById("searchbar_manage_animals").value
        }
        else if (document.getElementById("search_by_name_manage_animals").checked) {
            apiEndpoint = "http://localhost:8080/animal/search?animalname=" + document.getElementById("searchbar_manage_animals").value
        }
        else if (document.getElementById("search_by_species_manage_animals").checked) {
            apiEndpoint = "http://localhost:8080/animal/search?species=" + document.getElementById("searchbar_manage_animals").value
        }
        else {
            apiEndpoint = "http://localhost:8080/animal"
        }
  
        axios.get(apiEndpoint)
            .then((res) => {
                setAnimals(res.data)
            })
            .catch(()=>{
                console.log("ERROR")
            })
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditAccount/>
            <TreatmentModal/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                <SearchBar addComponents = {addComponents}/>
                <SearchSelectorAnimal/>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        {
                            animals.map((item) => (<AnimalSearchCard animal={item}/>))
                        }
                    </div>
                </div>    
            </div>
        </div>
    ) 
};

export default SearchPage;