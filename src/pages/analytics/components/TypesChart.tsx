
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Needs", value: 65 },
  { name: "Wants", value: 35 },
];

const COLORS = ["#ffffff", "#2e00fc"];
const TypesChart = () => {
  return (
    <div className="p-4 w-[250px]  rounded-lg bg-[#0E1B2B]">
      <h2 className="text-lg">Needs Vs Want</h2>
      <div className="w-[200px] h-[200px] flex justify-center items-center relative overflow-hidden">
        <ChartContainer
          config={{
            needs: {
              label: "Needs",
              color: COLORS[0],
            },
            wants: {
              label: "Wants",
              color: COLORS[1],
            },
          }}
          className="w-full h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TypesChart;
