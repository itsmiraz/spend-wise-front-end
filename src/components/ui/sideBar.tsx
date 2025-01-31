
const Sidebar = () => {
  const links = [
    { title: "Dashboard", link: "/" },
    { title: "Budgets", link: "/budgets" },
    { title: "Transactions", link: "/transactions" },
    { title: "Settings", link: "/settings" },
  ];

  return (
    <div className="min-h-screen rounded-xl text-gray-200 p-4 bg-gray-800 w-[220px]">
      <h2 className="font-bold pb-4  text-xl">SPEND WISE</h2>

      <ul className="pt-2 border-t border-b pb-4 border-gray-700 mt-10 ">
        {links.map((item, i) => (
          <li key={i}>
            {" "}
            <p className="cursor-pointer text-lg">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
