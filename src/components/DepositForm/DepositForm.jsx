import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const DepositForm = () => {
  const [settings, setSettings] = useState(null);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const navigate = useNavigate();

  // Fetch settings from backend API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/deposit-payment/settings`);
        setSettings(res.data);
        if (res.data.currencies && res.data.currencies.length > 0) {
          setSelectedCurrency(res.data.currencies[0]);
        }
      } catch (err) {
        console.error("Error fetching deposit settings:", err);
        toast.error("সেটিংস লোড করতে ব্যর্থ!");
      }
    };
    fetchSettings();
  }, []);

  if (!settings) return <div className="text-center mt-10 text-white">লোড হচ্ছে...</div>;

  const paymentOptions = settings.payment_methods || [];
  const promo = settings.promotions?.[0] || null;
  const paymentTypes = settings.payment_types || [];
  const currencies = settings.currencies || [];
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
      toast.error("অনুগ্রহ করে একটি পেমেন্ট মেথড নির্বাচন করুন।");
      return;
    }

    if (!paymentType) {
      toast.error("অনুগ্রহ করে পেমেন্ট টাইপ নির্বাচন করুন।");
      return;
    }

    if (!selectedCurrency) {
      toast.error("অনুগ্রহ করে মুদ্রা নির্বাচন করুন।");
      return;
    }

    if (!amount || amount < settings.min_amount) {
      toast.error(`অনুগ্রহ করে একটি বৈধ পরিমাণ লিখুন (ন্যূনতম ${settings.min_amount})।`);
      return;
    }

    navigate(`/deposit/${selectedMethod}`, {
      state: { paymentType, amount, currency: selectedCurrency, promotion: selectedPromo ? promo : null },
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 shadow-md rounded-md mt-8 p-5 border border-gray-700">
      {/* Top Banner */}
      <div className="bg-yellow-500 text-center text-white font-bold py-2 rounded">
        {currencyRate} {currencies[0]} = {settings.pbu_rate2} {currencies[0]}
      </div>

      {/* Promotion Section */}
      {promo && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2 text-white">প্রোমোশন নির্বাচন করুন</h2>
          <div
            onClick={() => setSelectedPromo(selectedPromo ? null : promo.id)}
            className={`border rounded-md cursor-pointer p-4 flex justify-between items-center ${
              selectedPromo ? "border-orange-500 bg-black text-white" : "border-gray-300"
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
            <p className="text-red-500 text-sm mt-1">প্রোমোশন নির্বাচন করা হয়নি</p>
          )}
        </div>
      )}

      {/* Payment Method */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2 text-white">
          পেমেন্ট মেথড নির্বাচন করুন <span className="text-red-500">*</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {paymentOptions.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-28 h-24 border rounded-md flex flex-col justify-center items-center cursor-pointer hover:shadow-md transition ${
                selectedMethod === method.id
                  ? "border-orange-500 scale-105 bg-gray-700"
                  : "border-gray-300"
              }`}
            >
              <img
                src={method.image}
                alt={method.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm font-semibold mt-1 text-white">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Type Dropdown */}
      {selectedMethod && paymentTypes.length > 0 && (
        <div className="mt-5">
          <h2 className="font-semibold mb-2 text-white">
            পেমেন্ট টাইপ নির্বাচন করুন <span className="text-red-500">*</span>
          </h2>
          <select
            className="border rounded-md w-full p-2 bg-gray-700 text-white"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="">-- টাইপ নির্বাচন করুন --</option>
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
              className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-md font-semibold text-black"
            >
              +{v}
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center">
          <span className="font-semibold mr-2 text-white">{currencies[0]}</span>
          <input
            type="number"
            placeholder="পরিমাণ লিখুন"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="flex-1 border rounded-md p-2 bg-gray-700 text-white"
          />
        </div>
        <div className="text-right text-sm text-white mt-1">
          {currencies[0]} {settings.min_amount} - {settings.max_amount}
        </div>
      </div>

      {/* Bonus Info */}
      {selectedPromo && amount && promo && (
        <div className="mt-3 text-green-400 font-medium">
          🎁 {promo.bonusPercent}% বোনাস প্রয়োগ করা হয়েছে! মোট: {totalWithBonus} {selectedCurrency}
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
      >
        জমা দিন
      </button>
    </div>
  );
};

export default DepositForm;