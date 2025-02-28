import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import CustomSidebar from "../ui/customSideBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BottomNav from "../ui/bottomNav";
import ModalTriggerButton from "../ui/modalTriggerButton";
import AnimatedPage from "../ui/animatedPage";
const RootLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex bg-light_bg/90 dark:bg-dark_bg/40 relative overflow-hidden max-w-[2200px] mx-auto text-light_text_primary dark:text-dark_text_primary  ">
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
              <h2 className="text-xl text-primary font-medium">Spendium</h2>
            </div>
            <div></div>
          </div>
          <Navbar />
          <AnimatedPage>
            <Outlet />
          </AnimatedPage>
          <BottomNav />

          <ModalTriggerButton />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

