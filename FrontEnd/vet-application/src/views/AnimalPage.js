import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import TreatmentCard from "../components/TreatmentCard";
import { useParams } from "react-router";


const AnimalPage = () => {
    const {id} = useParams();
    // TODO MAKE API CALL HERE TO GET INFORMATION OF ANIMAL USING ID

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/>
                <AnimalCard/>
                <TreatmentCard id={id}/>
            </div>
        </div>
    )
};

export default AnimalPage;