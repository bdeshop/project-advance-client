import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const DepositForm = () => {
  const [settings, setSettings] = useState(null);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedCurrency2, setSelectedCurrency2] = useState("");
  const navigate = useNavigate();

  // Fetch settings from backend API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/deposit/settings`);
        setSettings(res.data);
        if (res.data.currencies && res.data.currencies.length > 0) {
          setSelectedCurrency(res.data.currencies[0]);
        }
      } catch (err) {
        console.error("Error fetching deposit settings:", err);
      }
    };
    fetchSettings();
  }, []);

  if (!settings) return <div className="text-center mt-10 text-white">Loading...</div>;

  const paymentOptions = settings.payment_methods || [];
  const promo = settings.promotions?.[0] || null;
  const paymentTypes = settings.payment_types || [];
  const currencies = settings.currencies || [];
  const currencies2 = settings.currencies2 || [];
  const currencyRate = settings.pbu_rate || 1;

  // Total with bonus calculation
  const totalWithBonus =
    selectedPromo && amount && promo
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

    if (!selectedCurrency) {
      alert("Please select currency.");
      return;
    }

    if (!amount || amount < settings.min_amount) {
      alert(`Please enter a valid amount (min ${settings.min_amount}).`);
      return;
    }

    navigate(`/deposit-${selectedMethod}`, {
      state: { paymentType, amount, currency: selectedCurrency, promotion: selectedPromo ? promo : null },
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-500 shadow-md rounded-md mt-8 p-5 border">
      {/* Top Banner */}
      <div className="bg-yellow-500 text-center text-white font-bold py-2 rounded">
        {currencyRate} {currencies} = {settings.pbu_rate2} {currencies2}
      </div>

      {/* Promotion Section */}
      {promo && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2 text-white">Select Your Promotion</h2>
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
            <p className="text-red-500 text-sm mt-1">Promotion is not selected</p>
          )}
        </div>
      )}

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
              <span className="text-sm font-semibold mt-1">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Type Dropdown */}
      {selectedMethod && paymentTypes.length > 0 && (
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
            {paymentTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
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
          <span className="font-semibold mr-2">{currencies}</span>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="flex-1 border rounded-md p-2"
          />
        </div>
        <div className="text-right text-sm text-white mt-1">
          {currencies} {settings.min_amount} - {settings.max_amount}
        </div>
      </div>

      {/* Bonus Info */}
      {selectedPromo && amount && promo && (
        <div className="mt-3 text-green-700 font-medium">
          🎁 {promo.bonusPercent}% Bonus Applied! Total: {totalWithBonus} {selectedCurrency}
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
