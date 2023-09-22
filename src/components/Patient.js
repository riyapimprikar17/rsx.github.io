import React, { Component } from "react";
import PropTypes from "prop-types";

export class Patient extends Component {
  render() {
    return (
      <div className="m-5">
        <h2 className="justify-content-center align-items-center text-center">
          Patient Details
        </h2>
        <form className="mx-auto col-10 col-md-8 col-lg-6 w-50 justify-content-center align-items-center">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Patient Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label gender1">
              Gender
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Age
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="p-2 form-label">
                Select Department
              </label>
              <div class="dropdown drop_dwn">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Department
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Cardiology
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ENT
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Neurology
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Opthalmology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <label for="exampleInputEmail1" class="m-2 form-label">
                Symptoms
              </label>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder=""
                  id="floatingTextarea2"
                  style={{ height: "80px" }}
                ></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            </div>
          </div>
          <div>
            <label className="form-check-label" for="inlineRadio2">
              Select Time
            </label>
            <div class="w-50 cs-form">
              <input type="time" class="form-control" value="10:05 AM" />
            </div>
          </div>
          <div className="date_picker">
            <label className="form-check-label" for="inlineRadio2">
              {/* Select Date */}
            </label>
          </div>
          <button type="submit" class="m-3 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Patient;
