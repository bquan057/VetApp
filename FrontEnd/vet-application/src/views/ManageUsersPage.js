import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";


const ManageUsersPage = () => {
    return(
        <div class="columns">
            <SideBar/>
            <div class="column">
                <Header/>
            </div>
        </div>
    )
};

export default ManageUsersPage;