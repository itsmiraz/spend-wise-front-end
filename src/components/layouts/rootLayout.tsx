import Sidebar from "../ui/sideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { ThemeProvider } from "../ui/theme-provider";
const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex bg-[#0d1016]  max-w-[2200px] mx-auto text-white ">
      <div className="px-4 pt-4 sticky top-4">
        <Sidebar />
      </div>
      <div className="p-4 w-full  h-screen overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
    </ThemeProvider>
  );
};

export default RootLayout;
