import React from "react";
import animalData from "../data/animalData";
import treatmentData from "../data/treatmentData";
import { useState } from "react";


const TreatmentCard = ({id, treatmentHistory, newTreatment}) => {

    function TreatmentBox({treatment}){

        return(
            <div className="column is-one-quarter mx-1 mb-2">
                <div className="tile is-child is-12 notification is-primary">
                    <div className="column ">
                        <label className="label has-text-weight-bold">Method: {treatment.method} </label>
                        <label className="label has-text-weight-bold">Requested by: {treatment.attName} </label>
                        <label className="label has-text-weight-bold">Request Date: {treatment.timeStamp}</label>
                    </div>
                    <div className="column has-text-centered">
                        <button className= "ml-2 button is-small has-text-weight-bold has-text-primary-dark is-rounded my-2" >Complete</button>
                    </div>
                  </div>
            </div>
        )
    }

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns is-multiline card is-vcentered">
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={newTreatment} >Request Treatment</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Current Treatments</div>
                    </div>
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={treatmentHistory}>Treatment History</button>
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-centered py-3">
                        {treatmentData.filter(treatment => treatment.animalid==id && treatment.isComplete=="false").map(filteredTreament =>(<TreatmentBox treatment = {filteredTreament}/>
                            ))}
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    
    )
};

export default TreatmentCard;