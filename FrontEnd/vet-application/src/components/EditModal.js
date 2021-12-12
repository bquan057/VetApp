import axios from "axios";
import React, {useState, useEffect} from "react"
import UserInformationBox from "./UserInformationBox";

const EditModal = ({id}) => {

    const modalClose = () => {
        document.getElementById('EditModal').classList.remove('is-active');
    }
    const[edit, setEdits] = useState([]);

        var apiEndpoint = ""

        apiEndpoint = "http://localhost:8080/user/edit?id=" + id;

        function updateUser(){
            axios
                .put(apiEndpoint, {
                    fname: document.getElementById("first_name").value,
                    lname: document.getElementById("last_name").value,
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value
                    }
                ).then((response)=>{setEdits(response.data);}).catch((err) => {
                console.log(err);
              });
        }

    
    return ( 
        <div className = 'modal' id = 'EditModal'>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Edit Existing User</p>
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
                            <label className = "checkbox has-text-primary-dark">First Name: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "first_name" class="input is-small is-primary is-rounded" type="text" placeholder="First Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Last Name: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "last_name" class="input is-small is-primary is-rounded" type="text" placeholder="Last Name"  />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Username: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "username" class="input is-small is-primary is-rounded" type="text" placeholder="Username" />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Email: </label>
                        </div>                        
                        <div className = "column">
                            <input id = "email" class="input is-small is-primary is-rounded" type="text" placeholder="Address" />
                        </div>                       
                    </div>
                </div>

            </section>
            <footer className="modal-card-foot">
            <button onClick = {()=> {modalClose(); updateUser()}} className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div> 
    );
}
 
export default EditModal;

