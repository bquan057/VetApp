import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
// import '../Customization/LoginCard.css'
import Modal from "./EditModal";

const UserInformationBox = ({user, addModal, editModal, deleteModal, blockModal, handleId}) => {

    return (
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
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={user.fname} disabled />
                        </div>   
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Last Name: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={user.lname} disabled />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Email Address: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={user.email} disabled />
                        </div>                       
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Username: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={user.username} disabled />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <label className = "checkbox has-text-primary-dark">Position: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder={user.role} disabled />
                        </div>                       
                    </div>
                </div>
                <div className = "my-2">
                </div>  
                <div className = "columns is-centered">
                     {/* <button onClick = {()=> {editModal(); handleId(user.userid)}} className= "button has-text-weight-bold has-text-primary-dark is-rounded mx-3">Edit User</button> */}
                     <button onClick = {()=> {editModal(); handleId(user.userid)}} className= "button has-text-weight-bold has-text-primary-dark is-rounded mx-3">Edit User</button>
                     <button onClick = {deleteModal} className= "button has-text-weight-bold has-text-primary-dark is-rounded mx-3" >Delete User</button>
                     <button onClick = {blockModal} className= "button has-text-weight-bold has-text-primary-dark is-rounded mx-3" >Block User</button>
                     <div className = "my-5"></div>
                <div>
            </div>
             </div>
            </div>
            
        {/* <button onClick = {handleClick} className = "button mx-6 is-primary is-light is-centered">Submit</button> */}
        
        </div>
        </div>
        // </div>

    );
}
 
export default UserInformationBox;