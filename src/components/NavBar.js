import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand font-bold" href="/login">
              <h2>RugnaSeva</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/newReg"
                  >
                    New Registration
                  </Link>
                </li> */}
                <li className="nav-item ">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/hosSel"
                  >
                    Hospital Selection
                  </Link> */}
                {/* </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">
                    Features
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">
                    Pricing
                  </a>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li> */}
                {/* </ul> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
