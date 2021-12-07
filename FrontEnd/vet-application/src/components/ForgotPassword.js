import React from "react";

const ForgotPassword = () => {
    const modalClose = () => {
        document.getElementById('ForgotPassword').classList.remove('is-active');
    }
    return ( 
        <div className = "modal" id = "ForgotPassword">
        <div className="modal-background"/>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Forgot Password</p>
            <button
                onClick={modalClose}
                className="delete"
                aria-label="close"
            />
            </header>
            
            <section className="modal-card-body">
            <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column has-text-centered">
                            <label className = "checkbox has-text-primary-dark">Please enter your email address. A confirmation email will be sent to your inbox to reset your password. </label>
                        </div>                                            
                    </div>
                </div>
                <div className="control">
                    <div className = "columns">
                        <div className = "column has-text-centered">
                            <label className = "has-text-primary-dark">Email Address: </label>
                        </div>                        
                        <div className = "column is-three-fifths">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="Email Address"/>
                        </div>                       
                    </div>
                </div>
            </section>
            <footer className="modal-card-foot">
                <button onClick={modalClose} className="button is-success">Send</button>
                <button onClick={modalClose} className="button">Cancel</button>
            </footer>
        </div>
        </div> 
    );
}

export default ForgotPassword;