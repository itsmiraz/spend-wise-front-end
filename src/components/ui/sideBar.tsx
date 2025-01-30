
const Sidebar = () => {
  const links = [
    { title: "Dashboard", link: "/" },
    { title: "Budgets", link: "/budgets" },
    { title: "Transactions", link: "/transactions" },
    { title: "Settings", link: "/settings" },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-200 w-[220px]">
      <h2 className="font-bold text-xl">SPEND WISE</h2>

      <ul className="pt-6 border-t border">
        {links.map((item, i) => (
          <li key={i}>
            {" "}
            <p className="font-medium text-lg">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
