import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBarUser from "../components/SearchBarUser";
import SearchSelectorUser from "../components/SearchSelectorUser";
import ChangeAccess from "../components/ChangeAccess";
import UserInformationBox from "../components/UserInformationBox";
import EditModal from "../components/EditModal";
import ManageUsers from "../components/ManageUsersComponent"
import ChangePasswordModal from "../components/ChangePasswordModal";
import AddUserModal from "../components/AddUserModal";
import DeleteModal from "../components/DeleteUserModal";
import BlockModal from "../components/BlockUserModal";
import axios from "axios";

const ManageUsersPage = () => {

    //create useState on this page because EditModal is rendered on this page
    const [id, setId] = useState("");

    const something = (id) => {
        setId(id);
    }

    const [components, setComponents] = useState([]);

    var addComponents = () => {
        var apiEndpoint = ""

        if(document.getElementById("search_by_student").checked){
            console.log(document.getElementById("search_bar_user").value);
            apiEndpoint = "http://localhost:8080/user/search?student=" + document.getElementById("search_bar_user").value

        }
        else if(document.getElementById("search_by_staff").checked){
            apiEndpoint = "http://localhost:8080/user/search?staff=" + document.getElementById("search_bar_user").value   
        }
        else if(document.getElementById("search_by_management").checked){
            apiEndpoint = "http://localhost:8080/user/search?management=" + document.getElementById("search_bar_user").value
        }
        axios.get(apiEndpoint).then((res) => {
            setComponents(res.data)
        })

    }


    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditModal').classList.add('is-active');
    }

    const addUserModal = () => {
        document.getElementById('AddUserModal').classList.add('is-active');
    }
    const editUserModal = () => {
        document.getElementById('EditModal').classList.add('is-active');
    }
    const deleteUserModal = () => {
        document.getElementById('DeleteModal').classList.add('is-active');
    }
    const blockUserModal = () => {
        document.getElementById('BlockModal').classList.add('is-active');
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            {/* passes the id to EditModal */}
            <EditModal id = {id}/>
            <AddUserModal/>
            <DeleteModal/>
            <BlockModal/>
            <div className="column">
            
            <Header changePassword = {changePasswordModal} editAccount = {editAccountModal} />
                <div>
                    <SearchBarUser addComponents ={addComponents}/>
                    <SearchSelectorUser/>    
                    {/* {components.map((item) => (<UserInformationBox user={item} blockModal = {blockUserModal} addModal = {addUserModal} editModal = {editUserModal} deleteModal = {deleteUserModal} />))} */}
                    {components.map((item) => (<ManageUsers user={item} blockModal = {blockUserModal} addModal = {addUserModal} editModal = {editUserModal} deleteModal = {deleteUserModal} handleId = {something}/>))}
                </div>
            </div>
        </div>
        
    )
};

export default ManageUsersPage;