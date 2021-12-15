import React, { useState } from "react";
import axios from "axios";

const DeleteModal = ({id}) => {
    const modalClose = () => {
        document.getElementById('DeleteModal').classList.remove('is-active');
    }

    const[callDelete, setDelete] = useState([]);

    var apiEndPoint = ""
    apiEndPoint = "http://localhost:8080/user/" + id;

    function deleteUser() {
        axios
        .delete(apiEndPoint)
        .then((response) => {
            setDelete(response.data);
            alert("User Deleted!");
            window.location.reload(true)
      });
      
    }
    
    return ( 
        <div className = 'modal' id = 'DeleteModal'>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Delete User</p>
            <button
                onClick={modalClose}
                className="delete"
                aria-label="close"
            />
            </header>
            
            <section className="modal-card-body">

                <div className="control">
                    <div className = "columns is-centered has-text-centered">
                        <div className = "column">
                            <label className = "checkbox has-text-primary-dark">Are you sure you would like to delete this user? </label>
                        </div>                                             
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "columns">
                            <div className = "column">
                            <button onClick = {()=> {modalClose(); deleteUser()}} className = "button is-success">
                                <span Class = "icon is-small">
                                    <i className = "fas fa-check"></i>
                                </span>
                                <span>Confirm</span>
                            </button>
                            </div>

                            <div className = "column">
                            <button onClick = {modalClose} className = "button is-danger">
                                <span Class = "icon is-small">
                                    <i className = "fas fa-times"></i>
                                </span>
                                <span>Cancel</span>
                            </button>
                            </div>

                        </div>                                             
                    </div>
                </div>

            </section>


            <footer className="modal-card-foot">
            {/* <button onClick = {modalClose} className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button> */}
            </footer>
        </div>
        </div> 

     );
}
 
export default DeleteModal;