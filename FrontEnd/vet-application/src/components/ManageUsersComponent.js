import React, {useState} from "react";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBarUser";
import SearchSelectorAnimal from "../components/SearchSelectorUser";
import ChangeAccess from "../components/ChangeAccess";
import UserInformationBox from "../components/UserInformationBox";
import Modal from "../components/EditModal";
import AddModal from "../components/AddUserModal";



const ManageUsersComponent = ({user, handleClick, handleClickAgain}) => {


    return(      
            <div className = "columns is-centered">
                <div className = "column is-one-third has-text-centered">
                    <ChangeAccess/>
                    <div className = "my-3"></div>
                    <div>
                        <button onClick = {handleClickAgain} className= "button has-text-weight-bold has-text-primary-dark is-rounded">Add User</button>
                    </div>
                    <div className = "my-3"></div>
                    <div>
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Delete User</button>
                    </div>

                </div>
                <div className = "column is-half">
                    {/* {components.map((item) => (<ManageUsers userInfo={item}/>))} */}
                    <UserInformationBox userInfo = {user} handleClick={handleClick}/>
                </div>
        </div>
    )
};

export default ManageUsersComponent;