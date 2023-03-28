import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import userIcon from "../../assets/icons/user.png";
const Header = () => {
    const [query, setQuery] = useState("");
    function xSearch(event) {
        setQuery(event.target.value);
    }
    return (
        <header>
            <h1>abhiXweb</h1>
            <div className="searchQuery">
                <input className="searchInput" type="text" name="q" value={query} onChange={xSearch} />
                <input className="searchBtn" type="submit" name="search" />
            </div>
            <img src={userIcon} width="50" />
        </header>
    )
}
export default Header