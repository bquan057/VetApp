import React from "react";

const BlockUserModal = () => {
    const modalClose = () => {
        document.getElementById('BlockModal').classList.remove('is-active');
    }
    
    return ( 
        <div className = 'modal' id = 'BlockModal'>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Block User</p>
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
                            <label className = "checkbox has-text-primary-dark">Are you sure you would like to block this user from access? </label>
                        </div>                                             
                    </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "columns">
                            <div className = "column">
                            <button onClick = {modalClose} className = "button is-success">
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
 
export default BlockUserModal;