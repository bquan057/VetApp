import React from "react";

const AnimalCard = () => {

    return(
        <div className="columns is-centered mb-6">
        <div className="column is-two-thirds">
            <div class="columns card">
                <div className="column has-text-centered">
                    <div class="my-5">
                        <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bulma.Dragon-Ball.webp" alt="Bulma"></img>
                    </div>
                    <div class="my-6">
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                                <span class="icon is-small">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <h3 class="has-text-weight-bold">Edit Animal</h3>
                            </button>
                        </div>
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <h3 class="has-text-weight-bold">Delete Animal</h3>
                            </button>
                        </div>
                        <div>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
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
                            <h1 class="has-text-weight-bold">Name:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Id:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Weight:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Tattoo:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">City Tattoo:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text"></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Age:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text"></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Birthdate:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text"></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Breed:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Sex:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold">Coat Colour:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" ></input>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    )
};

export default AnimalCard;