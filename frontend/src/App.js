import React from "react";
import './app.scss'
import Box from "./container/Box";
import ceo from '../src/public/img/mapIMG.png';
import { Link, Route, Routes } from "react-router-dom";
import Login from "./page/Login";

const App = () => {
  
  return (
    <div id="firstPage">
      <h1 className="title">이지 오더</h1>
      <h4 className="subTitle">음식 주문을 보다 쉽게</h4>
      <h1>Easy Order</h1>
      <div className="wrap__Row">
        <Link to="/ceoLogin">
          <Box boxTitle="사장님"/>
        </Link>
        <Link to="/guestLogin">
          <Box boxTitle="손님"/>
        </Link>
      </div>
      <Routes>
        <Route path="/ceoLogin" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;