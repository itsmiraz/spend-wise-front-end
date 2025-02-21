import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    width?: string;
    padding?: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalPosition: { x: number; y: number }; // Modal's initial position
};

const Modal = ({
    children,
    isOpen,
    width,
    padding,
    setOpen,
    modalPosition,
}: ModalProps) => {
    const defaultWidth = width || "400px";
    const defaultPadding = padding || "20px";
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        style={{ width: defaultWidth, padding: defaultPadding }}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 text-white  z-50 relative"
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
                     <div className="">
                     {children}

                     </div>
                    </motion.div>
                    <div
                        onClick={() => setOpen(false)}
                        className="w-full h-full absolute top-0 left-0 z-30"
                    ></div>
                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default Modal;
