import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar";
import SearchSelectorUser from "../components/SearchSelectorUser";
import ChangeAccess from "../components/ChangeAccess";
import UserInformationBox from "../components/UserInformationBox";
import EditModal from "../components/EditModal";
import ManageUsers from "../components/ManageUsersComponent"
import ChangePasswordModal from "../components/ChangePasswordModal";
import AddUserModal from "../components/AddUserModal";
import DeleteModal from "../components/DeleteUserModal";

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


    const [components, setComponents] = useState([]);

    const addComponent = () => {
        setComponents(userData)
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

    return(
        <div className="columns">
            <SideBar/>
            <ChangePasswordModal/>
            <EditModal/>
            <AddUserModal/>
            <DeleteModal/>
            <div className="column">
            
            <Header changePassword = {changePasswordModal} editAccount = {editAccountModal} />
                <div>
                <SearchBar addComponent={addComponent}/>
                <SearchSelectorUser/>    
                    {components.map((item) => (<ManageUsers user={item} addModal = {addUserModal} editModal = {editUserModal} deleteModal = {deleteUserModal}/>))}
                </div>
            </div>
        </div>
        
    )
};

export default ManageUsersPage;