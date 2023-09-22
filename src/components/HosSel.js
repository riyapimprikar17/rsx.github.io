import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class HosSel extends Component {
  render() {
    return (
      <div className="d-flex flex-row m-5">
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            // src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
            src="https://media.istockphoto.com/id/1488020234/photo/doctor-otolaryngologist-using-an-otoscope-in-a-patients-ear-at-medical-clinic.jpg?b=1&s=612x612&w=0&k=20&c=OEo3ahTMfah42FWSZr8j8tBVrlHW3HHEQ3xS_wt4ra8="
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/deptAvail"
              >
                ENT
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            // src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600"
            src="https://images.pexels.com/photos/8460126/pexels-photo-8460126.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/deptAvail"
              >
                Cardiology
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            // src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=600"
            src="https://media.istockphoto.com/id/1180488192/photo/males-doctor-examining-brain-mr.jpg?b=1&s=612x612&w=0&k=20&c=rEV_TfLTw1Inwg-CrdcguzpRbBOFxJqlJBaZ_MtvH2c="
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/deptAvail"
              >
                Neurology
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            // src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600"
            src="https://images.pexels.com/photos/7088491/pexels-photo-7088491.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/deptAvail"
              >
                Gynaecology
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HosSel;
