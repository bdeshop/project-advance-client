import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaGift,
  FaUsers,
  FaShareAlt,
  FaComments,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaSignInAlt,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <nav className="w-full bg-[#047857] text-white">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 lg:py-4">
        {/* Left Logo */}
        <div className="flex items-center space-x-3">
          {!isLoggedIn && (
            <Link to="/" className="text-2xl font-bold text-yellow-400">
              baji365
            </Link>
          )}
          {isLoggedIn && (
            <h1 className="hidden md:flex text-2xl font-bold text-yellow-400">
              baji365
            </h1>
          )}
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search Events"
              className="px-3 py-1 rounded-md text-black w-64 bg-white"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`flex items-center ${
            isLoggedIn ? "space-x-[1px] md:space-x-4" : "space-x-4"
          }`}
        >
          {!isLoggedIn ? (
            // যখন লগইন হয়নি তখন লগইন ইনপুট আর বাটন দেখাবে
            <div className="flex items-center space-x-2">
              <div className="hidden lg:flex items-center space-x-2">
                <FaUser className="text-yellow-300" />
                <input
                  type="text"
                  placeholder="4-15 char, allow number"
                  className="px-2 py-1 text-black rounded-md text-sm bg-white"
                />
                <input
                  type="password"
                  placeholder="8-20 char"
                  className="px-2 py-1 text-black rounded-md text-sm bg-white"
                />
                <input
                  type="text"
                  placeholder="Validation Code"
                  className="px-2 py-1 text-black rounded-md text-sm w-24 bg-white"
                />
              </div>
              <button
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
              <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white">
                Signup
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Balance Section */}
              <div className="flex items-center border border-white rounded px-3 py-1 text-yellow-400 text-sm">
                <span>Main Balance</span>
                <span className="font-bold ml-1">PTH 0</span>
                <span className="ml-2">Exposure</span>
                <span className="ml-1 bg-red-600 text-white px-2 rounded text-xs">
                  0
                </span>
                <button className="ml-2 bg-green-600 text-white px-2 rounded text-xs font-bold">
                  +5
                </button>
                <button className="ml-2 text-white border border-white rounded-full px-2">
                  &#8635;
                </button>
              </div>

              {/* My Account Section */}
              {/* My Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="hidden md:flex items-center bg-green-800 text-yellow-400 border border-white rounded px-3 py-1"
                >
                  <FaUser className="mr-2" />
                  <span>My Account</span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden z-50">
                    <div className="px-4 py-2 border-b font-semibold text-green-800">
                      akash31{" "}
                      <span className="text-xs text-gray-500">GMT+5:30</span>
                    </div>
                    <ul className="text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Balance Overview
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Account Statement
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Bets
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Bets History
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Profit & Loss
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Results
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Activity Log
                      </li>
                    </ul>
                    <div className="border-t">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setAccountOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        LOGOUT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>
      </div>

      {/* Bottom Menu (Desktop) */}
      <div className="hidden lg:flex bg-yellow-400 text-black ">
        <div className="flex px-4 md:px-8 py-2 space-x-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "font-extrabold underline" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/play-in"
            className={({ isActive }) =>
              `${isActive ? "font-extrabold underline" : ""}`
            }
          >
            Play-In
          </NavLink>
          <NavLink
            to="/multi"
            className={({ isActive }) =>
              `${isActive ? "font-extrabold underline" : ""}`
            }
          >
            Multi
          </NavLink>
          <a href="#">Cricket</a>
          <a href="#">Soccer</a>
          <a href="#">Tennis</a>
          <a href="#">Result</a>
          <a href="#" className="bg-red-600 text-white px-2 rounded-md">
            Casino
          </a>
        </div>
        <div className="flex px-4 md:px-8 py-2 space-x-6 font-medium ml-auto">
          <a href="">Time Zone</a>
          <a href="" className="bg-black text-white px-4">
            On Click Bet
          </a>
          <a href="" className="flex items-center">
            <IoSettings size={16} /> <span className="ml-1">Settings</span>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black/50 z-40 transform pb-20 ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className=" h-full p-4 flex flex-col space-y-4 overflow-y-auto">
          {/* Profile Section */}
          <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white p-3 rounded-md">
            <p className="font-medium">Hi, welcome.</p>
            {!isLoggedIn ? (
              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-yellow-400 text-black px-3 py-1 rounded"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Log in
                </button>
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-yellow-400 text-black px-3 py-1 rounded"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <p className="mt-2">Balance: PTH 0 | Exposure: 0</p>
            )}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaGift size={20} />
              <span className="text-sm">Promotions</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaUsers size={20} />
              <span className="text-sm">Referral</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaShareAlt size={20} />
              <span className="text-sm">Affiliate</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaComments size={20} />
              <span className="text-sm">24/7 Chat</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaComments size={20} />
              <span className="text-sm">Forum</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaFacebook size={20} />
              <span className="text-sm">Facebook</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaTwitter size={20} />
              <span className="text-sm">Twitter</span>
            </div>
            <div className="bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex flex-col items-center p-3 rounded">
              <FaInstagram size={20} />
              <span className="text-sm">Instagram</span>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-auto flex space-x-3">
            <div className="flex-1 bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex items-center justify-center space-x-2 p-2 rounded">
              <FaHome />
              <span>Home</span>
            </div>
            {!isLoggedIn ? (
              <div className="flex-1 bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex items-center justify-center space-x-2 p-2 rounded">
                <FaSignInAlt />
                <span onClick={() => setIsLoggedIn(true)}>Log in</span>
              </div>
            ) : (
              <div className="flex-1 bg-gradient-to-r from-[#706D6D] to-[#000000] text-white flex items-center justify-center space-x-2 p-2 rounded">
                <FaSignInAlt />
                <span onClick={() => setIsLoggedIn(false)}>Log out</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
