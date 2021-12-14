import React from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import { useNavigate } from "react-router";

const SideBar = () => {
    let navigate = useNavigate();

    function animalPage() {
        navigate('/animals');
    };

    function userPage() {
        navigate('/users');
    };

    function searchPatient() {
        navigate('/search');
    };

    function makeRequests(){
        navigate('/MakeRequest')
    };

    function myRequests(){
        navigate('/MyRequest')
    };

    function manageRequests(){
        navigate('/ManageRequest')
    };


    const sideButton = () =>{
        const role = sessionStorage.getItem('role')

        if(role == "Admin"){
            return <div className="buttons">
                <button  className="button mt-6 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {userPage}>Manage Users</button>
                <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {animalPage}>Manage Animals</button>
                <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {searchPatient}>Search Patient</button>
                {/* <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {makeRequests}>Make Requests</button> */}
                {/* <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {myRequests}>My Requests</button> */}
                <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {manageRequests}>Manage Requests</button>
        </div>
        }

        else if(role == "Teaching Technician"){
            return <div className="buttons">
            <button  className="button mt-6 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {userPage}>Manage Users</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {animalPage}>Manage Animals</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {searchPatient}>Search Patient</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {makeRequests}>Make Requests</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {myRequests}>My Requests</button>
        </div>
        }

        else if(role == "Health Technician"){
            return <div className="buttons">
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {animalPage}>Manage Animals</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {searchPatient}>Search Patient</button>
        </div>
        }

        else if(role == "Student"){
            return <div className="buttons">
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {searchPatient}>Search Patient</button>
        </div>
        }
        else if(role == "Care Attendant"){
            return <div className="buttons">
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {animalPage}>Manage Animals</button>
            <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {searchPatient}>Search Patient</button>
        </div>
        }


    }


    return(
        <div className="column is-one-fifth has-background-primary">
            <div className="hero is-centered is-fullheight">
                <div className="container">
                    <div className="buttons">
                        {sideButton()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SideBar;