import React from "react";

const ManageAnimalsCard = ({animal, editAnimalModal, deleteAnimalModal, requestAnimalModal}) =>{

    return (
    <div className="columns is-centered mb-6">
        <div className="column is-two-thirds">
            <div class="columns card">
                <div className="column has-text-centered">
                    <div class="my-5">
                        <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bulma.Dragon-Ball.webp" alt="Bulma"></img>
                    </div>
                    <div class="my-6">
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={editAnimalModal}>
                                <span class="icon is-small">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <h3 class="has-text-weight-bold">Edit Animal</h3>
                            </button>
                        </div>
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2 " onClick={deleteAnimalModal}>
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <h3 class="has-text-weight-bold">Delete Animal</h3>
                            </button>
                        </div>
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={requestAnimalModal}>
                                <span class="icon is-small">
                                    <i class="fas fa-bookmark"></i>
                                </span>
                                <h3 class="has-text-weight-bold">Request Animal</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Name:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.name}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Id:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.id}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Weight:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.weight}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Tattoo:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.tattoo}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">City Tattoo:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.cityTattoo}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Age:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.age}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Birthdate:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.birthdate}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Breed:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.breed}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Sex:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.sex}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Coat Colour:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.coatColour}></input>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
};

export default ManageAnimalsCard;