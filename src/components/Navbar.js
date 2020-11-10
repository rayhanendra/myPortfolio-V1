import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div to='/' className="navbar-title">
                        Ray
                    </div> 
                    <div className="navbar-list">
                        <Link to='/' className="navbar-item">
                            Home
                        </Link> 
                        <Link to='/' className="navbar-item">
                            About
                        </Link> 
                        <Link to='/' className="navbar-item">
                            Projects
                        </Link> 
                        <Link to='/' className="navbar-item">
                            Contact
                        </Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
