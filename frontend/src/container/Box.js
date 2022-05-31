import React from "react";
import "./scss/box.scss";
import { Route, Routes, Link } from "react-router-dom";
import Login from "../page/Login";

const Box = (props) => {
  return (
    <div>
      <button className="boxWrap">
        <p className="boxTitle">{props.boxTitle}</p>  
      </button>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Box;
