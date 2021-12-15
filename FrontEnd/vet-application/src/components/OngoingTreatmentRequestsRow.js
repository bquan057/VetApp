import React, { useState } from "react";
import axios from "axios";

const OngoingTreatmentRequestsRow = (props) => {

    const[treatment, setTreatment] = useState(props.treatment)

    const completeTreatment = () => {
        var completedTimestamp = treatment.timestamp
        var technicianid = sessionStorage.getItem('id')
        var completedAnimalid = treatment.animalid
        var completedTreatmentid = treatment.treatmentid

        const treatmentToReject = {
            timestamp: completedTimestamp,
            animalid: completedAnimalid,
            treatmentid: completedTreatmentid,
            status:"Complete"
        }

        axios.put("http://localhost:8080/user/" + technicianid + "/treatment", treatmentToReject)
            .then((res) => {setTreatment(res.data) 
                window.location.reload(true)
            })
            .catch((err) => alert(err))


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
                            <button className= "button has-text-weight-bold is-primary has-text-white is-rounded" onClick={completeTreatment}>
                                <span class="icon is-small">
                                    <i class="fas fa-flag-checkered"></i>
                                </span>
                                <h1>Complete</h1>
                            </button> 
                        </div>

                    </div>
                </div>  
            
            </div>
        </div>

    )
};
export default OngoingTreatmentRequestsRow;