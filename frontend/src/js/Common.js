// 객체 리터럴
const Common = {};

Common.modalState = '';

Common.checkSignUp = (email, name, pw, rePw) => {
  if(email == '') {
    Common.modalState = '01';
    alert(Common.modalState)
  }

  if(pw == '') {
    Common.modalState = '02';
    alert(Common.modalState)
  }

  if(name == '') {
    Common.modalState = '03';
    alert(Common.modalState)
  } 

  if(pw != rePw) {
    Common.modalState = '04';
    alert(Common.modalState)
  }
}

export default Common;