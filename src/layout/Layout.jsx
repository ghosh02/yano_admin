import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";

function Layout() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/videoCall"];
  const shouldShowNavbar = !pathsWithoutNavbar.includes(location.pathname);
  return (
    <div className=" bg-[#f5f5f5] min-h-screen font-Poppins ">
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
