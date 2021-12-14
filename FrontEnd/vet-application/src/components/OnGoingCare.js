import { useEffect, useState } from "react"
import axios from "axios"


const OnGoingCare = () =>{

    const [careList, setCareList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/care")
            .then((res)=>
                setCareList(res.data)
            )
    }, [])



    const Row = ({care}) => {
        
        return(
            <tr>
                <th className="has-text-primary-dark">{care.animalid}</th>
                <td className="has-text-centered has-text-primary-dark">{care.animalname}</td>
                <td className="has-text-centered has-text-primary-dark">{care.care}</td>
                <td className="has-text-centered has-text-primary-dark">{care.duedate}</td>
            </tr>
        )
    }

    return (
        <div className="columns is-centered">
            <div className="column has-text-centered is-half">
                <div className="column card">
                    <div className="title has-text-primary-dark has-text-weight-bold">Upcoming Care</div>
                    <div className="columns is-centered is-full">
                        <table className="table">
                            <thead>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold">Animal Id</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Animal Name</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Description</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Date</th>
                            </thead>
                            <tbody>
                                {careList.map(care => <Row care={care}/>)}
                            </tbody>
                            <tfoot >
                            <th className="is-size-5 has-text-primary-dark has-text-weight-bold">Animal Id</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Animal Name</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Description</th>
                                <th className="is-size-5 has-text-primary-dark has-text-weight-bold has-text-centered">Date</th>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default OnGoingCare;