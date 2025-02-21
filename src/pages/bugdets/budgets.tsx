import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal from "@/components/ui/modal";
import { Progress } from "@/components/ui/progress";
// import { AnimatePresence ,motion} from "framer-motion";
import { useRef, useState } from "react";

const Budgets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  // Handle button click to open modal at button's position
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
    // console.log(newBudget);
    setIsModalOpen(false);
  };

  // Reference to the button
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Sample budget data
  const budgets = [
    { category: "Housing", total: 1500, spent: 1200 },
    { category: "Food", total: 500, spent: 350 },
    { category: "Transportation", total: 300, spent: 275 },
    { category: "Utilities", total: 200, spent: 180 },
    { category: "Entertainment", total: 150, spent: 100 },
    { category: "Healthcare", total: 250, spent: 50 },
    { category: "Miscellaneous", total: 100, spent: 75 },
  ];
  return (
    <div>  <div className="w-full mt-4 bg-[#0E1B2B] rounded-xl p-4">
      <div className="w-full space-y-4">
        <div className="flex justify-between items-center ">

          <h2 className="text-2xl font-bold mb-4">Monthly Budgets</h2>
          <Button ref={buttonRef} onClick={handleButtonClick}>

            Add New Budget
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgets.map((budget, index) => (
            <Card key={index} className="overflow-hidden ">
              <CardContent className="p-4  bg-[#0E1B2B]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className=" text-neutral-300 font-semibold">{budget.category}</h3>
                  <span className="text-sm font-medium">
                    ${budget.spent} / ${budget.total}
                  </span>
                </div>
                <Progress
                  value={(budget.spent / budget.total) * 100}
                  className="h-2 "
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
          ))}
        </div>
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
            <Input
              id="name"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div className="grid space-y-2 gap-2">
            <Label htmlFor="email">Total Amount</Label>
            <Input
              id="name"
              type="number"
              placeholder=""
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Save Budget</Button>
          </div>
        </div>
      </Modal>
      {/* Animated Modal */}

    </div>
  )
}

export default Budgets