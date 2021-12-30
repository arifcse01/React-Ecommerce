import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><h2>React E-Commerce</h2></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="button">
                            <button className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login
                            </button>
                            <button className="btn btn-outline-dark mx-2">
                                <i className="fa fa-user-plus me-1"></i> Register
                            </button>
                            <button className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-1"></i> Cart(0)
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;