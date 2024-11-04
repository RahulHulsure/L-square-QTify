import React from "react";
import "./Button.css"; // Importing the global CSS file

function Button({ children }) {
    return <button className="button">{ children }</button>; // Use global class
}

export default Button;
