import React from "react"

const ChangePasswordModal = () => {

    const modalClose = () => {
        document.getElementById('ChangePasswordModal').classList.remove('is-active');
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
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="First Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">New Password: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Last Name"  />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Confirm New Password: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Phone Number" />
                        </div>                       
                    </div>
                </div>

            </section>
            <footer className="modal-card-foot">
                {/* setting the save button to close for now */}
            <button onClick = {modalClose} className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div>
    );
}
 
export default ChangePasswordModal;

