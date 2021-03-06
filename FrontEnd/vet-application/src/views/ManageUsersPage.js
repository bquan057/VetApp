import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBarUser from "../components/SearchBarUser";
import SearchSelectorUser from "../components/SearchSelectorUser";
import ChangeAccess from "../components/ChangeAccess";
import UserInformationBox from "../components/UserInformationBox";
import EditAccount from "../components/EditAccount";
import ManageUsers from "../components/ManageUsersComponent"
import ChangePasswordModal from "../components/ChangePasswordModal";
import AddUserModal from "../components/AddUserModal";
import DeleteModal from "../components/DeleteUserModal";
import BlockModal from "../components/BlockUserModal";
import axios from "axios";
import EditModal from "../components/EditModal";
import UnblockUserModal from "../components/UnblockUserModal";

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
        document.getElementById('EditAccount').classList.add('is-active');
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

    const unblockUserModal = () => {
        document.getElementById('UnblockModal').classList.add('is-active');
    }


    const buttonShow= () =>{
        const role = sessionStorage.getItem('role')

        if(role == "Admin"){
            return <div className = "columns is-centered">
            <label onClick = {()=> {addUserModal(); something()}} class="button is-primary is-light">
                <h1 className="has-text-weight-bold has-text-primary-dark ml-2"> Add New User </h1>
            </label>
            <div className= "mx-6"></div>
            <label  onClick = {unblockUserModal} class="button is-primary is-light">
                <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Manage Blocked Users</h1>
            </label>   
        </div>
        }else{
            return
        }
    }

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditAccount/>
            <AddUserModal/>n
            <EditModal id= {id}/>
            <DeleteModal id = {id}/>
            <BlockModal id = {id}/>
            <UnblockUserModal/>
            <div className="column">
            <Header changePassword = {changePasswordModal} editAccount = {editAccountModal} />
                <div>
                     {buttonShow()}
                    <SearchBarUser addComponents ={addComponents}/>
                    <SearchSelectorUser/>    
                    <div className = "columns is-centered">
                        <div className = "column is-two-thirds">
                        {components.map((item) => (<UserInformationBox user={item} blockModal = {blockUserModal} addModal = {addUserModal} editModal = {editUserModal} deleteModal = {deleteUserModal} handleId = {something}/>))}
                    </div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default ManageUsersPage;