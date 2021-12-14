import React from "react";

const TreatmentRequestsRow = () => {

    return (
       
        <div className="control">
            <div className = "columns is-centered is-vcentered">

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                </div> 
                
                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                </div> 

                <div className = "column">
                    <input class="input is-small is-primary is-rounded has-text-centered" type="text" disabled/>
                </div> 
                
                <div className = "column">
                    <div className = "columns">
                        <div className = "column">
                            <button className= "button has-text-weight-bold is-success has-text-white is-rounded">
                                <span class="icon is-small">
                                    <i class="fas fa-check"></i>
                                </span>
                            </button> 
                        </div>

                        <div className = "column">
                            <button className= "button has-text-weight-bold is-danger has-text-white is-rounded">
                                <span class="icon is-small">
                                    <i class="fas fa-minus"></i>
                                </span>
                            </button> 
                        </div>
                    </div>
                </div>  
            
            </div>
        </div>

    )
};
export default TreatmentRequestsRow;