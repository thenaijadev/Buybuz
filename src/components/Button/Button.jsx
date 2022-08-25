import React from "react";
import Classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
