import React from "react";
import "./navbar.css"; // Import the CSS file
import LogoImage from "../images/logo.png"; // Updated path
import { ReactComponent as SearchIcon } from "../images/search-icon.svg"; // Updated path


function Navbar() {
    const onSubmit = (e) => {
        e.preventDefault();
        // Submission logic can be added here
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <img src={LogoImage} alt="logo" width={67} />
            {/* Search Bar */}
            <form className="searchform" onSubmit={onSubmit}>
                <input className="search" placeholder="Search album of your choice" required />
                <button className="searchButton" type="submit">
                    <SearchIcon />
                </button>
            </form>
            {/* Feedback Button */}
            <button className="button">Give Feedback</button>
        </nav>
    );
}

export default Navbar;
