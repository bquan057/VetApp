import React from "react";

const RequestAnimalModal = () => {

    const modalClose = () => {
        document.getElementById('RequestAnimalModal').classList.remove('is-active');
    }

    return (
        <div class="modal" id="RequestAnimalModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="columns card">
                    <div className="column has-text-centered">
                        <h1>THIS IS THE REQUEST ANIMAL MODAL</h1>
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
                                <h1 class="has-text-weight-bold has-text-primary-dark">Name:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Name"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Id:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Id"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Weight:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Weight"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Tattoo:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Tattoo"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">City Tattoo:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="City Tattoo"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Age:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Age"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Birthdate:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Birthdate"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Breed:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Breed"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Sex:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Sex"></input>
                            </div>
                        </div>
                        <div class="columns is-vcentered">
                            <div className="column is-one-third">
                                <h1 class="has-text-weight-bold has-text-primary-dark">Coat Colour:</h1>
                            </div>
                            <div className="column">
                                <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Coat Colour"></input>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={modalClose}></button>
        </div>
    )
}

export default RequestAnimalModal;