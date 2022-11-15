import React from "react";
import { Card, Col } from "react-bootstrap";

function CustomCard({ Icon, title, detail }) {
  return (
    <Col xl="4" md="6" className="mb-3 mb-xl-0 d-flex">
      <Card className="p-xxl-4 p-xl-3 p-2 radius-20 border-0 position-relative w-100 justify-content-between">
        <Icon />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <div className={"fs-14 w-100"}>
            <h5 className="mb-2"> {title}</h5>
            <span>{detail}</span>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default CustomCard;
