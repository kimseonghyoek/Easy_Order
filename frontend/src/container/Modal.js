import React from 'react';

const Modal = ({modalTitle}) => {
  return (
    <div className='modalWrap'>
      <div className='modalHeader'>
        <h4>{modalTitle}</h4>
        <button className='closeBtn'>X</button>
      </div>
      <>
        <h1>Modal popup test</h1>
      </>
    </div>
  )
}

export default Modal;