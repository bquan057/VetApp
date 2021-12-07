import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AnimalSearchCard = ({animal}) => {
    //***  TODO remove this *** //
    // let navigate = useNavigate();
    // function animalPage() {
    //     navigate('/animals:id');

    // };

    return(
        <Link
            to = {{
                pathname:`/animals/${animal.id}`,
                state: {animal:animal}
            }}
        >
        <div className='card column my-3'  >
            <div className='columns is-vcentered' >

                <div className="card-image column is-narrow has-text-left">
                    <figure className="image is-96x96 ">
                        <img src={animal.imgPath} alt={animal.name}/>
                    </figure>
                </div>
                <div className="class-content column">
                    <p className="has-text-weight-bold has-text-primary-dark"> {animal.name}</p> 
                    <p className="has-text-weight-bold has-text-primary-dark">{animal.id} </p>
                </div>
            </div>
        </div>
        </Link>
    )
};

export default AnimalSearchCard;