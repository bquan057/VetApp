import axios from "axios";
import React,  { useEffect, useState } from "react";


const StatusCard = (props) => {

    const animal = props.animal
    const updateStatusModal = props.updateStatusModal

    const [status, setStatus] = useState({})

    useEffect(() => {

        let id = animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/status"
        axios.get(apiendpoint)
            .then((res) => {
                    setStatus(res.data)
                    console.log(status)
                }
            )
    }, []);

    function StatusBox(props){
        let colour = ""

        if(props.status.diseasename != "N/A"){
            colour = "is-danger"
        }
        else{
            colour = "is-primary"
        }


        let tile = "tile is-child box notification " + colour

        return(
            <div class="tile is-parent is-12">
                <article className= {tile}>
                    <p className="has-text-weight-bold">Last Updated: {status.timestamp} </p>
                    <p className="has-text-weight-bold"> Location: {status.location}</p>
                    <p className="has-text-weight-bold"> Disease Name: {status.diseasename}</p>
                    <p className="has-text-weight-bold"> Description: </p>
                    <div className="tile is-child notification has-background-white">
                            <p className="has-text-black has-text-weight-bold"> {status.description} </p>
                    </div>
                </article>
            </div>
        )
    }
    

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns card is-multiline is-vcentered py-1">
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={updateStatusModal}>Update Status</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Animal Status</div>
                    </div>
                    <div className="column is-one-quarter"></div>
                    <div className="column">
                        <StatusBox status={status}/>
                    </div>
                </div>
            </div>
        </div>
    
    )
};

export default StatusCard;