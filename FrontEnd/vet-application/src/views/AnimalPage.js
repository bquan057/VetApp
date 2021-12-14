import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import TreatmentCard from "../components/TreatmentCard";
import CommentCard from "../components/CommentCard";
import PictureCard from "../components/PictureCard";
import WeightHistoryModal from "../components/WeightHistoryModal";
import TreatmentHistoryModal from "../components/TreatmentHistoryModal";
import CreateCommentModal from "../components/CreateCommentModal";
import NewPictureModal from "../components/NewPictureModal";
import RequestTreatmentModal from "../components/RequestTreatmentModal";
import { useLocation } from "react-router-dom";
import PrescriptionCard from "../components/PrescriptionCard";
import NewPrescriptionModal from "../components/NewPrescriptionModal";
import StatusCard from "../components/StatusCard";
import UpdateStatusModal from "../components/UpdateStatusModal";


const AnimalPage = () => {
        
    const location = useLocation();
    const animal = location.state.animal

    const role = sessionStorage.getItem('role')
   
    const weightModal = () => {
        document.getElementById("WeightModal").classList.add('is-active')
    }

    const treatementHistory = () => {
        document.getElementById("TreatmentHistory").classList.add('is-active')
    }

    const newCommentModal = () => {
        document.getElementById("NewComment").classList.add('is-active')
    }

    const newPictureModal = () => {
        document.getElementById("NewPicture").classList.add('is-active')
    }

    const newTreatmentModal = () => {
        document.getElementById("TreatmentModal").classList.add('is-active')
    }

    const newPrescriptionModal = () => {
        document.getElementById("NewPrescription").classList.add('is-active')
    }

    const updateStatusModal = () => {
        document.getElementById("StatusModal").classList.add('is-active')
    }

    return(
        <div className="columns">
            <WeightHistoryModal animal={animal}/>
            <TreatmentHistoryModal animal={animal}/>
            <CreateCommentModal animal= {animal}/>
            <NewPictureModal animal = {animal}/>
            <RequestTreatmentModal animal= {animal}/>
            <NewPrescriptionModal animal = {animal}/>
            <UpdateStatusModal animal = {animal}/>
            <SideBar/>
            <div className="column">
                <Header/>
                <AnimalCard animal = {animal} weightModal = {weightModal}/>
                <StatusCard animal={animal} updateStatusModal={updateStatusModal}/>
                <TreatmentCard animal={animal} treatmentHistory={treatementHistory} newTreatment = {newTreatmentModal}/>
                {role!="Student" 
                    ?<CommentCard animal= {animal} newCommentModal={newCommentModal}/>
                    : <div/>
                }
                <PrescriptionCard animal={animal} newPrescriptionModal = {newPrescriptionModal}/>
                <PictureCard animal={animal} newPictureModal = {newPictureModal}/>
                
            </div>
        </div>
    )
};

export default AnimalPage;