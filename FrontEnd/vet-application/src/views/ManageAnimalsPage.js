import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import NewAnimalButton from "../components/NewAnimalButton";
import SearchBarManageAnimals from "../components/SearchBarManageAnimals";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import ManageAnimalsCard from "../components/ManageAnimalsCard";

const ManageAnimalsPage = () => {

    const animalData = [
        {
            name: "1111",
            id: "1111",
            weight: "1111", 
            tattoo: "1111",
            cityTattoo: "1111",
            age: "1111",
            birthdate: "1111",
            breed: "1111",
            sex: "1111",
            coatColour: "1111",
        },
        {
            name: "2222",
            id: "2222",
            weight: "2222", 
            tattoo: "2222",
            cityTattoo: "2222",
            age: "2222",
            birthdate: "2222",
            breed: "2222",
            sex: "2222",
            coatColour: "2222",
        },
        {
            name: "3333",
            id: "3333",
            weight: "3333", 
            tattoo: "3333",
            cityTattoo: "3333",
            age: "3333",
            birthdate: "3333",
            breed: "3333",
            sex: "3333",
            coatColour: "3333",
        },
    ]

    const[components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(animalData)
    }

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <NewAnimalButton/>
                <SearchBarManageAnimals addComponent = {addComponent}/>
                <SearchSelectorAnimal/>  
                <div>
                    {components.map(item => <ManageAnimalsCard animal={item}/>)}
                </div>
            </div>
        </div>
    )
};

export default ManageAnimalsPage;