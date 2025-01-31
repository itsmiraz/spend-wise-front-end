import Sidebar from "../ui/sideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";

const RootLayout = () => {
  return (
    <div className="flex bg-[#0d1016]  text-white ">
      <div className="px-4 pt-4 sticky top-4">
        <Sidebar />
      </div>
      <div className="p-4 w-full  h-screen overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
