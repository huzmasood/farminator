import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row className="justify-content-center align-items-center">
        <Col lg="7">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="mb-3">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              className="form-control"
            />
          </div>

          {/* <Row className="py-3 py-lg-4">
            <Col>
              <div className="mb-3 form-check">
                <Input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
            </Col>
            <Col className="text-end">
              <a href="/" className="text-danger">
                Forgot Password
              </a>
            </Col>
          </Row> */}

          <Row>
            <div className="col text-center">
              <button type="submit" className="btn btn-1">
                Login
              </button>
            </div>
            {/* <div className="col">
              <button type="submit" className="btn btn-2 w-100">
                Sign Up
              </button>
            </div> */}
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default LoginForm;
