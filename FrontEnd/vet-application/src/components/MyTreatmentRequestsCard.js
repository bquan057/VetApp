import React, { useState } from "react";
import MyTreatmentRequestsRow from "./MyTreatmentRequestsRow";

const MyTreatmentRequestsCard = () => {

    const [components, setComponents] = useState([])

    return (
        <div className = "columns is-centered mb-6">
            <div class="card column has-text-centered is-three-quarters">
                <h1 className="has-text-primary-dark has-text-weight-bold is-size-4 mb-3">My Treatment Requests</h1>
                
                
                <div className="control">
                    <div className = "columns is-centered">

                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Animal Name</label>
                        </div> 
                        
                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Animal Id</label>
                        </div>
                        
                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Status</label>
                        </div>

                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Treatment</label>
                        </div>

                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Assigned Technician</label>
                        </div>

                    </div>
                </div>

                {/* {components.map(item=> <MyTreatmentRequestsRow treatment = {item}/>)} */}

                <div className="control">
                    <div className = "columns is-centered is-vcentered">

                        <div className = "column">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                        </div> 
                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                        </div> 

                        <div className = "column">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                        </div> 

                        <div className = "column">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                        </div> 

                        <div className = "column">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                        </div> 
                        
                    
                    </div>
                </div>

                
        </div>
        </div>
        )
};
export default MyTreatmentRequestsCard;