import React from "react";
import pictureData from "../data/pictureData";
import { useState } from "react";


const PictureCard = ({id}) => {

    function TreatmentBox({image}){

        return(
            <div className="column is-two-fifths mx-1 mb-2">
                <div className="tile is-child is-12 notification is-primary">
                    <div className="column has-text-centered ">
                        <figure className="image">
                            <img src={image.path} alt="" />
                            <p>{image.creation}</p>
                        </figure>
                        
                    </div>
                  </div>
            </div>
        )
    }

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns is-multiline card is-vcentered">
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" >Add Picture</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Pictures</div>
                    </div>
                    <div className="column is-one-quarter has-text-centered">
                       
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-centered py-3">
                        {pictureData.filter(image => image.animalid==id).map(filteredImage =>(<TreatmentBox image = {filteredImage}/>
                            ))}
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    
    )
};

export default PictureCard;