import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";
import Images from "../../constants/Images";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const AdminUser = {
    email: "admin@gmail.com",
    password: "12345",
  };

  const Login = (details) => {
    if (
      details.email === AdminUser.email &&
      details.password === AdminUser.password
    ) {
      console.log("logged In");
      setUser({
        email: details.email,
        password: details.password,
      });
      navigate("/admin");
      setError("");
    } else {
      setError("Invalid Email or password");
    }
  };

  // const Logout = () => {
  //   setUser({
  //     email: "",
  //     password: "",
  //   });
  // };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
                <h2 className="mt-3 mb-1 fw-bold">Admin Login</h2>
                <p>Please login to your account.</p>
              </Card.Title>
              <Card.Body>
                <LoginForm login={Login} error={error} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
