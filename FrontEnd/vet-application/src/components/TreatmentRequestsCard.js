import React, { useState } from "react";
import TreatmentRequestsRow from "./TreatmentRequestsRow";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

const TreatmentRequestsCard = () => {

    const id = sessionStorage.getItem('id')

    const [components, setComponents] = useState([])

    useEffect (() => {
        axios.get("http://localhost:8080/user/"+id+"/treatment?status=Requested")
            .then((res) => setComponents(res.data))
            .catch((err) => alert(err))
    
    }, []);

    return (
        <div className = "columns is-centered mb-6">
            <div class="card column has-text-centered is-three-quarters">
                <h1 className="has-text-primary-dark has-text-weight-bold is-size-4 mb-3">Pending Treatment Requests</h1>
                
                
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
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Requested By</label>
                        </div>

                        <div className = "column">
                            <label className = "has-text-primary-dark has-text-weight-bold is-size-6">Accept/Decline</label>
                        </div>

                    </div>
                </div>

                {components.map(item=> <TreatmentRequestsRow treatment = {item}/>)}
                
            </div>
        </div>
        )
};
export default TreatmentRequestsCard;