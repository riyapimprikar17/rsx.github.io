import React, { Component } from "react";
// import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export class Registration extends Component {
  render() {
    return (
      <div className="main_sc justify-content-center  p-5">
        {/* <img className="img-fluid" src="/images/reg_photo.jpg" alt="/" /> */}
        <form className="login_pg_left">
          <h3 className="justify-content-center align-items-center m-3 text-center">
            Login
          </h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <NavLink to="/newReg">
              Do Not Have An Account? Register Here
            </NavLink>
          </div>
          {/* <div className="mb-3form-check fs-6 fst-italic">
            <Link className="nav-link" to="/NewReg">
              <button class="btn btn-outline-success btn-sm" type="submit">
                Don't have an account? Register
              </button>
            </Link>
          </div> */}
          <div className="flex-d">
            {/* <Link className="nav-link" to="/NewReg">
              <button class="btn btn-outline-success btn-sm" type="submit">
                Login
              </button>
            </Link> */}
          </div>
          <button type="submit" className="mt-3 btn btn-primary text-center">
            <Link className="nav-link active" aria-current="page" to="/hosSel">
              Submit
            </Link>
          </button>
        </form>
        <div className="login_pg_right">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1674499074438-8f611a3569f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1612277795259-607df5c06e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=600"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
