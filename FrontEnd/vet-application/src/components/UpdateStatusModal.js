import axios from "axios";
import React,  { useEffect, useState } from "react";

const UpdateStatusModal = (props) => {

    const id = props.animal.animalid

    // state for list of diseases
    const [diseases, setDiseases] = useState([])
    
    const modalClose = () => {
        document.getElementById('StatusModal').classList.remove('is-active');
    }

    // on refresh, get all diseases from backend
    useEffect(() => {
        axios.get("http://localhost:8080/disease")
            .then((res)=>{
                setDiseases(res.data)
            })
        }, [])

    // Render diseases
    const DiseaseList = () => {

        return(
            diseases.map((disease)=><option>{disease.diseasename}</option>)
        )
    }

    // state of selected disease from drop down
    const [disease, setDisease] = useState("N/A")

    // when drop down list changes
    const selectDisease = (e) => {
        setDisease(e.target.value)
    }
    console.log(id)
    function handleUpdate(){
        let location = document.getElementById('location').value
        let description = document.getElementById('description').value
        
        // build request
        let request = {
            location:location,
            description:description,
            diseasename:disease,
            userid:12345
        }
        
        // end point
        let apiendpoint = "http://localhost:8080/animal/" + id + "/status"

        // make the request
        axios.post(apiendpoint, request).then((res) => console.log(res.data))

        document.getElementById('location').value = ""
        document.getElementById('description').value = ""
        document.getElementById('StatusModal').classList.remove('is-active');
    }



    
    
    return ( 
        <div className = 'modal' id = 'StatusModal'>
            <div className="modal-background" onClick={modalClose} />
            <div className="section modal-card has-background-white">
                <div className="columns is-centered is-multiline is-vcentered">
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Location: </label>
                    </div>
                    <div className="column is-half">
                        <input id="location" className="input is-small is-primary is-rounded" type="text"/>
                    </div>
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Description: </label>
                    </div>
                    <div className="column is-half">
                        <input id = "description" className="input is-small is-primary is-rounded" type="text"/>
                    </div>
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Disease </label>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="select is-rounded">
                            <select onChange = {selectDisease}>
                                <DiseaseList/>                                       
                            </select>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={handleUpdate}>Update</button>
                    </div>
                    </div>
            </div> 
        </div>

    );
}
 
export default UpdateStatusModal;