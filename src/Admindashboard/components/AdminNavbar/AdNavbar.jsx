import React, { useState } from "react";
import { NavLink } from "react-router"; // react-router-dom ব্যবহার করতে হবে
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const AdNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navItems = [
    { name: "Dashboard", path: "/admin-dashboard" },
    {
      name: "User",
      dropdown: [
        { name: "User", path: "/admin-dashboard/users" },
        { name: "Sub Agent", path: "/admin-dashboard/sub-agent" },
        { name: "Agent", path: "/admin-dashboard/agent" },
        { name: "Master", path: "/admin-dashboard/master" },
        { name: "Sub Admin", path: "/admin-dashboard/sub-admin" },
        { name: "Admin", path: "/admin-dashboard/admin" },
      ],
    },
    {
      name: "Setting",
      dropdown: [
        { name: "General Setting", path: "/admin-dashboard/general-setting" },
        { name: "Admin Setting", path: "/admin-dashboard/admin-setting" },
        { name: "Game Api Key", path: "/admin-dashboard/game-api-key" },
        { name: "Home Control", path: "/admin-dashboard/home-control" },
        { name: "Color Control", path: "/admin-dashboard/color-control" },
        { name: "Add Game Api key", path: "/admin-dashboard/add-game-api-key" },
      ],
    },
    { name: "My Account", path: "/admin-dashboard/my-account" },
    { name: "BetList", path: "/admin-dashboard/bet-lists" },
    { name: "BetListLive", path: "/admin-dashboard/bet-list-live" },
    { name: "Banking", path: "/admin-dashboard/banking" },
    {
      name: "Casino",
      dropdown: [
        { name: "Progmatic Play", path: "/admin-dashboard/progmatic-play" },
        { name: "Evolution", path: "/admin-dashboard/evolution" },
        { name: "BGaming", path: "/admin-dashboard/b-gaming" },
        { name: "Amusnet", path: "/admin-dashboard/amusnet" },
        { name: "PG Soft", path: "/admin-dashboard/pg-soft" },
        { name: "Play and Go", path: "/admin-dashboard/play-and-go" },
        { name: "Play Tech", path: "/admin-dashboard/play-tech" },
        { name: "No Limit City", path: "/admin-dashboard/no-limit-city" },
        { name: "Hack Saw", path: "/admin-dashboard/hack-saw" },
      ],
    },
    { name: "Risk Management", path: "/admin-dashboard/risk-management" },
    {
      name: "Import",
      dropdown: [
        { name: "Game File Import", path: "/admin-dashboard/game-file-import" },
        { name: "API Import", path: "/admin-dashboard/api-import" },
      ],
    },
    { name: "Message", path: "/admin-dashboard/message" },
    {
      name: "Game Center",
      dropdown: [
        { name: "Active Game", path: "/admin-dashboard/active-game" },
        { name: "Deactive Game", path: "/admin-dashboard/deactive-game" },
        { name: "Live Game", path: "/admin-dashboard/Live-game" },
      ],
    },
  ];

  return (
    <nav className="bg-yellow-500 text-black shadow-md">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center h-12">
          {/* Left Logo / Toggle Button */}
          <div className="flex items-center">
            <button className="lg:hidden text-xl mr-2" onClick={toggleSidebar}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 ml-6">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div
                  // শুধু Dashboard এ end=true
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleDropdown(item.name)}
                    className="flex items-center px-3 py-2 hover:bg-yellow-500"
                  >
                    {item.name} <FaChevronDown className="ml-1 text-xs" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 top-full w-44 border border-gray-300 bg-gray-100">
                      {/* Header */}
                      {/* <div className="bg-yellow-400 px-4 py-2 font-semibold text-black border-b border-gray-300">
                        {item.name}
                      </div> */}
                      {/* Dropdown Items */}
                      {item.dropdown.map((drop, i) => (
                        <NavLink
                          key={i}
                          to={drop.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 border-b border-gray-300 ${
                              isActive
                                ? "bg-yellow-400 text-black font-bold"
                                : "hover:bg-gray-200"
                            }`
                          }
                          onClick={() => setActiveDropdown(null)}
                        >
                          {drop.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  end={item.path === "/admin-dashboard"}
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 ${
                      isActive
                        ? "bg-yellow-400 font-bold"
                        : "hover:bg-yellow-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-yellow-600 text-black transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div onClick={toggleSidebar} className="p-4 font-bold text-lg">
          <FaTimes />
        </div>
        <div className="flex flex-col space-y-1">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="border-b border-yellow-500">
                <button
                  onClick={() => handleDropdown(item.name)}
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-yellow-500"
                >
                  {item.name} <FaChevronDown />
                </button>
                {activeDropdown === item.name && (
                  <div className="border border-gray-300 bg-gray-100">
                    {/* Header */}
                    {/* <div className="bg-yellow-400 px-4 py-2 font-semibold text-black border-b border-gray-300">
                      {item.name}
                    </div> */}
                    {/* Items */}
                    {item.dropdown.map((drop, i) => (
                      <NavLink
                        key={i}
                        to={drop.path}
                        className={({ isActive }) =>
                          `block px-6 py-2 border-b border-gray-300 ${
                            isActive
                              ? "bg-yellow-400 font-bold"
                              : "hover:bg-gray-200"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {drop.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                end={item.path === "/admin-dashboard"}
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 ${
                    isActive ? "bg-yellow-400 font-bold" : "hover:bg-yellow-500"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdNavbar;
