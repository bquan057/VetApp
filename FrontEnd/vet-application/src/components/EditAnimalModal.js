import React, { useState } from "react";
import axios from "axios";

const EditAnimalModal = (props) => {

    const[selectedAnimal, setSelectedAnimal] = useState(props.selectedAnimal)

    const modalClose = () => {
        document.getElementById("EditAnimalModal"+selectedAnimal.animalid).classList.remove('is-active');
    }

    const editAnimal = () => {

        var updatedTattoo
        var updatedAge
        var updatedIsActive
        var updatedRFID

        if (document.getElementById("TattooInput"+selectedAnimal.animalid).value) {
            updatedTattoo = document.getElementById("TattooInput"+selectedAnimal.animalid).value
        }
        else {
            updatedTattoo = document.getElementById("TattooInput"+selectedAnimal.animalid).placeholder
        }

        if (document.getElementById("AgeInput"+selectedAnimal.animalid).value) {
            updatedAge = document.getElementById("AgeInput"+selectedAnimal.animalid).value
        }
        else {
            updatedAge = document.getElementById("AgeInput"+selectedAnimal.animalid).placeholder
        }

        if (document.getElementById("ActiveInput"+selectedAnimal.animalid).value) {
            updatedIsActive = document.getElementById("ActiveInput"+selectedAnimal.animalid).value
        }
        else {
            updatedIsActive = document.getElementById("ActiveInput"+selectedAnimal.animalid).placeholder
        }

        if (document.getElementById("RFIDInput"+selectedAnimal.animalid).value) {
            updatedRFID = document.getElementById("RFIDInput"+selectedAnimal.animalid).value
        }
        else {
            updatedRFID = document.getElementById("RFIDInput"+selectedAnimal.animalid).placeholder
        }

        const updatedAnimal = {
            tattoo: updatedTattoo,
            age: updatedAge,
            isactive: updatedIsActive,
            rfid: updatedRFID
        }

        axios.put("http://localhost:8080/animal/"+selectedAnimal.animalid, updatedAnimal)
            .then((res)=> {props.setAnimal(res.data)
                 setSelectedAnimal(res.data)});

        modalClose()
    }
    
    return (
        <div class="modal" id={"EditAnimalModal"+selectedAnimal.animalid}>
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
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.animalname} disabled></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Id:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.animalid} disabled></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Tattoo:</h1>
                                    </div>
                                    <div className="column">
                                        <input id={"TattooInput"+selectedAnimal.animalid} class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.tattoo}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Age:</h1>
                                    </div>
                                    <div className="column">
                                        <input id={"AgeInput"+selectedAnimal.animalid} class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.age}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Birthdate:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.birthdate} disabled></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Breed:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.breed} disabled></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Sex:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.sex} disabled></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Coat Colour:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.coatcolour} disabled></input>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.species} disabled></input>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Is Active:</h1>
                                    </div>
                                    <div className="column">
                                        <input id={"ActiveInput"+selectedAnimal.animalid} class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.isactive}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">RFID:</h1>
                                    </div>
                                    <div className="column">
                                        <input id={"RFIDInput"+selectedAnimal.animalid} class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.rfid}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Availability:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.availability} disabled></input>
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={editAnimal}>
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