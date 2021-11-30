import React from "react";

const NewAnimalButton = () =>{

    return (
    <div className="columns is-centered">
        <div className="column is-two-thirds">
            <div class="columns">
                <div className="column">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">+ New Animal</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default NewAnimalButton;