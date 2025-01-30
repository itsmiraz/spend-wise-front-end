import React from "react";
import Sidebar from "../ui/sideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex gap-5">
      <div className="">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
