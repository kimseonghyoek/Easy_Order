import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Socal from "../components/Socal";

const Login = () => {

  const [idState, setIdState] = React.useState('');
  const [pwState, setPwState] = React.useState('');

  return (
    <div id="loginWrap">
      <h1 className="loginTitle">이지 오더</h1>
      <div>
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호"></Input>
        <button className="loginBtn">로그인</button>
      </div>
      <Link to="Signup">
        <p id="signUp">아직 가입하지 않으셨나요?</p>
      </Link>
      <p>소셜 로그인</p>
      <div className="wrap__Row">
        <Socal logo="KAKAO"></Socal>
        <Socal logo="Naver"></Socal>
      </div>
    </div>
  );
};

export default Login;