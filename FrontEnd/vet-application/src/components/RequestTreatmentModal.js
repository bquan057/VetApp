import React, {useEffect, useState} from "react";
import axios from "axios";


const RequestTreatmentModal = (props) => {

    const [treatments, setTreatments] = useState([])
    const [treatment, setTreatment] = useState("")

    const modalClose = () => {
        document.getElementById('TreatmentModal').classList.remove('is-active');
    }

    const selectTreatment = (e) => {
        setTreatment(e.target.value)
    }

    // on click of the submit button
    function handleSubmit(){

        // elements from input fields
        let fname = document.getElementById("fname").value
        let lname = document.getElementById("lname").value
        
        // TODO GET FROM SESSION STORAGE
        let userid = sessionStorage.getItem('id')
        
        // Create api call
        let id = props.animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/treatment"
        
        // create the request
        const request = {
            technicianFName:fname,
            technicianLName:lname,
            attendantid:userid,
            treatmentmethod:treatment
        }
      
        // make the post
        axios.post(apiendpoint, request)
            .then((res) => {
                    console.log(res.data)

                    if(res.data === ""){
                        alert("Technician Not Found")
                    }
                }
            )
       
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById('TreatmentModal').classList.remove('is-active');
    }

    useEffect(() => {
        axios.get("http://localhost:8080/treatmentmethods")
            .then((res)=>{
                setTreatments(res.data)
            })
        }, [])
    

    // creates list of treatments
    const TreatmentList = () => {

        return(
            treatments.map((item)=><option>{item.treatmentmethod}</option>)
        )
    }
    
    
    return ( 
        <div className = 'modal' id = 'TreatmentModal'>
            <div className="modal-background" onClick={modalClose} />
            <div className="section modal-card has-background-white">
                <div className="columns is-centered is-multiline is-vcentered">
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark ">Technician First Name: </label>
                    </div>
                    <div className="column is-half">
                        <input id="fname" className="input is-small is-primary is-rounded" type="text"/>
                    </div>
                    <div className="column is-two-fifths">
                        <label className="label has-text-weight-bold has-text-primary-dark ">Technician Last Name: </label>
                    </div>
                    <div className="column is-half">
                        <input id="lname" class="input is-small is-primary is-rounded" type="text"/>
                    </div>
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Treatment Method </label>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="select is-rounded">
                            <select onChange={selectTreatment}>
                                <TreatmentList/>                                       
                            </select>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={handleSubmit}>Submit</button>
                    </div>
                    </div>
            </div> 
        </div>

    );
}
 
export default RequestTreatmentModal;