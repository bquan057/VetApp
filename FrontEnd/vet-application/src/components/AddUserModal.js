import React from "react"

const AddUserModal = ({handleClose}) => {
    
    return ( 
        <div>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Add New User</p>
            <button
                onClick={handleClose}
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
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="First Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Last Name: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Last Name"  />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Phone #: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Phone Number" />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Address: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Address" />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-fifth">
                            <label className = "checkbox has-text-primary-dark">Position: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Position" />
                        </div>                       
                    </div>
                </div>


            </section>
            <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={handleClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div> 
    );
}
 
export default AddUserModal;

