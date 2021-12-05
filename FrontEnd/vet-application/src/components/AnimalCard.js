import React from "react";
import animalData from "../data/animalData";
import { useState } from "react";


const AnimalCard = () => {

    let animal = animalData[0]
    
    function Card (att) {
        return(
            <div className="column is-half">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h1 class="has-text-weight-bold">{att.att}</h1>
                        </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <div class="box py-0 pl-1">
                            {att.value}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    

    return(
        <div className="columns is-centered mb-6">
        <div className="column is-three-quarters">
            <div class="columns card">
                <div className="column has-text-centered">
                    <div className="title">Animal Information</div>
                    <div className="columns">
                        <div className="column is-centered">
                            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bulma.Dragon-Ball.webp" alt="Bulma"></img>
                        </div>
                        <div className="column is-centered">
                            <div className="columns is-multiline ">
                                {
                                    Object.entries(animal).map(([att, value]) => <Card att={att} value={value}/>) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
};

export default AnimalCard;