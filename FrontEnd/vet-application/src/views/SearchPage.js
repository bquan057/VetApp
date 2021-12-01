import React, {useState} from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import AnimalSearchCard from "../components/AnimalSearchCard";
// import animalData from "../data/animalData";

const SearchPage= () => {

    let animalData = [
        {
            id:1,
            imgPath:"/sora.jpg",
            name: "Sora"
        },
        {
            id:2,
            imgPath:"/sora.jpg",
            name: "Sora2"
        },
        {
            id:2,
            imgPath:"/sora.jpg",
            name: "Sora2"
        },
        {
            id:2,
            imgPath:"/sora.jpg",
            name: "Sora2"
        },
        {
            id:2,
            imgPath:"/sora.jpg",
            name: "Sora2"
        }
    ];

    // ** api call here ** //
    const [components, setComponents] = useState([]); 
    
    const addComponent = () => {
        setComponents(animalData)
    }

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
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