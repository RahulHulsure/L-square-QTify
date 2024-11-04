import React from "react";
import "./Search.css"; // Importing the global CSS file
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeholder }) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="wrapper" onSubmit={onSubmit}> {/* Use global class */}
            <input className="search" required placeholder={placeholder} />
            <button className="searchButton" type="submit">
                <SearchIcon />
            </button>
        </form>
    );
}

export default Search;
