import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { ThemeProvider } from "../ui/theme-provider";
import CustomSidebar from "../ui/customSideBar";
import { useState } from "react";
import { ArrowLeftRight, ChevronDown, ChevronUp,  Menu, Plus, X, XIcon } from "lucide-react";
import BottomNav from "../ui/bottomNav";
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

          <AddDataButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;



const AddDataButton = () => {
  const [show, setShow] = useState(false);

  return <div>


<div className="relative z-50">
  

<button
      className={`${show ? ' bottom-72' : "bottom-10"} bg-green-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed  right-10`}>
      <ChevronUp />
     { show && <p className="absolute -left-28 font-medium whitespace-nowrap">Add Income</p>}
    </button>

    <button
      className={`${show ? '  bottom-52' : "bottom-10"}   bg-red-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed right-10`}>
      <ChevronDown />
      { show && <p className="absolute -left-28 font-medium whitespace-nowrap">Add Expense</p>}
    
    </button>
    <button
      className={`${show ? '  bottom-32 ' : "bottom-10"} bg-purple-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed right-10`}>
      <ArrowLeftRight />
     
      { show &&  <p className="absolute -left-20 font-medium whitespace-nowrap">Transfer</p>}

    </button>


    <div>
      <button
        onClick={() => setShow(!show)}
        className={` ${show ? "bg-gray-500" : " bg-blue-500"} transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed bottom-10 right-10`}>
        {
          show ? <XIcon /> : <Plus />
        }
      </button>
    </div>
</div>


<div className={`${show ? 'opacity-100 block':"opacity-0 hidden"}  bg-black/50 w-full h-full absolute top-0 left-0`}>

</div>
  </div>
}