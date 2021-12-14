import axios from "axios";
import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
// import '../Customization/LoginCard.css'


const RequestsBox = (props) => {
    const [request, setRequest] = useState(props.request)

    const cancelRequest = () =>{

        if (document.getElementById("RequestStatus"+props.request.requestid).placeholder != "Approved_By_Technician") {
            const requestToCancel = {
                requestid: request.requestid,
                animalid: request.animalid, 
                teachingid: request.teachingid,
                bookingstatus:"Cancelled"
            }
    
            axios.put("http://localhost:8080/request", requestToCancel)
                .then((res)=> setRequest(res.data));

        }

    } 

    return (
        // <div>
        // <div className="column is-two-fifth">
        <div className = "columns has-text-centered">
             <div class="card column has-text-centered">
                <div>
                {/* <h2 className = "title is-size-3 has-text-primary-dark ml-5">My Animal Requests</h2> */}
                
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
                        <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Cancellations</label>
                        </div>      
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-vcentered is-centered">
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
                            <input id={"RequestStatus"+props.request.requestid} class="input is-small has-text-centered is-primary is-rounded" type="text" placeholder={request.bookingstatus} disabled  />
                        </div>
                        <div className = "column is-one-third">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={cancelRequest} >Cancel</button>                        </div>      
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
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Cancel</button>                        </div>      
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
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Cancel</button>                        </div>      
                    </div>
                </div> */}
                
                </div>
                </div>
                </div>

    );
}
 
export default RequestsBox;