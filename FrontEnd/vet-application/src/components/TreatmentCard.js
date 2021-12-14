import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const TreatmentCard = (props) => {

    const animal = props.animal
    const treatmentHistory = props.treatmentHistory
    const newTreatment = props.newTreatment
    const role = sessionStorage.getItem('role')

    const[treatments, setTreatments] = useState([])

    useEffect(() => {

        let id = animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/treatment?status=notComplete"
        axios.get(apiendpoint)
            .then((res) => {
                    setTreatments(res.data)
                }
            )
    }, []);

    function TreatmentBox({treatment}){

        return(
            <div className="column is-one-quarter mx-1 mb-2">
                <div className="tile is-child is-12 notification is-primary">
                    <div className="column ">
                        <label className="label has-text-weight-bold">Method: {treatment.treatmentmethod} </label>
                        <label className="label has-text-weight-bold">Attendent ID: {treatment.attendantid} </label>
                        <label className="label has-text-weight-bold">Request Date: {treatment.timestamp}</label>
                    </div>
                  </div>
            </div>
        )
    }

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns is-multiline card is-vcentered">
                    {role==="Care Attendant"
                        ?<div className="column is-one-quarter has-text-centered">
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={newTreatment} >Request Treatment</button>
                        </div>
                        :<div className="column is-one-quarter has-text-centered"></div>
                    }
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Current Treatments</div>
                    </div>
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={treatmentHistory}>Treatment History</button>
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-centered py-3">
                            {treatments.map(treatment =>(<TreatmentBox treatment = {treatment}/>))}
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    
    )
};

export default TreatmentCard;