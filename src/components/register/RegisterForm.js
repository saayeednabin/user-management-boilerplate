import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  return (
    <Form>
      <div className="reg-account">
        <div className="form-group">
          <label for="name">Account</label>
          <div className="reg-frm-icn">
            <input
              type="name"
              className="form-control acc"
              id="nm"
              placeholder="Full Name"
              name="fullname"
            />
            <span className="reg-frm-icn-on">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>

        <div className="form-group">
          <div className="reg-frm-icn">
            <input
              type="email"
              className="form-control acc"
              id="email"
              placeholder="Email Address"
              name="email"
            />
            <span className="reg-frm-icn-on">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>

        <div className="form-group">
          <div className="reg-frm-icn">
            <input
              type="text"
              className="form-control acc"
              id="ps"
              placeholder="Password"
              name="password"
            />
            <span className="reg-frm-icn-on">
              <FontAwesomeIcon icon={faKey} />
            </span>
          </div>
        </div>

        <div className="row date-name">
          <div className="col fnm">
            <label for="date">Date of Birth</label>
            <input
              type="date"
              className="form-control date"
              id="dt"
              placeholder=""
              name="name"
            />
          </div>
          <div className="col lnm">
            <div className="form-group">
              <label for="sel1">Gender</label>
              <select className="form-control" id="sel1">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="btn-block reg-btn-ftr">
        <FontAwesomeIcon icon={faSignInAlt} className="reg-frm-icn" />
        REGISTER
      </Button>
    </Form>
  );
};

export default RegisterForm;