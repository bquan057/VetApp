import React from "react";
import SearchPage from "./views/SearchPage"
import LoginPage from "./views/LoginPage"
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
        <Routes >
          {/* path here is the website URL */}
          <Route path="" element = {<LoginPage/>} />
          <Route path="/search" element = {<SearchPage/>} />
          {/* <LoginPage/> */}
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
