import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import "bulma/css/bulma.css";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditModal from "../components/EditModal";
import MyTreatmentRequestsCard from "../components/MyTreatmentRequestsCard";
import TreatmentRequestsCard from "../components/TreatmentRequestsCard";
import OngoingTreatmentsCard from "../components/OngoingTreatmentsCard";


const HomePage= () => {

    const role = sessionStorage.getItem('role')

    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditModal').classList.add('is-active');
    }

    var attendantTreatmentRequestCards = () => {
        if (role == 'Care Attendant') {
            return <MyTreatmentRequestsCard/>
        }
    }

    var technicianTreatmentRequestCards = () => {
        if (role == 'Health Technician') {
            return <div>
                        <TreatmentRequestsCard/>
                        <OngoingTreatmentsCard/>
                    </div>
        }
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditModal/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                
                {attendantTreatmentRequestCards()}
                {technicianTreatmentRequestCards()}
                
            </div>
        </div>
    ) 
};

export default HomePage;