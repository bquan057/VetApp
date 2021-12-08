
import React, {useState, useEffect} from "react";
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import axios from "axios";
import "bulma/css/bulma.css";
import ManageRequestsBox from "../components/ManageRequestsBox";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import getUser from "../components/GetUser";

const ManageRequest = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const user = getUser()
        const role = user.role

        if(role === 'ROLE_TECHNICIAN'){
            axios.get("http://localhost:8080/requests/approved_by_admin")
                .then((res) => {
                console.log(res)
                setRequests(res.data)
                }
            )

            const id = requests.animalid

            const updateToAnimal = {
                animalid:id,
                status:"booked"
            }
            axios.put("http://localhost:8080/animal", updateToAnimal)
        }else{

            axios.get("http://localhost:8080/requests/new")
                .then((res) => {
                    console.log(res)
                    setRequests(res.data)
                }
            )
        }


    }, []);


    return ( 
        <div className="columns">
            <SideBar/>
            <div className="column">
                <Header/> 
                <h2 className = "title is-size-3 has-text-primary-dark has-text-centered ml-5">My Animal Requests</h2>
                <div className = "my-6"></div>
                <div className = "columns is-centered">
                    <div className = "column is-two-thirds">
                        {requests.map(item=> <ManageRequestsBox request= {item}/>)}
                    </div>
                </div>
            </div>
        </div>   
    );
}
 
export default ManageRequest;