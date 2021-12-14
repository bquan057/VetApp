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
            animalname: request.animalname,
            requestid: request.requestid,
            animalid: request.animalid, 
            teachingid: request.teachingid,
            bookingstatus: approveMsg
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data))
            .catch((err) => alert(err));

    } 

    const rejectRequest = () =>{

        const newRequest = {
            animalname: request.animalname,
            requestid: request.requestid,
            animalid: request.animalid, 
            teachingid: request.teachingid,
            bookingstatus: "Rejected"
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data))
            .catch((err) => alert(err));

    } 

    return (

        <div className = "columns has-text-centered mb-6">
            
             <div class="card column has-text-centered">
                <div>
                
                
                <div className="control">
                    <div className = "columns is-centered">

                                <div className = "column">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Animal Name</label>
                                </div>
                                
                                <div className = "column">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">ID</label>
                                </div>
                                
                            
                            
                                <div className = "column">
                                <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Status</label>
                                </div>
                                
                                <div className = "column">
                                <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Approve/Reject</label>
                                </div>

                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-vcentered is-centered">

                        <div className = "column">   
                            <label className = "checkbox has-text-primary-dark">{request.animalname}</label>
                        </div>

                        <div className = "column">   
                            <label className = "checkbox has-text-primary-dark">{request.animalid}</label>
                        </div> 

                        <div className = "column">
                            <input id={"RequestStatus"+props.request.requestid} class="input is-small has-text-centered is-primary is-rounded" type="text" placeholder={request.bookingstatus} disabled  />
                        </div>

                        <div className = "column">
                            <div className = "columns">
                            <div className = "column">
                                <button className= "button has-text-weight-bold is-success has-text-white is-rounded" onClick={approveRequest}>
                                        <span class="icon is-small">
                                            <i class="fas fa-check"></i>
                                        </span>
                                    </button> 
                                </div>

                                <div className = "column">
                                    <button className= "button has-text-weight-bold is-danger has-text-white is-rounded" onClick={rejectRequest}>
                                        <span class="icon is-small">
                                            <i class="fas fa-minus"></i>
                                        </span>
                                    </button> 
                                </div>
                            </div>
                        </div>   

                    </div>
                </div>
            </div>
        </div>
        </div>

      );
}
 
export default ManageRequestsBox;