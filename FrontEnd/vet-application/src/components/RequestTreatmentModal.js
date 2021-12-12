import React from "react";


const RequestTreatmentModal = (props) => {

    const id = props.animal

    const modalClose = () => {
        document.getElementById('TreatmentModal').classList.remove('is-active');
    }

    function handleSubmit(){
        document.getElementById('TreatmentModal').classList.remove('is-active');
    }

    const TreatmentList = () => {
        
        return(
            <option>option 2</option>
        )
    }
    
    
    return ( 
        <div className = 'modal' id = 'TreatmentModal'>
            <div className="modal-background" onClick={modalClose} />
            <div className="section modal-card has-background-white">
                <div className="columns is-centered is-multiline is-vcentered">
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Requested Technician: </label>
                    </div>
                    <div className="column is-half">
                        <input class="input is-small is-primary is-rounded" type="text"/>
                    </div>
                    <div className="column is-two-fifths">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Treatment Method </label>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="select is-rounded">
                            <select>
                                <TreatmentList/>
                                <TreatmentList/>   
                                <TreatmentList/>   
                                <TreatmentList/>                                       
                            </select>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={handleSubmit}>Submit</button>
                    </div>
                    </div>
            </div> 
        </div>

    );
}
 
export default RequestTreatmentModal;