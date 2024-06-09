import './Header.css'
import {NavLink} from 'react-router-dom';
// import React from 'react';


export default function Header({ openSignUpModal, openLogInModal }){


  return (
    <header>
      <nav className="navbar navbar-expand-xxl navbar-dark bg-dark overflow-hidden">
        <div className="container">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Sidebar */}
          <div
            className="sidebar offcanvas offcanvas-end bg-dark"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center me-5">
              <ul className="navbar-nav justify-content-center flex-grow-1">
                <li className="nav-item log">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    onClick={() => offcanvas.close}
                  >
                    Homepage
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/pc-builder"
                    onClick={() => offcanvas.close}
                  >
                    PC-Builder
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/products"
                    onClick={() => offcanvas.close}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/guides"
                    onClick={() => offcanvas.close}
                  >
                    Guides
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/forum"
                    onClick={() => offcanvas.close}
                  >
                    Forum
                  </NavLink>
                </li>
                <li className="nav-item log">
                  <a
                    className="nav-link pointer"
                    onClick={openSignUpModal}
                    data-bs-dismiss="offcanvas"
                  >
                    {/* <button className="btn"> */}
                    Sign Up
                    {/* </button> */}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pointer"
                    onClick={openLogInModal}
                    data-bs-dismiss="offcanvas"
                  >
                    {/* <button className="btn"> */}
                    Log In
                    {/* </button> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}