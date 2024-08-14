import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";

function Layout() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const pathsWithoutNavbar = ["/videoCall"];
  const shouldShowNavbar = !pathsWithoutNavbar.includes(location.pathname);
  if (location.pathname === "/") {
    return user ? <Navigate to="/overview" /> : <Navigate to="/signin" />;
  }
  return (
    <div className=" bg-[#f5f5f5] min-h-screen font-Poppins ">
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
