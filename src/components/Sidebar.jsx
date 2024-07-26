import React from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-[200px] border-r bg-[#fff]">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 ">
        <div className=" overflow-auto py-2 sticky top-[90px]">
          <nav className="grid gap-[20px] items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#455560] transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50"
              to="/overview"
            >
              <MdDashboard size={30} />
              Overview
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#455560] transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50"
              to="/user"
            >
              <FiUsers size={30} />
              Users
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#455560] transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50"
              to="/callCenter"
            >
              <MdWifiCalling3 size={30} />
              Call center
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#455560] transition-all hover:text-[#00263E] dark:text-gray-400 dark:hover:text-gray-50"
              to="/settings"
            >
              <MdOutlineSettings size={30} />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
