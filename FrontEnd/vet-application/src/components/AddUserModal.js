import React, {useState, useEffect}  from "react"
import axios from "axios";


const AddUserModal = () => {

    const modalClose = () => {
        document.getElementById('AddUserModal').classList.remove('is-active');
    }

    const[add, setAdd] = useState([]);
    
    var apiEndpoint = ""

    apiEndpoint = "http://localhost:8080/user";

    function addUser(){
        axios
            .post(apiEndpoint, {
                username: document.getElementById("add_username").value,
                password: document.getElementById("add_password").value,
                email: document.getElementById("add_email").value,
                fname: document.getElementById("add_fname").value,
                lname: document.getElementById("add_lname").value,
                // isactive: document.getElementById("add-answer").value,
                // isactive: document.querySelector('input[name="add-answer"]:checked').value,
                isactive: true,
                role: document.getElementById("add_role").value
                }
            ).then((response)=>{
                setAdd(response.data);
                alert("User Saved!");
            }).catch((err) => {
            console.log(err);
          });
    }
    
    return ( 
        <div className = "modal" id = "AddUserModal">
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Add New User</p>
            <button
                onClick={modalClose}
                className="delete"
                aria-label="close"
            />
            </header>
            
            <section className="modal-card-body">
            <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Username: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_username" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Username"/>
                        </div>                       
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Password: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_password" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Password"/>
                        </div>                       
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Email: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_email" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Email"/>
                        </div>                       
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">First Name: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_fname" class="input is-small is-primary is-rounded" type="text" placeholder="Enter First Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Last Name: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_lname" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Last Name"  />
                        </div>                       
                    </div>
                </div>

                {/* <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Active: </label>
                        </div>                        
                        <div className = "column">
                        <div class="control">
                            <label class="radio is-primary-dark">
                                <input type="radio" name="add-answer"/>
                                Yes
                            </label>
                            <label class="radio is-primary-dark">
                                <input type="radio" name="add-answer"/>
                                No
                            </label>
                        </div>
                        </div>                       
                    </div>
                </div> */}
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Role: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "add_role" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Role" />
                        </div>                       
                    </div>
                </div>
            </section>
            <footer className="modal-card-foot">
            <button onClick = {()=>{modalClose(); addUser()}}className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div> 
    );
}
 
export default AddUserModal;

