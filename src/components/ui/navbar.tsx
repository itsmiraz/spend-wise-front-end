import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SelectDateRange from "./SelectDateRange";

const Navbar = () => {
  return (
    <div className="bg-[#0E1B2B] flex justify-between items-center   w-full rounded-xl px-4  py-2">
      <div>
        <h2>Hello Miraj</h2>
        <p>How are you doing today?</p>
      </div>
      <div className="flex gap-x-10 items-center">
        <div className=" md:flex hidden w-full">
          <SelectDateRange />
        </div>
        <div className="select-none outline-none">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="size-14 select-none rounded-full text-llg flex justify-center items-center font-bold  bg-blue-950">
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
