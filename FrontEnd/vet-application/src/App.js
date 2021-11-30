import React from "react";
import SearchPage from "./views/SearchPage"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import ManageAnimalsPage from "./views/ManageAnimalsPage";
import ManageUsersPage from "./views/ManageUsersPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchPage/>} />
        <Route path="Animals/" element={<ManageAnimalsPage/>} />
        <Route path="Users/" element={<ManageUsersPage/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
