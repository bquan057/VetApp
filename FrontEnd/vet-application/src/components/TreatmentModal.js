import React from "react";


const TreatmentModal = () => {
    const modalClose = () => {
        document.getElementById('TreatmentModal').classList.remove('is-active');
    }
    
    return ( 
        <div className = 'modal' id = 'TreatmentModal'>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Treatments</p>
            <button
                onClick={modalClose}
                className="delete"
                aria-label="close"
            />
            </header>
            
            <section className="modal-card-body">

            <div className="control">
                    <div className = "columns">
                        <div className = "column is-centered">
                        {/* add the treatment methods here */}
                            <div class="navbar-item has-dropdown is-hoverable is-center">

                                <a class="navbar-link"> Treatment Options </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    notification 1
                                </a>
                            <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                    notification 2
                                </a>
                            <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                    notification 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-two-fifths">
                            <label className = "checkbox has-text-primary-dark ml-6">Requested by: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Name"/>
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-two-fifths">
                            <label className = "checkbox has-text-primary-dark ml-6">Requested from: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Name"  />
                        </div>                       
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-two-fifths">
                            <label className = "checkbox has-text-primary-dark ml-6">Date: </label>
                        </div>                        
                        <div className = "column">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="yyyy-mm-dd:" />
                        </div>                       
                    </div>
                </div>

            </section>
            <footer className="modal-card-foot">
            <button onClick = {modalClose} className="button is-success">Save changes</button>
            <button onClick={modalClose} className="button">
                Cancel
            </button>
            </footer>
        </div>
        </div> 
    );
}
 
export default TreatmentModal;