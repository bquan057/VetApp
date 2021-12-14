import axios from "axios";
import React, {useState, useEffect} from "react"

const ChangePasswordModal = () => {

    const modalClose = () => {
        document.getElementById('ChangePasswordModal').classList.remove('is-active');
    }

    const[password, setPassword] = useState([]);

    var apiEndPoint = ""
    apiEndPoint = "http://localhost:8080/user/password?id=" + sessionStorage.getItem('id');

    function changePassword(){

        const currentPassword = document.getElementById("current_password").value
        const newPassword = document.getElementById("new_password").value
        const newPasswordConfirm =document.getElementById("new_password_confirm").value

        if(currentPassword === sessionStorage.getItem('password')){
            if(newPassword === newPasswordConfirm)
                axios.put(apiEndPoint, {
                    password: document.getElementById("new_password").value
                }).then((response) => {
                    setPassword(response.data);
                    alert("Password set successfully!")
                });
        }
        else{
            alert("Please re-enter password information.")
        }
    }

 
    return ( 
        <div class = "modal" id ="ChangePasswordModal">
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Change Password</p>
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
                            <label className = "checkbox has-text-primary-dark">Current Password: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "current_password" class="input is-small is-primary is-rounded" type="text" placeholder="First Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">New Password: </label>
                        </div>                        
                        <div className = "column">
                            <input id="new_password" class="input is-small is-primary is-rounded" type="text" placeholder="Last Name"  />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Confirm New Password: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "new_password_confirm" class="input is-small is-primary is-rounded" type="text" placeholder="Phone Number" />
                        </div>                       
                    </div>
                </div>

            </section>
            <footer className="modal-card-foot">
                {/* setting the save button to close for now */}
            <button onClick = {() => {modalClose(); changePassword()}} className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div>
    );
}
 
export default ChangePasswordModal;

