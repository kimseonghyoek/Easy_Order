import axios from 'axios';
import React from 'react';
import Input from '../components/Input';
import Common from '../js/Common';
import './scss/signup.scss';

const Signup = (props) => {

  const emailUpdate = (id) => {
    setEmail(
      id.target.value
    )
  }

  const nameUpdate = (name) => {
    setnickname(
      name.target.value
    )
  }

  const pwUpdate = (pw) => {
    setPw(
      pw.target.value
    )
  }

  const rePwUpdate = (pw) => {
    setRePw(
      pw.target.value
    )
  }

  const submit = (e) => {
    Common.checkSignUp(email, nickname, pw, rePw);
  }

  const [email, setEmail] = React.useState('');
  const [nickname, setnickname] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [rePw, setRePw] = React.useState('');

  return (
    <div className='loginWrap'>
      <h1 className='loginTitle'>이지 오더에 오신것을 환영합니다!</h1>
      <p className='notice'>이메일을 입력하세요.</p>
      {/* <input placeholder='이메일 주소' onChange={stateUpdate}></input> */}
      <Input placeholder="이메일 주소" name="email" change={emailUpdate}></Input>
      <p className='notice'>매장 이름을 입력하세요.</p>
      <Input placeholder="이름" name="name" change={nameUpdate}></Input>
      <p className='notice'>비밀번호를 입력하세요.</p>
      <Input placeholder="비밀번호" name="password" change={pwUpdate}></Input>
      <p className='notice'>비밀번호 확인</p>
      <Input placeholder="비밀번호 확인" change={rePwUpdate}></Input>
      <button className='loginBtn' onClick={submit}>회원가입</button>
    </div>
  )
}

export default Signup;