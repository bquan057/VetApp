import React from "react";

const AddAnimalModal = () => {

    const modalClose = () => {
        document.getElementById('AddAnimalModal').classList.remove('is-active');
    }

    return (
        <div class="modal" id="AddAnimalModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="modal-card-body">
                    <h1 class="has-text-weight-bold has-text-primary-dark has-text-centered">Add Animal</h1>
                        <div className = "columns my-3">
                            <div class="column">
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
                            <div class="column">
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Species"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Problems:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Problems"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Comments:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Comments"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Continuous Medication:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Continuous Medication"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Special Instructions:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Special Instructions"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Active:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Active"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">RDIF ID:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="RDIF"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Microchip:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder="Microchip"></input>
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                                        <span class="icon is-small">
                                            <i class="fas fa-save"></i>
                                        </span>
                                        <h3 class="has-text-weight-bold">Save</h3>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={modalClose}></button>
        </div>
    )
}

export default AddAnimalModal;