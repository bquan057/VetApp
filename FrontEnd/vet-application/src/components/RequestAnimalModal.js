import React from "react";

const RequestAnimalModal = ({animal}) => {

    const modalClose = () => {
        document.getElementById('RequestAnimalModal').classList.remove('is-active');
    }

    return (
        <div class="modal" id="RequestAnimalModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div className="modal-card-body">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <img src="sora.jpg" alt="Sora"></img>
                        </div>
                        <div className="column">
                            <h1 className="has-text-centered has-text-weight-bold has-text-primary-dark mb-5">Would you like to request this animal?</h1>
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
                                <div className="column is-vcentered has-text-centered is-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                                        <span class="icon is-small">
                                            <i class="fas fa-check-circle"></i>
                                        </span>
                                        <h3 class="has-text-weight-bold">Confirm</h3>
                                    </button>
                                </div>
                                <div className="column is-vcentered has-text-centered is-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                                        <span class="icon is-small">
                                            <i class="fas fa-ban"></i>
                                        </span>
                                        <h3 class="has-text-weight-bold">Cancel</h3>
                                    </button>
                                </div>
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