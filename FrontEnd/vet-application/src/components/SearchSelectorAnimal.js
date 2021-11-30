import React from "react";


const  SearchSelectorAnimal = () =>{

    return (
    <div className="columns is-centered">
        <div className="column is-two-thirds">
            <div className="columns">
                <div className="column has-text-left">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Search by ID</button>
                </div>
                <div className="column has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Search by Name</button>
                </div>
                <div className="column has-text-right">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Search by Species</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default SearchSelectorAnimal;