import axios from "axios";
import React, { useState } from "react";

const TreatmentRequestsRow = (props) => {

    const[treatment, setTreatment] = useState(props.treatment)

    const acceptTreatment = () => {

        var acceptedTimestamp = treatment.timestamp
        var technicianid = sessionStorage.getItem('id')
        var acceptedAnimalid = treatment.animalid
        var acceptedTreatmentid = treatment.treatmentid

        const treatmentToAccept = {
            timestamp: acceptedTimestamp,
            animalid: acceptedAnimalid,
            treatmentid: acceptedTreatmentid,
            status:"Accepted"
        }

        axios.put("http://localhost:8080/user/" + technicianid + "/treatment", treatmentToAccept)
            .then((res) => setTreatment(res.data))
        
    }

    const rejectTreatment = () => {
        var rejectedTimestamp = treatment.timestamp
        var technicianid = sessionStorage.getItem('id')
        var rejectedAnimalid = treatment.animalid
        var rejectedTreatmentid = treatment.treatmentid

        const treatmentToReject = {
            timestamp: rejectedTimestamp,
            animalid: rejectedAnimalid,
            treatmentid: rejectedTreatmentid,
            status:"Rejected"
        }

        axios.put("http://localhost:8080/user/" + technicianid + "/treatment", treatmentToReject)
            .then((res) => setTreatment(res.data))
        
    }

    return (
       
        <div className="control">
            <div className = "columns is-centered is-vcentered">

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.animalname} disabled/>
                </div> 
                
                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.animalid} disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.status} disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.treatmentmethod} disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.attendantid} disabled/>
                </div> 
                
                <div className = "column">
                    <div className = "columns">
                        <div className = "column">
                            <button className= "button has-text-weight-bold is-success has-text-white is-rounded" onClick={acceptTreatment}>
                                <span class="icon is-small">
                                    <i class="fas fa-check"></i>
                                </span>
                            </button> 
                        </div>

                        <div className = "column">
                            <button className= "button has-text-weight-bold is-danger has-text-white is-rounded" onClick={rejectTreatment}>
                                <span class="icon is-small">
                                    <i class="fas fa-minus"></i>
                                </span>
                            </button> 
                        </div>
                    </div>
                </div>  
            
            </div>
        </div>

    )
};
export default TreatmentRequestsRow;