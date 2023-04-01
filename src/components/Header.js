import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import userIcon from "../../assets/icons/user.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1><Link to="/">abhiXweb</Link></h1>
            <nav className="site-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
            <img src={userIcon} width="50" />
        </header>
    )
}
export default Header