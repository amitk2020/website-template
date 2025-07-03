import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img
                    src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                MyBrand
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            More
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#about">About</a></li>
                            <li><a className="dropdown-item" href="#contact">Contact</a></li>
                        </ul>
                    </li>
                </ul>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </div>
    </nav>
);

export default Header;
