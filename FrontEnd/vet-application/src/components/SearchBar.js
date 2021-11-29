import React from "react";


const SearchBar = () => {

    return (
        
        <div class="columns">
            <div class="ml-6 column is-four-fifths has-text-centered">
                <input id="input" class="input is-info is-rounded" type="text" placeholder="Search"></input>
            </div>
            <div class="column has-text-centered">
                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Search</button>
            </div>
        </div>
    )

};

export default SearchBar;