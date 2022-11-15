import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Layout() {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburgerClick = () => {
    console.log("asdsadsad");
    setHamburger(!hamburger);
  };
  return (
    <>
      <Header onHmaburgerClick={handleHamburgerClick} />
      <main className="bg-grey">
        <Container fluid>
          <Row>
            <Col
              xxl={`${hamburger ? "1" : "2"}`}
              lg={`${hamburger ? "1" : "3"}`}
              md={`${hamburger ? "1" : "3"}`}
              sm="3"
              xs="4"
              className={`px-0 main-menu ${hamburger ? "show" : "hide"}`}
            >
              <Sidebar />
            </Col>
            <Col
              xxl={`${hamburger ? "11" : "10"}`}
              lg={`${hamburger ? "11" : "9"}`}
              md="12"
            >
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Layout;
