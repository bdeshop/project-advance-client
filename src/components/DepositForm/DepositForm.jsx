import React, { useState } from "react";
import { useNavigate } from "react-router";

const DepositForm = () => {
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  // Payment Methods
  const paymentOptions = [
    {
      id: "bkash",
      name: "bkash",
      image: "https://i.ibb.co/kszjQzZn/unnamed.webp",
    },
    {
      id: "nagad",
      name: "nagad",
      image: "https://i.ibb.co/sdgCF1HP/icon-256x256.png",
    },
    {
      id: "rocket",
      name: "rocket",
      image:
        "https://i.ibb.co/S4JZ706r/dutch-bangla-rocket-logo-png-seeklogo-317692.png",
    },
  ];

  // Promotion Data
  const promo = {
    id: 1,
    title: "Easy 5% Deposit Bonus",
    type: "Sports",
    start: "2025-06-01 02:00:00",
    end: "2026-01-01 01:59:00",
    bonusPercent: 5,
  };

  // 5% Bonus হিসাব
  const totalWithBonus =
    selectedPromo && amount
      ? (
          parseFloat(amount) +
          (parseFloat(amount) * promo.bonusPercent) / 100
        ).toFixed(2)
      : amount;

  const handleAmountChange = (value) => {
    if (value >= 0) setAmount(value);
  };

  const handleQuickAdd = (value) => {
    setAmount((prev) => (Number(prev) || 0) + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (!paymentType) {
      alert("Please select payment type.");
      return;
    }

    if (!amount || amount < 100) {
      alert("Please enter a valid amount (min 100 BDT).");
      return;
    }

    // Navigate to selected payment page
    navigate(`/deposit-${selectedMethod}`, {
      state: { paymentType, amount, promotion: selectedPromo ? promo : null },
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-500 shadow-md rounded-md mt-8 p-5 border">
      {/* Top Banner */}
      <div className="bg-yellow-500 text-center text-white font-bold py-2 rounded">
        1 PBU = 100 BDT
      </div>

      {/* Promotion Section */}
      <div className="mt-4">
        <h2 className="font-semibold mb-2 text-white">
          Select Your Promotion
        </h2>
        <div
          onClick={() =>
            setSelectedPromo(selectedPromo ? null : promo.id)
          }
          className={`border rounded-md cursor-pointer p-4 flex justify-between items-center ${
            selectedPromo
              ? "border-orange-500 bg-black text-white"
              : "border-gray-300"
          }`}
        >
          <div>
            <div className="font-bold">{promo.title}</div>
            <div className="text-sm">{promo.type}</div>
            <div className="text-xs text-white">
              {promo.start} ~ {promo.end}
            </div>
          </div>
          <input
            type="radio"
            checked={selectedPromo === promo.id}
            onChange={() => setSelectedPromo(promo.id)}
          />
        </div>

        {!selectedPromo && (
          <p className="text-red-500 text-sm mt-1">
            Promotion is not selected
          </p>
        )}
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2 text-white">
          Select Payment Method <span className="text-red-500">*</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {paymentOptions.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-28 h-24 border rounded-md flex flex-col justify-center items-center cursor-pointer hover:shadow-md transition ${
                selectedMethod === method.id
                  ? "border-orange-500 scale-105"
                  : "border-gray-300"
              }`}
            >
              <img
                src={method.image}
                alt={method.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm font-semibold mt-1">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Type Dropdown */}
      {selectedMethod && (
        <div className="mt-5">
          <h2 className="font-semibold mb-2 text-white">
            Select Payment Type <span className="text-red-500">*</span>
          </h2>
          <select
            className="border rounded-md w-full p-2 bg-gray-700"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="">-- Select Type --</option>
            <option value="agent">Agent</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      )}

      {/* Amount Section */}
      <div className="mt-5">
        <div className="flex flex-wrap gap-2">
          {[10000, 5000, 1000, 500, 100].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => handleQuickAdd(v)}
              className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-md font-semibold"
            >
              +{v}
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center">
          <span className="font-semibold mr-2">BDT</span>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="flex-1 border rounded-md p-2"
          />
        </div>
        <div className="text-right text-sm text-white mt-1">
          BDT 100 - BDT 25000
        </div>
      </div>

      {/* Bonus Info */}
      {selectedPromo && amount && (
        <div className="mt-3 text-green-700 font-medium">
          🎁 5% Bonus Applied! Total: {totalWithBonus} BDT
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:cursor-pointer hover:bg-yellow-500 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default DepositForm;
