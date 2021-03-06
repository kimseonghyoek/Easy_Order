import React from "react";
import './app.scss'
import { Link, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Singup";
import SelectPage from "./page/selectPage";

const App = () => {
  return (
    <div id="firstPage">
      <Routes>
        <Route path="/" element={<SelectPage/>}></Route>
        <Route path="/ceoLogin" element={<Login/>}/>
        <Route path="/ceoLogin/Signup" element={<Signup/>}/>
      </Routes> 
    </div>
  )
}

export default App;