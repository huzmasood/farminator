import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "inherit" }}
      >
        <h1>Smart Agriculture System</h1>
        <div
          className="bg-dark bg-opacity-50 w-50 rounded-5 px-4 py-3 hover-shadow mt-3 mb-4"
          style={{ transition: "0.8s" }}
        >
          <p className="text-white fs-5 m-0">
            This Application helps you to know what is going on your farm in
            terms of irrigation, temperature and humidity as it is linked to
            smart IoT based agriculture monitoring system.
          </p>
        </div>
        <Button
          className="m-3"
          variant="dark"
          onClick={() => navigate("/client/login")}
        >
          <AiOutlineUser />
          <span className="ms-1">Client Login</span>
        </Button>
        <Button
          disabled
          variant="dark"
          onClick={() => navigate("/admin/login")}
        >
          <RiAdminLine /> <span>Admin Login</span>
        </Button>
      </div>
    </div>
  );
}

export default Home;
