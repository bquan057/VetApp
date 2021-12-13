import axios from "axios";
import React,  { useEffect, useState } from "react";


const PrescriptionCard = (props) => {

    const animal = props.animal
    const newPrescriptionModal = props.newPrescriptionModal

    const [prescriptions, setPrescriptions] = useState([])

    useEffect(() => {

        let id = animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/prescription"
        axios.get(apiendpoint)
            .then((res) => {
                    setPrescriptions(res.data)
                }
            )
    }, []);
    
    function PrescriptionBox({prescription}){

        return(
            <div class="tile is-parent">
                <article class="tile is-child box notification is-primary">
                    <p className="has-text-weight-bold"> Made by: {prescription.fname} {prescription.lname}</p>
                    <p className="has-text-weight-bold"> Prescription Name: {prescription.prescriptionname}</p>
                </article>
            </div>
        )
    }

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns card is-multiline is-vcentered py-1">
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={newPrescriptionModal}>New Prescription</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Prescriptions</div>
                    </div>
                    <div className="columns is-multiline is-centered">
                        <div className="column is-one-third px-1">
                            {prescriptions.map(prescription =>(<PrescriptionBox prescription = {prescription}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
};

export default PrescriptionCard;