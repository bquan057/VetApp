import React from "react";
import image from "../res/sora.jpg"


const AnimalSearchCard = () => {


    return(
        <div class='card column' onClick="" >
            <div class='columns is-vcentered'>
               
                    <div class="card-image column is-narrow has-text-left">
                        <figure class="image is-96x96 ">
                            <img src={image}/>
                        </figure>
                    </div>
                    <div className="class-content column">
                        <p className="has-text-weight-bold has-text-primary-dark"> Name:</p>
                        <p className="has-text-weight-bold has-text-primary-dark"> Id:</p>
                    </div>
            </div>
        </div>
    )
};

export default AnimalSearchCard;