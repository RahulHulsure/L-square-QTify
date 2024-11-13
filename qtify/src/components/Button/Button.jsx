import React from "react";
import "./Button.css";

function Button({ children }) {
    return <button className="feedbackButton">{children}</button>
}

export default Button;