import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBar = () => {

    return(
        <div className="column is-one-fifth has-background-primary">
            <div className="hero is-centered is-fullheight">
                <div className="container">
                    <div className="buttons">
                        <button  className="button mt-6 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth">Manage Users</button>
                        <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth">Manage Animals</button>
                    </div>
                    <div className = "has-text-centered">
                        <span className="icon-text">
                            <div className="icon">
                            <i className="far fa-user has-text-primary-dark"></i>
                            </div>
                            <a className= "has-text-weight-bold has-text-primary-dark" href="#" > Search Patient</a>
                        </span>
                    </div> 
                </div>
            </div>
        </div>
    )
};

export default SideBar;