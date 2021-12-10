import React from "react";

const SearchBarManageAnimals = ({addAnimals}) => {

    return (
    <div>
        <div className="columns is-centered">
            <div className="column is-two-thirds">
                <div className="columns">
                <div className="column is-four-fifths">
                    <input id="searchbar_manage_animals" class="input is-info is-rounded" type="text" placeholder="Search"></input>
                </div>
                <div className="column has-text-right">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={addAnimals}>Search</button>
                </div>
                </div>
            </div>
        </div>
        <div className="columns is-centered mb-6">
            <div class="control column is-two-thirds">
                <div className="columns">
                    <div className="column has-text-left">
                        <label class="button is-rounded">
                            <input type="radio" name="search_select" id="search_by_id_manage_animals"/>
                            <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Search by Id</h1>
                        </label>
                    </div>
                    <div className="column has-text-centered">
                        <label class="button is-rounded">
                            <input type="radio" name="search_select" id="search_by_name_manage_animals"/>
                            <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Search by Name</h1>
                        </label>
                    </div>
                    <div className="column has-text-right">
                        <label class="button is-rounded">
                            <input type="radio" name="search_select" id="search_by_species_manage_animals"/>
                            <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Search by Species</h1>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default SearchBarManageAnimals;