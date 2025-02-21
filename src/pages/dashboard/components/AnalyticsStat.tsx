import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const AnalyticsStat = () => {
  const chartData = [
    { category: "Rent", amount: 1200, fill: "#4285F4" },
    { category: "Groceries", amount: 450, fill: "#0078D4" },
    { category: "Utilities", amount: 150, fill: "#FF7139" },
    { category: "Transportation", amount: 200, fill: "#00A4A6" },
    { category: "Entertainment", amount: 100, fill: "#B0B0B0" },
  ];

  return (
    <div className="w-full pr-10 flex md:flex-row flex-col justify-between bg-gray-800 p-4 text-white rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="flex-1 ">
          <Chart chartData={chartData} />
        </div>
      <div className="text-sm flex justify-center flex-col gap-2 ">
        {chartData.map((item) => (
          <div key={item.category} className="flex gap-4 justify-between mb-2">
          <div className="flex gap-2 ">
          <div style={{background:item.fill}} className={`size-4 relative`}></div>
          <span>{item.category}</span>
          </div>
            <span>$ {item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsStat;
const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;
  interface ExpenseData {
      category: string;  // Category name (e.g., Rent, Groceries, etc.)
      amount: number;    // Amount of the expense
      fill: string;      // Color code for the chart segment
    }
    
  export function Chart({ chartData }:{chartData:ExpenseData[]}) {
   
  
    return (
      <div className="flex relative  flex-col">
        <div className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[208px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                innerRadius={60}
                strokeWidth={10}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    );
  }
  