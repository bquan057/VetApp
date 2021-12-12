import { useEffect, useState } from "react"
import treatmentData from "../data/treatmentData"


const TreatmentHistoryModal = (props) => {

    const id = props.animal
    const modalClose = () => {
        document.getElementById('TreatmentHistory').classList.remove('is-active');
        document.querySelector('#newWeight').value = ''
    }

    const Row = ({treatment}) => {
        
        return(
            <tr>
                <th className="has-text-primary">{treatment.timeStamp}</th>
                <th className="has-text-primary">{treatment.attName}</th>
                <th className="has-text-primary">{treatment.techName}</th>
                <td className="has-text-primary">{treatment.method}</td>
            </tr>
        )
    }



    return(
        <div className="modal" id="TreatmentHistory">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-content has-background-white py-5 px-6" >
                <div className="columns is-centered">
                    <table className="table">
                        <thead>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold">Date</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Requested By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Performed By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Method</th>
                        </thead>
                        <tfoot >
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold">Date</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Requested By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Performed By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Method</th>
                        </tfoot>
                        <tbody>
                            {

                                treatmentData.filter(treatment => treatment.animalid==id && treatment.isComplete == 'true').map(filteredTreament =>(<Row treatment= {filteredTreament}/>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default TreatmentHistoryModal;