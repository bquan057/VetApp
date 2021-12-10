import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import NewAnimalButton from "../components/NewAnimalButton";
import SearchBarManageAnimals from "../components/SearchBarManageAnimals";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import ManageAnimalsCard from "../components/ManageAnimalsCard";
import AddAnimalModal from "../components/AddAnimalModal";
import EditAnimalModal from "../components/EditAnimalModal";
import DeleteAnimalModal from "../components/DeleteAnimalModal";
import RequestAnimalModal from "../components/RequestAnimalModal";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditModal from "../components/EditModal";
import animalData from "../data/animalData";
import axios from "axios";

const ManageAnimalsPage = () => {

    const[animals, setAnimals] = useState([]);

    var addAnimals = () => {
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
            }
        )
    }

    const addAnimalModal = () => {
        document.getElementById('AddAnimalModal').classList.add('is-active');
    }

    const editAnimalModal = () => {
        document.getElementById('EditAnimalModal').classList.add('is-active');
    }

    const deleteAnimalModal = () => {
        document.getElementById('DeleteAnimalModal').classList.add('is-active');
    }

    const requestAnimalModal = () => {
        document.getElementById('RequestAnimalModal').classList.add('is-active');
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
            <AddAnimalModal/>
            <ChangePasswordModal/>
            <EditModal/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                <NewAnimalButton addAnimalModal = {addAnimalModal}/>
                <SearchBarManageAnimals addAnimals = {addAnimals}/>
                <div>
                    {animals.map(item => 
                        <div>
                            <ManageAnimalsCard animal={item} editAnimalModal = {editAnimalModal} deleteAnimalModal = {deleteAnimalModal} requestAnimalModal = {requestAnimalModal}/>
                            <EditAnimalModal animal={item}/>
                            <DeleteAnimalModal animal={item}/>
                            <RequestAnimalModal animal={item}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default ManageAnimalsPage;