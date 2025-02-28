import { Eye, EyeOff, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

interface IncomeExpenseStatProps {
  balance: number;
  income: number;
  expenses: number;
}

const IncomeExpenseStat = ({ balance, income, expenses }: IncomeExpenseStatProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-light_bg dark:bg-dark_bg text-light_text_primary dark:text-dark_text_primary flex flex-col justify-start rounded-xl p-4 w-full md:w-[770px] h-[240px]">
      {/* Header with Toggle */}
      <div className="flex items-center text-sm gap-2">
        <h2>Total Balance</h2>
        <button onClick={() => setIsVisible(!isVisible)} className="p-1">
          {isVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>

      {/* Balance Section */}
      <div className="flex pt-2 items-center">
        <h3 className="text-4xl font-semibold">
          {isVisible ? `$${balance.toLocaleString()}` : "*****"}
        </h3>
      </div>

      {/* Income & Expense Section */}
      <div className="flex h-full justify-between items-end text-lg">
        {/* Expenses */}
        <div>
          <div className="flex items-center gap-2">
            <ArrowDown className="text-red-500" />
            <p>Expenses</p>
          </div>
          <p className="font-semibold pl-4">${expenses.toLocaleString()}</p>
        </div>

        {/* Income */}
        <div>
          <div className="flex items-center gap-2">
            <ArrowUp className="text-green-500" />
            <p>Income</p>
          </div>
          <p className="font-semibold pl-4">${income.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseStat;
