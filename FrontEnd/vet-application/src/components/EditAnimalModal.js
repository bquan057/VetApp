import React from "react";

const EditAnimalModal = ({selectedAnimal}) => {

    const modalClose = () => {
        document.getElementById("EditAnimalModal"+selectedAnimal.animalid).classList.remove('is-active');
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
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.animalname}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Id:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.animalid}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Tattoo:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.tattoo}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Age:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.age}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Birthdate:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.birthdate}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Breed:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.breed}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Sex:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.sex}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Coat Colour:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.coatcolour}></input>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.species}></input>
                                    </div>
                                </div>
                                
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">Active:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.isactive}></input>
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div className="column is-one-third">
                                        <h1 class="has-text-weight-bold has-text-primary-dark">RFID:</h1>
                                    </div>
                                    <div className="column">
                                        <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={selectedAnimal.rfid}></input>
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