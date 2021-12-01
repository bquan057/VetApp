import React from "react";
import '../Customization/LoginCard.css'

const ChangeAccess = () => {
    return ( 
        <div className="column is-centered ml-5">
            
            <div className="card">
                <div className = "LoginCard">
                <div class="field is-centered">

                <div className="column has-text-centered ml-3">
                    <label class="checkbox has-text-primary-dark is-centered is-size-5 has-text-weight-bold">
                    <input type="checkbox"></input>
                        Read
                    </label>
                </div>

                <div className="column has-text-centered ml-3">
                <label class="checkbox has-text-primary-dark is-centered is-size-5 has-text-weight-bold">
                <input type="checkbox"></input>
                    Write
                </label>
                </div>

                <div className="column has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Save</button>
                </div>
                </div>
            </div>
        </div> 
        </div>
        );
}
 
export default ChangeAccess;