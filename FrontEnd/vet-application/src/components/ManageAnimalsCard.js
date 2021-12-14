import React, { useState, useEffect } from "react";
import EditAnimalModal from "./EditAnimalModal";
import DeleteAnimalModal from "./DeleteAnimalModal";
import EditModal from "./EditModal";

const ManageAnimalsCard = (props) =>{

    const[animal, setAnimal] = useState(props.animal);

    const Card = (att) => {
        let label = att.att
        label = label.toUpperCase()
        return(
            <div class="columns is-vcentered">
                <div className="column is-one-third level-left">
                    <h1 class="has-text-weight-bold has-text-primary-dark">{label}</h1>
                    </div>
                    <div className="column level-right">
                    <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={att.value}></input>
                </div>
            </div>
        )
    }

    const editModalDisplay = () => {

        document.getElementById("EditAnimalModal"+animal.animalid).classList.add("is-active")
    }

    const deleteModalDisplay = () => {

        document.getElementById("DeleteAnimalModal"+animal.animalid).classList.add("is-active")
    }

    return (
        <div>
            <EditAnimalModal selectedAnimal={props.animal} setAnimal={setAnimal} />
            <DeleteAnimalModal selectedAnimal={props.animal} setAnimal={setAnimal}/>

            <div className="columns is-centered mb-6">
            <div className="column is-two-thirds">
                <div class="columns card">
                    <div className="column has-text-centered">
                        <div class="my-5">
                            <img src="AnimalAvatar.png" alt="Sora"></img>
                        </div>
                        <div class="my-6">
                            <div>
                                <button id="EditAnimalButton" class= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={editModalDisplay}>
                                    <span class="icon is-small">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                    <h3 class="has-text-weight-bold">Edit Animal</h3>
                                </button>
                            </div>
                            <div>
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2 " onClick={deleteModalDisplay}>
                                    <span class="icon is-small">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                    <h3 class="has-text-weight-bold">Delete Animal</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        {
                            Object.entries(animal).map(([att, value]) => <Card att={att} value={value}/>) 
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
    
};

export default ManageAnimalsCard;