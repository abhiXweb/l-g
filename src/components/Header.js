import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import userIcon from "../../assets/icons/user.png";
const Header = () => {
    return (
        <header>
            <h1>abhiXweb</h1>
            <img src={userIcon} width="50" />
        </header>
    )
}
export default Header