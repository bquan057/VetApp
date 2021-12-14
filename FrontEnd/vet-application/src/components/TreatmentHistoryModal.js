import { useEffect, useState } from "react"
import axios from "axios";


const TreatmentHistoryModal = (props) => {

    

    const modalClose = () => {
        document.getElementById('TreatmentHistory').classList.remove('is-active');
        document.querySelector('#newWeight').value = ''
    }

    const [treatments, setTreatments] = useState([])

    useEffect(() => {

        let id = props.animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/treatment?status=complete"
        axios.get(apiendpoint)
            .then((res) => {
                    setTreatments(res.data)
                }
            )
    }, []);


    const Row = ({treatment}) => {
        
        return(
            <tr>
                <th className="has-text-primary">{treatment.timestamp}</th>
                <th className="has-text-primary">{treatment.attendantid}</th>
                <th className="has-text-primary">{treatment.technicianid}</th>
                <td className="has-text-primary">{treatment.treatmentmethod}</td>
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
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Attendant ID</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Technician ID</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Method</th>
                        </thead>
                        <tfoot >
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold">Date</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Requested By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Performed By</th>
                            <th className="is-size-6 has-text-primary-dark has-text-weight-bold has-text-centered">Method</th>
                        </tfoot>
                        <tbody>
                            {treatments.map(treatment=>(<Row treatment= {treatment}/>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default TreatmentHistoryModal;