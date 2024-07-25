import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

function Layout() {
  return (
    <div className="h-screen w-screen bg-[#f5f5f5]">
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
