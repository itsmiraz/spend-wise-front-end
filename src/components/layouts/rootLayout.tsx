import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { ThemeProvider } from "../ui/theme-provider";
import CustomSidebar from "../ui/customSideBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BottomNav from "../ui/bottomNav";
import ModalTriggerButton from "../ui/modalTriggerButton";
const RootLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex bg-[#0d1016] relative overflow-hidden max-w-[2200px] mx-auto text-white ">
        <div className="px-4 md:block hidden pt-4 sticky top-4">
          <CustomSidebar />
        </div>
        <div className="p-4 w-full  h-screen overflow-y-auto">
          <div className="w-full md:hidden  justify-between flex pb-4 items-center">
            <div>
              <button onClick={() => setShow(!show)}>
                {show ? <X /> : <Menu />}
              </button>
            </div>
            <div>
              <h2>Spend Wise</h2>
            </div>
            <div></div>
          </div>
          <Navbar />
          <Outlet />
          <BottomNav />

          <ModalTriggerButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;

