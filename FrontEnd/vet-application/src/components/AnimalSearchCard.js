import React from "react";
import "bulma/css/bulma.css";


const AnimalSearchCard = ({animal}) => {
    

    return(
        <div class='card column is-rounded' onClick="" >
            <div class='columns is-vcentered'>
                    <div class="card-image column is-narrow has-text-left">
                        <figure class="image is-96x96 ">
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