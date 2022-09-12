import React from "react";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <div>
      <nav className="navbar shadow-sm navbar-expand-lg bg-white py-3">
        <div className="container">
          <NavLink className="navbar-brand fs-5 fw-bold" to="/">
          <i className="fa fa-shopping-cart me-1"></i>
            AY Shopping
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-normal">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>  
            </ul>

            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark "><i className="fa fa-user me-1">
                    </i>Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-plus me-1">
                    </i>Register</NavLink> 
                <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1">
                    </i>Cart(0)</NavLink>   
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
