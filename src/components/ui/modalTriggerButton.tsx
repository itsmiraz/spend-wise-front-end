import { useRef, useState } from "react";
import { ArrowLeftRight, ChevronDown, ChevronUp, Plus, } from "lucide-react";
import IncomeModal from "../ui/incomeModal";
import ExpenseModal from "../ui/expenseModal";
import TransferModal from "../ui/transferModal";
// import Modal from "../ui/modal";
import { AnimatePresence, motion } from "framer-motion";
const ModalTriggerButton = () => {
    const [show, setShow] = useState(false);
    const [modalType, setModalType] = useState<"income" | "expense" | "transfer" | null>(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    // const [modalOpen, setModalOpen] = useState(false);

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
        // setModalOpen(true)
    };

    const closeModal = () => {
        setModalType(null);
    };

    return (
        <div className="relative z-50">
            {/* Add Income */}
            <button
                ref={buttonRefs.income}
                className={`${show ? " bottom-72" : "bottom-10"} bg-green-500 transition-all ease-in-out duration-300 size-14 flex justify-center text-white items-center rounded-full fixed right-10`}
                onClick={() => openModal("income")}
            >
                <ChevronUp />
                {show && <p className="absolute text-light_text_primary dark:text-dark_text_primary -left-28 font-medium whitespace-nowrap">Add Income</p>}
            </button>

            {/* Add Expense */}
            <button
                ref={buttonRefs.expense}
                className={`${show ? " bottom-52" : "bottom-10"} bg-red-500 transition-all ease-in-out duration-300 size-14 flex justify-center text-white items-center rounded-full fixed right-10`}
                onClick={() => openModal("expense")}
            >
                <ChevronDown />
                {show && <p className="absolute text-light_text_primary dark:text-dark_text_primary -left-28 font-medium whitespace-nowrap">Add Expense</p>}
            </button>

            {/* Transfer */}
            <button
                ref={buttonRefs.transfer}
                className={`${show ? " bottom-32" : "bottom-10"} bg-purple-500 transition-all ease-in-out duration-300 size-14 flex justify-center text-white items-center rounded-full fixed right-10`}
                onClick={() => openModal("transfer")}
            >
                <ArrowLeftRight />
                {show && <p className="absolute text-light_text_primary dark:text-dark_text_primary -left-20 font-medium whitespace-nowrap">Transfer</p>}
            </button>

            {/* Main Toggle Button */}
            <button
                onClick={() => setShow(!show)}
                className={`${show ? "bg-gray-500" : "bg-blue-500"} transition-all ease-in-out duration-300 size-14 flex justify-center text-white items-center rounded-full fixed bottom-10 right-10`}
            >
                <Plus className={`${show ? 'rotate-45' : "rotate-0"} transition-all ease-in-out duration-300`} />
            </button>


            {/* Animated Modal */}
            {/* <Modal modalPosition={modalPosition} setOpen={setModalOpen} isOpen={modalOpen}> */}

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
                            className="bg-light_2nd_bg dark:bg-dark_2nd_bg p-4    z-50  relative rounded-[40px] w-[658px]"
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
                            {
                                modalType === "income" && <IncomeModal />
                            }
                            {
                                modalType === "expense" && <ExpenseModal />
                            }
                            {
                                modalType === "transfer" && <TransferModal />
                            }
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModalTriggerButton;