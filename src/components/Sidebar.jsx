import React from "react";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";
import { RiDashboard2Fill } from "react-icons/ri";
import { GiDroplets } from "react-icons/gi";
import { TfiStatsUp } from "react-icons/tfi";
import { RiHistoryLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";

const sidebarItems = [
  {
    id: 0,
    title: "Dashboard",
    icon: <RiDashboard2Fill size={25} fill="gray" />,
    link: "/client",
  },
  {
    id: 1,
    title: "Irrigation",
    icon: <GiDroplets size={25} fill="gray" />,
    link: "/client/irrigation",
  },
  {
    id: 2,
    title: "Statistics",
    icon: <TfiStatsUp size={25} fill="gray" />,
    link: "/client/statistics",
  },
  {
    id: 3,
    title: "History",
    icon: <RiHistoryLine size={25} fill="gray" />,
    link: "/client/history",
  },
  {
    id: 4,
    title: "Farm Information",
    icon: <RiInformationLine size={25} fill="gray" />,
    link: "/client/farm-information",
  },
  {
    id: 5,
    title: "Client Information",
    icon: <SlPeople size={25} fill="gray" />,
    link: "/client/client-information",
  },
  {
    id: 6,
    title: "Log Out",
    icon: <RiLogoutCircleLine size={25} fill="gray" />,
    link: "login",
  },
];

function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="sidebar bg-white">
      <ul className="p-0">
        {sidebarItems.map((item) => {
          return pathname === item.link ? (
            <SidebarItem
              key={item.id}
              isActive
              icon={item.icon}
              link={item.link}
              title={item.title}
            />
          ) : (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              link={item.link}
              title={item.title}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
