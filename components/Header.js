import React from "react";
import ReactDOM from "react-dom/client";
import userIcon from "../assets/icons/user.png";
const Header = () => (
    <header>
        <h1>abhiXweb</h1>
        <input type="text" name="searchQuery" />
        <img src={userIcon} width="50" />
    </header> )
export default Header