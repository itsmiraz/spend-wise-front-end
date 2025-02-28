import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SelectDateRange from "./SelectDateRange";
import ToggleTheme from "./theme-toggle";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-40  bg-light_bg dark:bg-dark_bg text-light_text_primary dark:text-dark_text_primary  flex justify-between items-center   w-full rounded-xl px-4  py-2">
      <div>
        <h2>Hello Miraj</h2>
        <p>How are you doing today?</p>
      </div>
      <div className="flex gap-x-10 items-center">
      <div>
      <ToggleTheme/>
      </div>
        <div className=" md:flex hidden w-full">
          <SelectDateRange />
        </div>
        <div className="select-none outline-none">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="size-14 select-none rounded-full text-llg flex justify-center items-center font-bold  bg-gray-200 dark:bg-blue-950">
                <h2>MH</h2>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
