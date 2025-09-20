import React, { useEffect, useRef, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaUserCircle, FaCog } from "react-icons/fa";

const AdHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // row wise dropdown open
  const menuRef = useRef(null);

  // বাইরে ক্লিক করলে dropdown বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const data = [
    {
      username: "admin88",
      fullname: "",
      email: "",
      balance: 0,
      joinedAt: "16th Aug 2025, 5:05 pm",
      lastLogin: "a month ago",
      role: "",
      status: "Activated",
    },
    {
      username: "adminsn8383",
      fullname: "",
      email: "",
      balance: 0,
      joinedAt: "16th Aug 2025, 5:48 pm",
      lastLogin: "2 minutes ago",
      role: "mother-admin",
      status: "Activated",
    },
    {
      username: "demoUser",
      fullname: "",
      email: "demo@gmail.com",
      balance: 0,
      joinedAt: "14th Sep 2025, 11:48 pm",
      lastLogin: "6 days ago",
      role: "",
      status: "Activated",
    },
  ];

  return (
    <>
      <div className="p-4 space-y-6">
        {/* Top Search & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Find Member"
                className="input input-bordered w-60"
              />
              <button className="btn bg-yellow-600 text-white">Search</button>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">Admin List</span>
              <select className="select select-bordered w-32">
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <span className="font-medium">Total records: 4</span>
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-outline flex items-center gap-2"
            >
              <FaUsers /> Add Client
            </button>
            <button className="btn btn-outline">
              <IoReload />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-black text-center rounded-md p-4">
            <h3 className="text-white font-semibold">Total Balance</h3>
            <div className="bg-yellow-600 text-white rounded-md py-1 mt-2">
              USD (0.00)
            </div>
          </div>

          <div className="bg-black text-center rounded-md p-4">
            <h3 className="text-white font-semibold">Remaining Balance</h3>
            <div className="bg-yellow-600 text-white rounded-md py-1 mt-2">
              USD (0.00)
            </div>
          </div>

          <div className="bg-black text-center rounded-md p-4">
            <h3 className="text-white font-semibold">Total Self Deposit</h3>
            <div className="bg-yellow-600 text-white rounded-md py-1 mt-2">
              USD (0.00)
            </div>
          </div>

          <div className="bg-black text-center rounded-md p-4">
            <h3 className="text-white font-semibold">Total Exposure</h3>
            <div className="bg-yellow-600 text-white rounded-md py-1 mt-2">
              USD (0.00)
            </div>
          </div>

          <div className="bg-black text-center rounded-md p-4">
            <h3 className="text-white font-semibold">Total Self Withdrawal</h3>
            <div className="bg-yellow-600 text-white rounded-md py-1 mt-2">
              USD (0.00)
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md p-4 ">
        <table className="table table-zebra w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="border px-4 py-2">USERNAME</th>
              <th className="border px-4 py-2">FULL NAME</th>
              <th className="border px-4 py-2">EMAIL</th>
              <th className="border px-4 py-2">BALANCE</th>
              <th className="border px-4 py-2">JOINED AT</th>
              <th className="border px-4 py-2">LAST LOGIN AT</th>
              <th className="border px-4 py-2">ROLE</th>
              <th className="border px-4 py-2">STATUS</th>
              <th className="border px-4 py-2">ACTIONS</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="text-center">
                {/* Username */}
                <td className="border px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-500 text-white rounded-sm">
                      AD
                    </span>
                    <span className="text-blue-600">{row.username}</span>
                  </div>
                </td>

                {/* Full Name */}
                <td className="border px-4 py-2">{row.fullname}</td>

                {/* Email */}
                <td className="border px-4 py-2">
                  <span className="text-red-600">{row.email}</span>
                </td>

                {/* Balance */}
                <td className="border px-4 py-2">{row.balance}</td>

                {/* Joined At */}
                <td className="border px-4 py-2 text-nowrap">{row.joinedAt}</td>

                {/* Last Login */}
                <td className="border px-4 py-2">{row.lastLogin}</td>

                {/* Role */}
                <td className="border px-4 py-2 text-nowrap">{row.role}</td>

                {/* Status */}
                <td className="border px-4 py-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    {row.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="border px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button className="btn btn-xs bg-gray-200">BS</button>
                    <div
                      className="relative inline-block text-left"
                      ref={menuRef}
                    >
                      {/* Settings Button */}
                      <button
                        className="btn btn-xs bg-gray-200 p-2 rounded"
                        onClick={() =>
                          setOpenIndex(openIndex === idx ? null : idx)
                        }
                      >
                        <FaCog />
                      </button>

                      {/* Dropdown Menu */}
                      {openIndex === idx && (
                        <div className="absolute mt-2 right-0 w-40 bg-white border rounded shadow-lg z-10">
                          <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100">
                            Ban User
                          </button>
                          <button className="w-full text-left px-4 py-2 text-yellow-600 hover:bg-yellow-100">
                            Deactivate
                          </button>
                        </div>
                      )}
                    </div>
                    <button className="btn btn-xs bg-gray-200">
                      <FaUsers />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-md shadow-lg w-full max-w-sm p-2">
            {/* Header */}
            <div className="flex justify-between items-center  px-4 py-2">
              <h2 className="text-lg font-semibold">Create user</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl hover:cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 font-bold">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="mb-2 font-bold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <label className="mb-2 font-bold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />

              {/* Username */}
              <label className="mb-2 font-bold">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
              />

              {/* Role Dropdown */}
              <label className="mb-2 font-bold">Role</label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select a role
                </option>
                <option>User</option>
                <option>Sub Agent</option>
                <option>Agent</option>
                <option>Master</option>
                <option>Sub Admin</option>
                <option>Admin</option>
              </select>

              {/* Password */}
              <label className="mb-2 font-bold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />

              {/* Confirm Password */}
              <label className="mb-2 font-bold">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end px-4 py-2">
              <button
                onClick={() => setIsOpen(false)}
                className="btn bg-yellow-700 hover:bg-yellow-800 text-white"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdHome;
