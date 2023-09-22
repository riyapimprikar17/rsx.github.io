import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export class DeptAvail extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center align-items-center m-4">
          Availability of Hospitals For The Department
        </h2>
        <table class="table w-75 p-5 mx-auto col-10 col-md-8 col-lg-6 w-50 text-center justify-content-center align-items-center table-striped m-3">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Hospital</th>
              <th scope="col">Availability</th>
              {/* <th scope="col">Handle</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                <td>Hospital 1</td>
              </Link>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                <td>Hospital 2</td>
              </Link>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                <td>Hospital 3</td>
              </Link>
              <td>#</td>
              <td>#</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                <td>Hospital 4</td>
              </Link>
              <td>#</td>
              <td>#</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeptAvail;
