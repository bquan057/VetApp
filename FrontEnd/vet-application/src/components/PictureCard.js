import React from "react";
import axios from "axios";
import pictureData from "../data/pictureData";
import { useState } from "react";


const PictureCard = ({id, newPictureModal, handlePic}) => {

    // const [pic, setPic] = useState(null);

    // const sendDataToParent = (i) =>{
    //     setPic(i);
    // }
    
    function TreatmentBox({image}){

        return(
            <div className="column is-two-fifths mx-1 mb-2">
                <div className="tile is-child is-12 notification is-primary">
                    <div className="column has-text-centered ">
                        {/* <figure className="image">
                            <img src={image.path} alt="" />
                            <p>{image.creation}</p>
                        </figure> */}
                        {/* <figure class="image is-128x128"> */}
                        {/* <img class="is-rounded" src="{{site.url}}/images/placeholders/128x128.png"/> */}
                        <figure class="image is-128x128">
                            <img src={handlePic}/>
                        </figure>
                        {/* </figure> */}
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
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={newPictureModal} >Add Picture</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Pictures</div>
                    </div>
                    <div className="column is-one-quarter has-text-centered">
                       
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-centered py-3">
                        <figure class="image is-128x128">
                            <img src={handlePic}/>
                        </figure>
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