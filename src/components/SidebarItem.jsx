import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ icon, link, title, isActive }) {
  return (
    <li className="mb-2">
      <Link
        className={`${isActive ? "active" : ""} fs-14 grey-clr d-block`}
        to={link}
      >
        {icon}
        <span className="ps-2"> {title}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;
