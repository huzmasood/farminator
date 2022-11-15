import React, { useState } from "react";
import Images from "../constants/Images";
import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";

function Header({ onHmaburgerClick }) {
  const [active, setActive] = useState(false);
  const handleHamburgerClick = () => {
    onHmaburgerClick();
    setActive(!active);
  };

  return (
    <header className="fixed-top bg-white px-3">
      <Navbar className="p-0">
        <NavbarBrand className="me-auto" href="/">
          <img
            src={Images.SubLogo}
            alt="logo"
            className="img-fluid"
            width={40}
          />
          <span className="ms-3">
            <strong>Farminator</strong>
          </span>
        </NavbarBrand>

        <Nav className="ms-auto">
          <NavItem
            onClick={handleHamburgerClick}
            className={`menubtn ${active ? "" : "open"}`}
          >
            <div className="line1"></div>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
