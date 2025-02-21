import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { ThemeProvider } from "../ui/theme-provider";
import CustomSidebar from "../ui/customSideBar";
import { useRef, useState } from "react";
import { ArrowLeftRight, ChevronDown, ChevronUp,  Menu, Plus, X } from "lucide-react";
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


import { motion, AnimatePresence } from "framer-motion";
const AddDataButton = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState<"income" | "expense" | "transfer" | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  // Explicitly type buttonRefs
  const buttonRefs: Record<"income" | "expense" | "transfer", React.MutableRefObject<HTMLButtonElement | null>> = {
    income: useRef(null),
    expense: useRef(null),
    transfer: useRef(null),
  };

  const openModal = (type: "income" | "expense" | "transfer") => {
    const button = buttonRefs[type].current;
    if (button) {
      const rect = button.getBoundingClientRect();
      setModalPosition({
        x: rect.left + rect.width / 2, // Center horizontally
        y: rect.top + rect.height / 2, // Center vertically
      });
    }
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="relative z-50">
      {/* Add Income */}
      <button
        ref={buttonRefs.income}
        className={`${show ? " bottom-72" : "bottom-10"} bg-green-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed right-10`}
        onClick={() => openModal("income")}
      >
        <ChevronUp />
        {show && <p className="absolute -left-28 font-medium whitespace-nowrap">Add Income</p>}
      </button>

      {/* Add Expense */}
      <button
        ref={buttonRefs.expense}
        className={`${show ? " bottom-52" : "bottom-10"} bg-red-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed right-10`}
        onClick={() => openModal("expense")}
      >
        <ChevronDown />
        {show && <p className="absolute -left-28 font-medium whitespace-nowrap">Add Expense</p>}
      </button>

      {/* Transfer */}
      <button
        ref={buttonRefs.transfer}
        className={`${show ? " bottom-32" : "bottom-10"} bg-purple-500 transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed right-10`}
        onClick={() => openModal("transfer")}
      >
        <ArrowLeftRight />
        {show && <p className="absolute -left-20 font-medium whitespace-nowrap">Transfer</p>}
      </button>

      {/* Main Toggle Button */}
      <button
        onClick={() => setShow(!show)}
        className={`${show ? "bg-gray-500" : "bg-blue-500"} transition-all ease-in-out duration-300 size-14 flex justify-center items-center rounded-full fixed bottom-10 right-10`}
      >
        {show ? <X /> : <Plus />}
      </button>

      {/* Animated Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80 text-black relative"
              initial={{
                x: modalPosition.x - window.innerWidth / 2,
                y: modalPosition.y - window.innerHeight / 2,
                scale: 0.3,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }, // Smoother transition
              }}
              exit={{
                x: modalPosition.x - window.innerWidth / 2,
                y: modalPosition.y - window.innerHeight / 2,
                scale: 0.3,
                opacity: 0,
                transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2" onClick={closeModal}>
                <X />
              </button>
              <h2 className="text-lg font-bold mb-4">
                {modalType === "income"
                  ? "Add Income"
                  : modalType === "expense"
                  ? "Add Expense"
                  : "Transfer Funds"}
              </h2>
              <p>Form content goes here...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};