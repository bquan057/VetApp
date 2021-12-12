import React from "react";
import { useNavigate } from "react-router";

const AnimalSearchCard = (props) => {
    
    const navigate = useNavigate()
    
    // create animal object from props
    let animal = props.animal

    // go to animal page and pass animal object
    const toAnimalPage = () => {
        navigate(`/animal/${animal.animalid}`, {state:{animal}})
    }

    return(

        <div className='card column my-3' onClick={toAnimalPage}>
            <div className='columns is-vcentered' >

                <div className="card-image column is-narrow has-text-left">
                    <figure className="image is-96x96 ">
                        <img src={animal.imgPath} alt={animal.name}/>
                    </figure>
                </div>
                <div className="class-content column">
                    <p className="has-text-weight-bold has-text-primary-dark"> {animal.animalname}</p> 
                    <p className="has-text-weight-bold has-text-primary-dark">{animal.animalid} </p>
                </div>
            </div>
        </div>
    )
};

export default AnimalSearchCard;