import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Box from "../container/Box";
import '../app.scss';

const SelectPage = () => {
  return (
    <div id='titles'>
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
    </div>
  );
}

export default SelectPage;