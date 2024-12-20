import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ searchData }) {
    return (
        <>
        <nav className="navbar">
            <Link to="/">
                <Logo/>
            </Link>
            <Search
                placeholder="Search a song of your choice"
                searchData={searchData}
            />
            <Button>Give Feedback</Button>
        </nav>
        </>
    )
}

export default Navbar;