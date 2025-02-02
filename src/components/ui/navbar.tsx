import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center   w-full rounded-xl px-4  py-2">
      <div>
        <h2>Hello Miraj</h2>
        <p>How are you doing today?</p>
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
  );
};

export default Navbar;
