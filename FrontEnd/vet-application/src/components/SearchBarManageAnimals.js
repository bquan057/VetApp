import React from "react";

const SearchBarManageAnimals = ({addComponents}) => {

    return (
    <div>
        <div className="columns is-centered">
            <div className="column is-two-thirds">
                <div className="columns">
                <div className="column is-four-fifths">
                    <input id="searchbar_manage_animals" class="input is-info is-rounded" type="text" placeholder="Search"></input>
                </div>
                <div className="column has-text-right">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={addComponents}>Search</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default SearchBarManageAnimals;