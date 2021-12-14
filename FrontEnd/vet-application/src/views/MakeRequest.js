import React, {useState, useEffect} from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import "bulma/css/bulma.css";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import MakeRequestCard from "../components/MakeRequestCard";
import axios from 'axios';


const MakeRequest= () => {

    const[components, setComponents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/animal/search?availability=Available")
        .then((res) => {
            setComponents(res.data)
        }
    )
    }, []);

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <div>
                    {components.map(item => <MakeRequestCard animal={item}/>)}
                </div>
            </div>
        </div>
    ) 
};

export default MakeRequest;