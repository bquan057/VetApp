import React from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import { useNavigate } from "react-router";

const SideBar = () => {
    let navigate = useNavigate();

    function animalPage() {
        navigate('/animals');
    };

    function userPage() {
        navigate('/users');
    };


    return(
        <div className="column is-one-fifth has-background-primary">
            <div className="hero is-centered is-fullheight">
                <div className="container">
                    <div className="buttons">
                        <button  className="button mt-6 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {userPage}>Manage Users</button>
                        <button className= "button mt-3 mx-3 has-text-weight-bold has-text-primary-dark is-rounded is-fullwidth" onClick= {animalPage}>Manage Animals</button>
                    </div>
                    <div className = "has-text-centered">
                        <span className="icon-text">
                            <div className="icon">
                            <i className="far fa-user has-text-primary-dark"></i>
                            </div>
                            <a className= "has-text-weight-bold has-text-primary-dark" href="/search" > Search Patient</a>
                        </span>
                    </div>
                    <div className = "my-3"></div>
                    <div className = "has-text-centered">
                        <span className="icon-text">
                            {/* <div className="icon">
                            <i className="far fa-user has-text-primary-dark"></i>
                            </div> */}
                            <a className= "has-text-weight-bold has-text-primary-dark" href="/MakeRequest" > Make Requests</a>
                        </span>
                    </div> 
                    <div className = "my-3"></div>
                    <div className = "has-text-centered">
                        <span className="icon-text">
                            {/* <div className="icon">
                            <i className="far fa-user has-text-primary-dark"></i>
                            </div> */}
                            <a className= "has-text-weight-bold has-text-primary-dark" href="/MyRequest" > My Requests</a>
                        </span>
                    </div> 
                    <div className = "my-3"></div>
                    <div className = "has-text-centered">
                        <span className="icon-text">
                            {/* <div className="icon">
                            <i className="far fa-user has-text-primary-dark"></i>
                            </div> */}
                            <a className= "has-text-weight-bold has-text-primary-dark" href="/ManageRequest" > Manage Requests</a>
                        </span>
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default SideBar;