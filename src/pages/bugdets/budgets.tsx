import AnimatedPage from "@/components/ui/animatedPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal from "@/components/ui/modal";
import { Progress } from "@/components/ui/progress";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

const Budgets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const initBudgets = [
    { id: 1, category: "Housing", total: 1500, spent: 1200 },
    { id: 13, category: "Food", total: 500, spent: 350 },
    { id: 14, category: "Transportation", total: 300, spent: 275 },
    { id: 15, category: "Utilities", total: 200, spent: 180 },
    { id: 135, category: "Entertainment", total: 150, spent: 100 },
    { id: 135, category: "Healthcare", total: 250, spent: 50 },
    { id: 531, category: "Miscellaneous", total: 100, spent: 75 },
  ];
  const [budgets, setBudgets] = useState(initBudgets);

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setModalPosition({ x: buttonRect.x, y: buttonRect.y });
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const newItem = { id: Math.random(), category: "++Housing", total: 1500, spent: 1200 };
    setBudgets((prev) => [...prev, newItem,]);
    setIsModalOpen(false);
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
   <AnimatedPage>
      <div className="w-full mt-4 bg-[#0E1B2B] rounded-xl p-4">
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">Monthly Budgets</h2>
            <Button ref={buttonRef} onClick={handleButtonClick}>
              Add New Budget
            </Button>
          </div>
          <AnimatePresence initial={false}>
            <motion.ul
              layout
              layoutId={"list"}
              className="grid grid-cols-1 md:grid-cols-1 gap-4"
            >
              {[...budgets].reverse().map((budget, index) => (<AnimatedListItem key={budget.id}>
                <Card key={index} className="overflow-hidden w-full">
                  <CardContent className="p-4 w-full bg-[#0E1B2B]">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-neutral-300 font-semibold">
                        {budget.category}
                      </h3>
                      <span className="text-sm font-medium">
                        ${budget.spent} / ${budget.total}
                      </span>
                    </div>
                    <Progress
                      value={(budget.spent / budget.total) * 100}
                      className="h-2"
                    />
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span className="text-muted-foreground">
                        ${budget.total - budget.spent} left
                      </span>
                      <span
                        className={`font-medium ${budget.spent > budget.total
                            ? "text-destructive"
                            : "text-primary"
                          }`}
                      >
                        {((budget.spent / budget.total) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedListItem>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal with Add New Budget form */}
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        modalPosition={modalPosition}
      >
        <div className="space-y-4 ">
          <h3 className="text-xl mb-4  font-semibold">Add New Budget</h3>
          <div className="grid space-y-2 gap-2">
            <Label htmlFor="email">Budget</Label>
            <Input id="name" type="text" placeholder="" required />
          </div>
          <div className="grid space-y-2 gap-2">
            <Label htmlFor="email">Total Amount</Label>
            <Input id="name" type="number" placeholder="" required />
          </div>
          <div className="flex justify-end space-x-4">
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Save Budget</Button>
          </div>
        </div>
      </Modal>
      </AnimatedPage>
    </div>
  );
};

export default Budgets;



const base = 4;
const t = (d: number) => d * base;

interface AnimatedListItemProps {
  children: ReactNode;
}

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  children,
}) => {
  return (
    <motion.li
      className="relative"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          opacity: { delay: t(0.025) },
        },
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: t(0.15),
        type: "spring",
        bounce: 0,
        opacity: { duration: t(0.03) },
      }}
    >
      {children}
    </motion.li>
  );
};