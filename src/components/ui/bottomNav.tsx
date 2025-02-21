import { links } from "./customSideBar";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="md:hidden pr-9 pl-2  w-full flex justify-between  fixed bottom-0 pt-4 pb-5 bg-gray-950">
      {links.map((item) => (
        <NavLink to={item.link} className="flex justify-center flex-col item-center">
          <div  className="mx-auto text-2xl">
          {item.icon}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
