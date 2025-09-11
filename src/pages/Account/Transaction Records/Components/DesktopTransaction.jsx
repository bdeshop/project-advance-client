import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  FaWallet,
} from "react-icons/fa";


const DesktopTransaction = () => {
  const platforms = [
    "All",
    "Deposit",
    "Withdraw",
    
  ];

  const gameTypes = [
    "All",
    "Rejected",
    "Approved"
  ];

  const dates = ["Today", "Yesterday", "Last 7 days"];

  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedGameType, setSelectedGameType] = useState("All");
  const [selectedDate, setSelectedDate] = useState("Today");

  const renderButton = (label, selected, onClick) => (
    <button
      key={label}
      onClick={() => onClick(label)}
      className={`relative flex items-center justify-center px-4 py-2 border rounded-md text-sm text-white
        ${selected === label ? "border-yellow-400" : "border-gray-400"}
        hover:border-yellow-400 transition`}
    >
      {label}
      {selected === label && (
        <FaCheck className="absolute top-1 right-1 text-yellow-400 text-xs" />
      )}
    </button>
  );
  return (
    <>
      {/* Header */}
      <div>
        <div className="flex items-center m-6 bg-gray-700 p-4 rounded-lg">
          <div className="w-1/2">
            <p className="text-white">Main Wallet</p>
            <p className="text-green-400 text-xl font-bold">৳ 0</p>
          </div>
          <div className="w-1/2">
            <p className="text-white">Security Level</p>
            <p className="text-green-400 font-bold">Safe</p>
          </div>
        </div>
      </div>
      {/* Billing Records */}
      <div className="m-6">
        <div className="hidden md:block bg-gray-700 text-white p-4 rounded-md shadow-lg">
          {/* Header */}
          <div className="mb-4 border-b border-dashed border-yellow-500 pb-2">
            <h2 className="text-yellow-400 font-semibold">
              {" "}
              <span className="text-2xl">|</span> Transaction Records
            </h2>
          </div>

          {/* Platform */}
          <div className="mb-6">
            <p className="text-sm mb-2">Payment Type</p>
            <div className="grid grid-cols-7 gap-2">
              {platforms.map((p) =>
                renderButton(p, selectedPlatform, setSelectedPlatform)
              )}
            </div>
          </div>

          {/* Game Type */}
          <div className="mb-6">
            <p className="text-sm mb-2">Status</p>
            <div className="grid grid-cols-7 gap-2">
              {gameTypes.map((g) =>
                renderButton(g, selectedGameType, setSelectedGameType)
              )}
            </div>
          </div>

          {/* Date */}
          <div className="mb-6">
            <p className="text-sm mb-2">Date</p>
            <div className="grid grid-cols-7 gap-2">
              {dates.map((d) => renderButton(d, selectedDate, setSelectedDate))}
            </div>
          </div>
        </div>
      </div>
      {/* Billing Records History */}
      <div className="m-6">
        <div className="hidden md:block bg-gray-700 text-white p-5 rounded-md shadow-lg mt-4">

          {/* Table */}
          <div className="border border-blue-600 rounded ">
            {/* Table Head */}
            <div className="grid grid-cols-6 bg-blue-600 text-white text-sm font-semibold">
                <div className="p-2 border-r border-blue-400">SI: 01</div>
              <div className="p-2 border-r border-blue-400">Platform</div>
              <div className="p-2 border-r border-blue-400">Game Type</div>
              <div className="p-2 border-r border-blue-400">Game</div>
              <div className="p-2 border-r border-blue-400">Bet</div>
              <div className="p-2">Tnx Date</div>
            </div>

            {/* No Data Section */}
            <div className="flex flex-col items-center justify-center py-12">
              <FaWallet className="text-6xl text-gray-400 mb-2" />
              <p className="text-gray-400">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTransaction;
