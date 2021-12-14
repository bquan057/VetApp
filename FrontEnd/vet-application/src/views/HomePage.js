import React from "react"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import EditAccount from "../components/EditAccount";
import ChangePasswordModal from "../components/ChangePasswordModal";
import "bulma/css/bulma.css";
import ChangePasswordModal from "../components/ChangePasswordModal";
import EditModal from "../components/EditModal";
import MyTreatmentRequestsCard from "../components/MyTreatmentRequestsCard";
import TreatmentRequestsCard from "../components/TreatmentRequestsCard";
import OngoingTreatmentsCard from "../components/OngoingTreatmentsCard";
import OnGoingCare from "../components/OnGoingCare";


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
        document.getElementById('EditAccount').classList.add('is-active');
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditAccount/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal}/>
                <OnGoingCare/>
                {attendantTreatmentRequestCards()}
                {technicianTreatmentRequestCards()}
            </div>
        </div>
    ) 
};

export default HomePage;