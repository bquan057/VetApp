import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import getUser from "../components/GetUser";
// import '../Customization/LoginCard.css'

const ManageRequestsBox = (props) => {
    const [request, setRequest] = useState(props.request)

    const approveRequest = () =>{
        
        const role = sessionStorage.getItem('role')
        let approveMsg = ""

        if(role == 'Admin'){
            approveMsg = "Approved_By_Admin"
        }else{
            approveMsg = "Approved_By_Technician"
        }

        const newRequest = {
            requestid: request.requestid,
            animalid: request.animalid, 
            teachingid: request.teachingid,
            bookingstatus: approveMsg
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data));


        if (role == 'Health Technician') {
            const id = request.animalid

            const updateToAnimal = {
                availability: "Booked"
            }
            axios.put("http://localhost:8080/animal/" + id, updateToAnimal)
        }

    } 

    const rejectRequest = () =>{

        const newRequest = {
            requestid: request.requestid,
            animalid: request.animalid, 
            teachingid: request.teachingid,
            bookingstatus: "Rejected"
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data));

        const id = request.animalid

        const updateToAnimal = {
            availability: "Available"
        }
        axios.put("http://localhost:8080/animal/" + id, updateToAnimal)

    } 

    return (

        <div className = "columns has-text-centered mb-6">
            
             <div class="card column has-text-centered">
                <div>
                
                
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                {/* <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4"> Name </label>
                                </div> */}
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">ID</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                        <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Status</label>
                        </div>
                        <div className = "column is-one-third">
                        <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Requests</label>
                        </div>      
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered is-vcentered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                {/* <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div> */}
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">{request.animalid}</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={request.bookingstatus} disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={approveRequest} >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded"onClick={rejectRequest} >Deny</button> 
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                {/* <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div>
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal ID1</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                                <input class="input is-small is-primary is-rounded" type="text" placeholder="New" disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Deny</button> 
                                </div>
                            </div>
                        </div>


                </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div>
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal ID1</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="New" disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Deny</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> */}
            </div>
        </div>
        </div>

      );
}
 
export default ManageRequestsBox;