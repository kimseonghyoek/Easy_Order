import React from 'react';
import './scss/input.scss'

const Input = (props) => {
  return (
    <div>
      <input placeholder={props.placeholder} name={props.name} onChange={props.change}></input>
    </div>
  )
}

export default Input;