import React from "react";
import SearchPage from "./views/SearchPage"
import LoginPage from "./views/LoginPage"
import ManageAnimalsPage from "./views/ManageAnimalsPage";
import ManageUsersPage from "./views/ManageUsersPage";
import AnimalPage from "./views/AnimalPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import ForgotPassword from "./components/ForgotPassword";
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom"
import TeacherRoutes from "./components/TeacherRoutes";
import MakeRequest from "./views/MakeRequest";


function App() {
  
  return (

      <BrowserRouter>
        <Routes >
          {/* path here is the website URL */}
          <Route path="" element = {<LoginPage/>} />
          <Route path = "/forgotPassword" element = {<ForgotPassword/>}/>
          <Route path="/search" element = {<SearchPage/>} />
          <Route element={<TeacherRoutes/>}>
              <Route path="/MakeRequest" element = {<MakeRequest/>} />
              <Route path="/MyRequest" element = {<MyRequest/>} />
          </Route>
          <Route element={<AdminRoutes/>}>
              <Route path="/ManageRequest" element = {<ManageRequest/>} />
          </Route>
        <Route path="/animals" element={<ManageAnimalsPage/>} />
        <Route path="/animals/:id" element={<AnimalPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/users" element={<ManageUsersPage/>} />
        </Routes>
      </BrowserRouter>

  )}

export default App;
