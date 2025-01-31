import AnalyticsStat from "./components/AnalyticsStat";
import Budgets from "./components/Budgets";
import IncomeExpenseStat from "./components/IncomeExpenseStat";
import RTransactions from "./components/RTransactions";

const Dashboard = () => {
  return (
    <div className="pt-5 space-y-5">
      <div className="flex gap-5 ">
          <IncomeExpenseStat />
          <AnalyticsStat />
      </div>
      <Budgets />

      <RTransactions />
    </div>
  );
};

export default Dashboard;
