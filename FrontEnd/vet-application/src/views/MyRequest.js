import React, {useState, useEffect} from "react";
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import RequestBox from "../components/RequestsBox"
import "bulma/css/bulma.css";
import axios from "axios";
import SearchSelectorAnimal from "../components/SearchSelectorAnimal";
import getUser from "../components/GetUser";

const MyRequest = () => {

    const[components, setComponents] = useState([]);

    useEffect(() => {
        const id = sessionStorage.getItem('id')

        axios.get("http://localhost:8080/request/search?teachingid="+id)
            .then((res) => {
                setComponents(res.data)
            }
        )
    }, []);
    
    return (      
        <div className="columns">
                <SideBar/>
            <div className="column">
                <Header/> 
                <div className = "my-6"></div>
                <div className = "columns is-centered">
                    <div className = "column is-two-thirds">
                        {components.map(item => <RequestBox request={item}/>)}
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default MyRequest;