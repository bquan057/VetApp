import React from "react";


const AnimalCard = (props) => {

    const animal = props.animal
    const weightModal = props.weightModal

    function Card (att) {
        let label = att.att
        label = label.toUpperCase()
        return(
            <div className="column is-half">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h1 class="has-text-weight-bold has-text-primary-dark">{label}</h1>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <input class="input is-small is-primary is-rounded" type="text" placeholder={att.value} disabled />
                    </div>
                </div>
            </div>
            </div>
        )
    }


    return(
        <div className="columns is-centered mb-6">
        <div className="column is-three-quarters">
            <div class="columns card">
                <div className="column has-text-centered">
                    <div className="title has-text-primary-dark has-text-weight-bold">Animal Information</div>
                    <div className="columns">
                        <div className="column is-centered is-one-third">
                            
                            <img src="data:image/png;base64,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" alt={animal.name}/>
                            <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={weightModal} >View Weight History</button>
                        </div>
                        <div className="column is-centered">
                            <div className="columns is-multiline">
                                {
                                    Object.entries(animal).map(([att, value]) => <Card att={att} value={value}/>) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
};

export default AnimalCard;