import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props : any) {
  return (
    <div className="TextBox">
        <label htmlFor={"ibox"}>{props.label}</label>
        <input type={"text"} id={"ibox"} name={"ibox"} onChange={(ev) => {props.change(ev.target.value);}}/>
    </div>
  );
}

export default TextBox;
