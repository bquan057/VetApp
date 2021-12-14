import React from "react";
import {useNavigate} from 'react-router-dom'

function MyButton() {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/home');
    };
    return <button onClick={handleClick}>Submit</button>;
  };

const SearchBarUser = ({addComponents}) => {

    return (
        <div className="columns is-centered">
            <div className="column is-two-thirds">
                <div className="columns">
                <div className="column  is-four-fifths">
                    <input id="search_bar_user" class="input is-info is-primary is-rounded" type="text" placeholder="Search"></input>
                </div>
                <div className="column has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick = {addComponents}>Search</button>
                </div>
                </div>
            </div>
        </div>
    )
};
export default SearchBarUser;