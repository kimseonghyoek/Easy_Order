// 회원가입
const signUpCheck = (email, name, pw, rePw) => {
  if (email == '') {
    alert('이메일은 필수 입력입니다.');
  }

  if (name == '' ) {
    alert('매장명은 필수 입력입니다.');
  }

  if (pw == '') {
    alert('비밀번호는 필수 입력입니다.');
  }

  if (pw != rePw) {
    alert('비밀번호가 서로 다릅니다.')
  }
}

export default signUpCheck; 