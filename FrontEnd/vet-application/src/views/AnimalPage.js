import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import { useParams } from "react-router";


const AnimalPage = () => {
    const {id} = useParams();
    console.log(id)


    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <AnimalCard/>
            </div>
        </div>
    )
};

export default AnimalPage;