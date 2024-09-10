import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({ openSignUpModal, openLogInModal }) {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUsername(null);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-xxl navbar-dark bg-dark">
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
                <li className="nav-item">
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
                {/*Login check*/}
                {username ? (
                  <li className="nav-item dropdown user-profile">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome, {username}
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <button
                          className="dropdown-item btn-dark-red"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link pointer"
                        onClick={openSignUpModal}
                        data-bs-dismiss="offcanvas"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link pointer"
                        onClick={openLogInModal}
                        data-bs-dismiss="offcanvas"
                      >
                        Log In
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
