import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen w-screen bg-[#cdc8c8]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
