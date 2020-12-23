import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link className="navbar-brand" to="/">D15TR1KT</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/home">HOME</Link>
                    <Link className="nav-item nav-link" to="/about">ABOUT</Link>
                    <Link className="nav-item nav-link" to="/music">MUSIC</Link>
                    <Link className="nav-item nav-link" to="/projects">PROJECTS</Link>
                    <Link className="nav-item nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-item nav-link" to="/contact">CONTACT</Link>
                </div>
            </div>
        </nav>
    );
}