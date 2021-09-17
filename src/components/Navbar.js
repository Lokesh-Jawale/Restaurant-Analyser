import React from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink exact activeClassName="active" to="/" className="inactive">
                Form
            </NavLink>
            <NavLink exact activeClassName="active" to="/table" className="inactive">
                Table
            </NavLink>
        </nav>
    )
}

export default Navbar;
