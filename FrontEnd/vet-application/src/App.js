import React from "react";
import SearchPage from "./views/SearchPage"
import LoginPage from "./views/LoginPage"
import ManageAnimalsPage from "./views/ManageAnimalsPage";
import ManageUsersPage from "./views/ManageUsersPage";
import AnimalPage from "./views/AnimalPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom"


function App() {
  
  return (
      <BrowserRouter>
        <Routes >
          {/* path here is the website URL */}
          <Route path="" element = {<LoginPage/>} />
          <Route path="/search" element = {<SearchPage/>}/>

          <Route path="/animals" element={<ManageAnimalsPage/>} />
          <Route path="/animals/:id" element={<AnimalPage/>} />
          <Route path="/users" element={<ManageUsersPage/>} />
        </Routes>
      </BrowserRouter>
  )}

export default App;
