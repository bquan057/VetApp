
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

        const role = sessionStorage.getItem('role')

        if(role === 'Health Technician'){
            axios.get("http://localhost:8080/request/search?bookingstatus=Approved_By_Admin")
                .then((res) => {
                console.log(res)
                setRequests(res.data)
                })
                .catch((err) => alert(err))

        }else{

            axios.get("http://localhost:8080/request/search?bookingstatus=New")
                .then((res) => {
                    console.log(res)
                    setRequests(res.data)
                })
                .catch((err) => alert(err))
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