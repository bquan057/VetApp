import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
// import '../Customization/LoginCard.css'
import Modal from "./EditModal";

const UserInformationBox = ({handleClick, userInfo}) => {

    return (
        // <div>
        // <div className="column is-two-fifth">
        <div className = "columns has-text-centered">
             <div class="card column has-text-centered">
                <div>
                <h2 className = "title is-4 has-text-primary-dark ml-5">User Information</h2>
                
               

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">First Name: </label>
                        </div> 
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={userInfo.name} disabled />
                        </div>   
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Last Name: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Wang" disabled />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Phone Number: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="403-690-2966" disabled />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Address: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="123 AppleWood Drive" disabled />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Position: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Student" disabled />
                        </div>                       
                    </div>
                </div>
                <div className = "my-2">
                </div>  
                <div>
                     <button onClick = {handleClick} className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Edit User</button>
                </div>
             </div>
            </div>
            
        {/* <button onClick = {handleClick} className = "button mx-6 is-primary is-light is-centered">Submit</button> */}
        
        </div>
        // </div>
        // </div>

    );
}
 
export default UserInformationBox;