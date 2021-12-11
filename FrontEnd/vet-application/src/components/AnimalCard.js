import React from "react";


const AnimalCard = ({animal, weightModal}) => {


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
                            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bulma.Dragon-Ball.webp" alt="Bulma"></img>
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