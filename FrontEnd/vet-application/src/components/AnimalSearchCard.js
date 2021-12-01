import React from "react";
import "bulma/css/bulma.css";


const AnimalSearchCard = ({animal}) => {
    

    return(
        <div className='card column my-3' onClick="" >
            <div className='columns is-vcentered'>
                    <div className="card-image column is-narrow has-text-left">
                        <figure className="image is-96x96 ">
                            <img src={animal.imgPath} alt={animal.name}/>
                        </figure>
                    </div>
                    <div className="class-content column">
                        <p className="has-text-weight-bold has-text-primary-dark"> {animal.name}</p> 
                        <p className="has-text-weight-bold has-text-primary-dark">{animal.id} </p>
                        {console.log(animal)}
                    </div>
            </div>
        </div>
    )
};

export default AnimalSearchCard;