import React from "react";



const  SearchSelectorUser = () =>{

    return (
    <div className="columns is-centered">
        <div className="column is-two-thirds">
            <div className="field is-grouped">
                <div className="column has-text-left">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Student</button>
                </div>
                <div className="column has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Staff</button>
                </div>
                <div className="column has-text-right">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Management</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default SearchSelectorUser;