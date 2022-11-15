import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../constants/Images";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function ClientLogin() {
  const navigate = useNavigate();

  return (
    <section className="d-flex align-items-center" id="login">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10" sm="12">
            <Card className="my-5">
              <BsFillArrowLeftCircleFill
                size={30}
                className="pointer"
                onClick={() => navigate("/home")}
              />
              <Card.Title className="text-center">
                <img src={Images.Logo} alt="logo" />
                <h2 className="mt-3 mb-1 fw-bold">Client Login</h2>
                <p>Please login to your account.</p>
              </Card.Title>
              <Card.Body>
                <Form>
                  <Row className="justify-content-center align-items-center">
                    <Col lg="7">
                      <div className="mb-3">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-5">
                        <input
                          type="password"
                          id="pwd"
                          placeholder="Password"
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
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>
                        <Col className="text-end">
                          <a href="#" className="text-danger">
                            Forgot Password
                          </a>
                        </Col>
                      </Row> */}

                      <Row>
                        <div className="col text-center">
                          <Link
                            type="submit"
                            to={"/client"}
                            className="btn btn-1"
                          >
                            Login
                          </Link>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ClientLogin;
