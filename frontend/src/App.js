import React from "react";
import './app.scss'
import Box from "./container/Box";
import ceo from '../src/public/img/mapIMG.png';
import { Link, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SelectPage from "./page/selectPage";

const App = () => {
  
  return (
    <div id="firstPage">
      <Routes>
        <Route path="/" element={<SelectPage/>}></Route>
        <Route path="/ceoLogin" element={<Login/>}/>
      </Routes>  
      <div className="wrap__Row">
        <Link to="/ceoLogin">
          <Box boxTitle="사장님"/>
        </Link>
        <Link to="/guestLogin">
          <Box boxTitle="손님"/>
        </Link>
      </div>
    </div>
  )
}

export default App;