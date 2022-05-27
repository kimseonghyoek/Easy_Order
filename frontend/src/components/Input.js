import React from 'react';
import './scss/input.scss'

const Input = (props) => {
  return (
    <div>
      <input placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input;