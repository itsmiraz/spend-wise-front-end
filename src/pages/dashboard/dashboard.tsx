import AnalyticsStat from "./components/AnalyticsStat";
import Budgets from "./components/Budgets";
import IncomeExpenseStat from "./components/IncomeExpenseStat";
import RTransactions from "./components/RTransactions";

const Dashboard = () => {
  return (
    <div className="pt-5 space-y-5">
      <div className="flex flex-col md:flex-row gap-5 ">
          <IncomeExpenseStat balance={12000} expenses={4343} income={2432} key={1}/>
          <AnalyticsStat />
      </div>
      <Budgets />

      <RTransactions />
    </div>
  );
};

export default Dashboard;
