import {
  ChartNoAxesGantt,
  ChartSpline,
  LayoutDashboard,
  Settings,
  SquareChartGanttIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
export const links = [
  { title: "Dashboard", link: "/", icon: <LayoutDashboard /> },
  { title: "Budgets", link: "/budgets", icon: <SquareChartGanttIcon /> },
  {
    title: "Transactions",
    link: "/transactions",
    icon: <ChartNoAxesGantt />,
  },
  {
    title: " Analytics",
    link: "/analytics",
    icon: <ChartSpline />,
  },
  { title: "Settings", link: "/settings", icon: <Settings /> },
];
const CustomSidebar = () => {


  return (
    <div className="max-h-screen flex-col flex h-full rounded-xl   text-gray-800 dark:text-gray-200 p-4  bg-light_bg  dark:bg-dark_bg w-[250px]">
      <h2 className="font-semibold text-primary pb-4  text-3xl">Spendium</h2>

      <ul className="pt-5 h-full border-t  border-b pb-4 border-gray-700 space-y-2  mt-10 ">
        {links.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex rounded-lg px-2  transition-all ease-in-out duration-300 py-2 items-center gap-x-2 ${
                  isActive ? "bg-blue-200 dark:bg-blue-500 " : "hover:bg-blue-200 dark:hover:bg-blue-300    "
                }`
              }
            >
              <div>{item.icon}</div>
              <p className="cursor-pointer text-lg">{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-1  gap-4 pt-4  items-center">
        <div className="size-14 select-none rounded-full text-lg flex justify-center items-center font-bold  bg-gray-200 dark:bg-blue-950">
          <h2>MH</h2>
        </div>
        <div>
          <h2 className="text-lg font-medium">Miraj Hossen</h2>
          <p className="text-sm">miraj@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
