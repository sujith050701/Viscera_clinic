import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <Link className="navbar-brand p-0" to="/">
                    <h1 className="m-0 text-primary">Viscera</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/doctors">Doctors</Link>
                        <Link className="nav-item nav-link" to="/product">Product</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                        
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/branch">Branches</Link></li>
                                <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                                <li><Link className="dropdown-item" to="/testimonial">Testimonials</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <Link className="btn btn-primary py-2 px-4 ms-3" to="/appointment">Appointment</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
