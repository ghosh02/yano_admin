import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import callcenter from "../assets/icons/callcenter.png";
import overview from "../assets/icons/overview.png";
import settings from "../assets/icons/settings.png";
import user from "../assets/icons/user.png";
const sidebarData = [
  { navigate: "/overview", name: "Overview", img: overview },
  {
    navigate: "/user",
    name: "Users",
    img: user,
  },
  {
    navigate: "/callCenter",
    name: "Call Center",
    img: callcenter,
  },
];

function Sidebar() {
  return (
    <div className="w-[200px] border-r bg-[#fff]">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 ">
        <div className=" overflow-auto pl-2 sticky top-[90px]">
          <nav className="grid gap-[20px] items-start  text-sm font-medium">
            {sidebarData.map((item) => (
              <NavLink
                key={item.name}
                className={({ isActive }) =>
                  ` ml-[16px] flex items-center gap-3 rounded-l-[10px] px-3 py-4  transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50 ${
                    isActive
                      ? "bg-[#F5F5F5] border-r-4 border-darkgreen text-[#00263E] font-[600]"
                      : "text-[#455560]"
                  }`
                }
                to={item.navigate}
              >
                <img src={item.img} alt="" className="" />
                {item.name}
              </NavLink>
            ))}
            <div className="border-t-2 w-full" />
            <NavLink
              className={({ isActive }) =>
                ` ml-[16px] flex items-center gap-3 rounded-l-[10px] px-3 py-2 mt-[8px]   transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50 ${
                  isActive
                    ? "bg-[#F5F5F5] border-r-4 border-darkgreen text-[#00263E] font-[600]"
                    : "text-[#455560]"
                }`
              }
              to="/Settings"
            >
              <img src={settings} alt="" className="" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
