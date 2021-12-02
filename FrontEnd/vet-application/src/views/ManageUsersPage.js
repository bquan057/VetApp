import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar";
import SearchSelectorUser from "../components/SearchSelectorUser";
import ChangeAccess from "../components/ChangeAccess";
import UserInformationBox from "../components/UserInformationBox";
import Modal from "../components/EditModal";
import AddModal from "../components/AddUserModal";
import ManageUsers from "../components/ManageUsersComponent"

const ManageUsersPage = () => {

    let userData = [
        {
            id:1,
            // imgPath:"/sora.jpg",
            name: "Emily"
        },
        {
            id:2,
            // imgPath:"/sora.jpg",
            name: "Emily"
        },
        {
            id:2,
            // imgPath:"/sora.jpg",
            name: "Emily"
        },
        {
            id:2,
            // imgPath:"/sora.jpg",
            name: "Sora2"
        },
        {
            id:2,
            // imgPath:"/sora.jpg",
            name: "Sora2"
        }
    ];

    const [isModal, setismodal] = useState(false)
    const [isModal2, setismodal2] = useState(false)

    const handler = () => {
        setismodal(true);
    }

    const handlerClose =() =>{
        setismodal(false);
    }

    const addUserHandler = () =>{
        setismodal2(true);
    }

    const addUserhandlerClose =() =>{
        setismodal2(false);
    }

    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(userData)
        // console.log(userData[0]);
    }

    return(
        <div className="columns">
            <SideBar/>
            <div className="column">
            {(!isModal && !isModal2) && <Header/>}
                
                {isModal && <Modal handleClose = {handlerClose}/>}
                {isModal2 && <AddModal handleClose = {addUserhandlerClose}/>}
                

                {(!isModal && !isModal2) && 
                <div>
                <SearchBar addComponent={addComponent}/>
                <SearchSelectorUser/>    
                    {components.map((item) => (<ManageUsers user={item} handleClick = {handler} handleClickAgain = {addUserHandler}/>))}
                </div>
                }
            </div>
        </div>
        
    )
};

export default ManageUsersPage;