import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

function Layout() {
  return (
    <div className=" bg-[#f5f5f5]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
