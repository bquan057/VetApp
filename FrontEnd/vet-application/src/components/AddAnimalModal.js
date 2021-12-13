import axios from "axios";
import React from "react";

const AddAnimalModal = () => {

    const modalClose = () => {
        document.getElementById('AddAnimalModal').classList.remove('is-active');
    }

    const addAnimal = () => {

        var newName = document.getElementById("NameInput").value
        var newTattoo = document.getElementById("TattooInput").value
        var newAge = document.getElementById("AgeInput").value
        var newBirthdate = document.getElementById("BirthdateInput").value
        var newBreed = document.getElementById("BreedInput").value
        var newSex = document.getElementById("SexInput").value
        var newCoatColour = document.getElementById("CoatColourInput").value
        var newSpecies = document.getElementById("SpeciesInput").value
        var newIsActive = document.getElementById("IsActiveInput").value
        var newRFID = document.getElementById("RFIDInput").value
        var newAvailability = document.getElementById("AvailabilityInput").value

        const newAnimal = {
            animalname: newName,
            tattoo: newTattoo,
            age: newAge,
            birthdate: newBirthdate,
            breed: newBreed,
            sex: newSex,
            coatcolour: newCoatColour,
            species: newSpecies,
            isactive: newIsActive,
            rfid: newRFID,
            availability: newAvailability
        }

        axios.post("http://localhost:8080/animal", newAnimal)
            .then(modalClose())

        window.location.reload(true)

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
                                        <input id="NameInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Name"></input>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Tattoo:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="TattooInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Tattoo"></input>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Age:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="AgeInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Age"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Birthdate:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="BirthdateInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Birthdate"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Breed:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="BreedInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Breed"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Sex:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="SexInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Sex"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Coat Colour:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="CoatColourInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Coat Colour"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="SpeciesInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Species"></input>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Is Active:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="IsActiveInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Active"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">RFID:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="RFIDInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="RFID"></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Availability:</h1>
                                    </div>
                                    <div className="column">
                                        <input id="AvailabilityInput" class="input is-primary is-rounded has-text-centered" type="text" placeholder="Availability"></input>
                                    </div>
                                </div>
                               
                                <div className="has-text-centered">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={addAnimal}>
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