import React from "react";

const EditAnimalModal = ({animal}) => {

    const modalClose = () => {
        document.getElementById("EditAnimalModal").classList.remove('is-active');
    }

    // var modalid = animal.id + "EditAnimalModal"

    return (
        <div class="modal" id="EditAnimalModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="modal-card-body">
                    <h1 class="has-text-weight-bold has-text-primary-dark has-text-centered">Edit Animal</h1>
                        <div className = "columns my-3">
                            <div class="column">
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
                            <div class="column">
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.species}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Problems:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.problems}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Comments:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.comments}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Continuous Medication:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.medication}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Special Instructions:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.instructions}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Active:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.isActive}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">RDIF ID:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.rdif}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Microchip:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.hasMicrochip}></input>
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

export default EditAnimalModal;