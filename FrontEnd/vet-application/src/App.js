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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchPage/>} />
        <Route path="Animals/" element={<ManageAnimalsPage/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
