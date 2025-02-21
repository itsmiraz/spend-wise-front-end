import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Budgets = () => {
  
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
      <h2 className="text-2xl font-bold mb-4">Monthly Budgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {budgets.map((budget, index) => (
          <Card key={index} className="overflow-hidden ">
            <CardContent className="p-4 bg-[#0E1B2B]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{budget.category}</h3>
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
                  className={`font-medium ${
                    budget.spent > budget.total
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
  </div></div>
  )
}

export default Budgets