import React, { useState } from "react";
import { FaExclamationCircle, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router";

const DesktopDeposit = () => {
  const [showPromotions, setShowPromotions] = useState(false);
  const [amount, setAmount] = useState(0);

  const amountOptions = [100, 500, 1000, 2000, 5000, 10000, 20000, 25000];

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
      <div className="flex">
        <div className="bg-gray-700 text-white m-6 p-6 rounded-lg w-11/16">
          {/* Tabs */}
          <div className="flex justify-between gap-2 mb-6 pb-3 border-b-2 border-dashed border-yellow-500">
            <div>
              <h3 className="text-yellow-500 font-bold border-l-2 text-2xl pl-2">
                Funds
              </h3>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  `px-12 py-2 font-bold ${
                    isActive
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                  }`
                }
              >
                Deposit
              </NavLink>

              {/* Withdrawal */}
              <NavLink
                to="/profile/my-wallet/withdraw"
                className={({ isActive }) =>
                  `px-12 py-2  ${
                    isActive
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                  }`
                }
              >
                Withdrawal
              </NavLink>
            </div>
          </div>

          {/* Promotions */}
          <div className="flex justify-between items-center ">
            <h2 className="font-bold text-lg">Promotions</h2>
            <button
              onClick={() => setShowPromotions(!showPromotions)}
              className="bg-yellow-500 px-4 py-1 rounded text-white font-bold"
            >
              Promotion{" "}
              <span className="px-3 bg-red-600 text-white rounded-xl">5</span>{" "}
              {showPromotions ? "▲" : "▼"}
            </button>
          </div>
          {showPromotions && (
            <div className="flex gap-4 mb-6 p-4 bg-gray-800 rounded-lg mt-4">
              <img
                src="https://i.ibb.co.com/tpNVnLRd/what-is-a-slot-machine.webp"
                alt="promo1"
                className="rounded w-48 h-24 object-cover"
              />
              <img
                src="https://i.ibb.co.com/tpNVnLRd/what-is-a-slot-machine.webp"
                alt="promo2"
                className="rounded w-48 h-24 object-cover"
              />
              <img
                src="https://i.ibb.co.com/tpNVnLRd/what-is-a-slot-machine.webp"
                alt="promo3"
                className="rounded w-48 h-24 object-cover"
              />
              <img
                src="https://i.ibb.co.com/tpNVnLRd/what-is-a-slot-machine.webp"
                alt="promo4"
                className="rounded w-48 h-24 object-cover"
              />
              <img
                src="https://i.ibb.co.com/tpNVnLRd/what-is-a-slot-machine.webp"
                alt="promo4"
                className="rounded w-48 h-24 object-cover"
              />
            </div>
          )}

          {/* Payment Method */}
          <h3 className="mb-4 mt-4 font-bold">Deposit Channel</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="mb-2 text-gray-400">
              <span className="text-sky-400">Amount</span>{" "}
              <span className="text-yellow-400 ml-3">৳ 1,000 - ৳ 49,999</span>
            </p>

            {/* Amount Buttons */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {amountOptions.map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`px-2 py-2 rounded border ${
                    amount === value
                      ? "bg-yellow-500 text-black font-bold hover:cursor-pointer"
                      : "bg-gray-700 hover:bg-gray-600 hover:cursor-pointer"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Note Box */}
            <div className="bg-blue-900 text-white p-4 rounded mb-6 text-sm font-bold">
              <p className="flex items-center gap-1">
                <FaExclamationCircle /> Dear all member, to speed up your
                deposit please remind player MUST enter UTR or order will be
                failed.
              </p>
              <ol className="list-decimal list-inside mt-2">
                <li>Fill in correct UPI which he is paying.</li>
                <li>Scan the QR-code.</li>
                <li>Fill in UTR after Deposit.</li>
              </ol>
              <p className="mt-2">
                Reminder: Do not save on your device the account or UPI ID’s
                displayed on website to avoid losing money.
              </p>
            </div>

            {/* Input and Deposit Button */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-1/4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              />
              <button className="bg-yellow-500 text-white px-6 py-2 rounded font-bold">
                Deposit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-111 h-60 bg-[#1f2937] rounded-md shadow-md flex flex-col items-center justify-center relative">
            {/* Title */}
            <h2 className="absolute top-2 left-2 text-sm font-medium text-sky-400">
              Deposit Records
            </h2>

            {/* Icon */}
            <div className="flex flex-col items-center justify-center">
              <FaWallet className="text-gray-400 text-5xl mb-2" />

              {/* Text */}
              <p className="text-gray-400 text-sm font-medium">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopDeposit;
