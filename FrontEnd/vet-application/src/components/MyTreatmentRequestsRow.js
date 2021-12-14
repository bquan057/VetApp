import React from "react";

const MyTreatmentRequestsRow = ({treatment}) => {

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
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={treatment.technicianid} disabled/>
                </div> 
                
            
            </div>
        </div>

    )
};
export default MyTreatmentRequestsRow;