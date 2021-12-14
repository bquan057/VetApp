import React, { useEffect } from "react";
import axios from "axios";
import pictureData from "../data/pictureData";
import { useState } from "react";
import Picture from "./Picture";


const PictureCard = (props) => {

    const [pics, setPic] = useState([]);

    useEffect(() => {
            var apiEP = ""
            apiEP = "http://localhost:8080/animals/"+ props.animal.animalid +"/images";
            axios.get(apiEP).then((res) => {
            setPic(res.data)
            console.log(res.data)
        })
    }, []);

    function TreatmentBox({image}){

        return(
            <div className="column is-two-fifths mx-1 mb-2">
                <div className="tile is-child is-12 notification is-primary">
                    <div className="column has-text-centered ">
                        <figure className="image">
                            <img src={image.fileurl} alt="" />
                            <p>{image.creationdate}</p>
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
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={props.newPictureModal} >Add Picture</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Pictures</div>
                    </div>
                    <div className="column is-one-quarter has-text-centered">
                       
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-centered py-3">
                        {pics.map(pictureUrl =>(<TreatmentBox image = {pictureUrl}/>
                            ))}
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    
    )
};

export default PictureCard;