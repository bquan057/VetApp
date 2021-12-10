import React, { useState } from "react";

// const ManageAnimalsCard = ({animal, editAnimalModal, deleteAnimalModal, requestAnimalModal}) =>{
const ManageAnimalsCard = (props) =>{

    const[animal, setAnimal] = useState(props.animal);

    function Card (att) {
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

    return (
        <div className="columns is-centered mb-6">
            <div className="column is-two-thirds">
                <div class="columns card">
                    <div className="column has-text-centered">
                        <div class="my-5">
                            <img src="sora.jpg" alt="Sora"></img>
                        </div>
                        <div class="my-6">
                            <div>
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick="editAnimalModal">
                                    <span class="icon is-small">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                    <h3 class="has-text-weight-bold">Edit Animal</h3>
                                </button>
                            </div>
                            <div>
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2 " onClick="deleteAnimalModal">
                                    <span class="icon is-small">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                    <h3 class="has-text-weight-bold">Delete Animal</h3>
                                </button>
                            </div>
                            <div>
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick="requestAnimalModal">
                                    <span class="icon is-small">
                                        <i class="fas fa-bookmark"></i>
                                    </span>
                                    <h3 class="has-text-weight-bold">Request Animal</h3>
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
    )
};

export default ManageAnimalsCard;