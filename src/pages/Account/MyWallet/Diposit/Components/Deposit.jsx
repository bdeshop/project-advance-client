import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const DepositPage = () => {
  const { id } = useParams(); // Get payment method ID (bkash, nagad, rocket)
  const { state } = useLocation(); // Get amount and other data from DepositForm
  const [transactionId, setTransactionId] = useState("");
  const [number, setNumber] = useState("");
  const [paymentSettings, setPaymentSettings] = useState(null);

  // Fetch payment method settings from backend
  useEffect(() => {
    const fetchPaymentSettings = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/deposit/method/${id}`);
        setPaymentSettings(res.data);
      } catch (err) {
        console.error("Error fetching payment settings:", err);
        toast.error("পেমেন্ট সেটিংস লোড করতে ব্যর্থ!");
      }
    };
    fetchPaymentSettings();
  }, [id]);

  if (!paymentSettings) return <div className="text-center mt-10 text-white">লোড হচ্ছে...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/deposit/submit`, {
        transactionId,
        number,
        paymentMethod: id,
        amount: state?.amount,
      })
      .then(() => {
        toast.success("লেনদেন সফলভাবে জমা দেওয়া হয়েছে!");
        setTransactionId("");
        setNumber("");
      })
      .catch((err) => {
        console.error("Error submitting transaction:", err);
        toast.error("লেনদেন জমা দিতে ব্যর্থ!");
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentSettings.transactionNumber);
    toast.success("নম্বরটি কপি হয়েছে!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: paymentSettings.bgColor || "#f7f8fc" }}
    >
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg border border-gray-100">
        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-6">
          <img
            src={paymentSettings.logo}
            alt={`${id} Logo`}
            className="w-32 mb-2"
          />
          <p className="text-gray-600 text-sm">{paymentSettings.companyName}</p>
        </div>

        {/* Transaction Info */}
        <div className="flex justify-between items-center bg-[#f9fafb] rounded-xl border border-gray-200 mx-5 mt-6 px-4 py-3">
          <div>
            <p className="text-sm text-gray-600">লেনদেন নম্বর:</p>
            <p className="text-xs text-gray-800 mt-1 font-mono">
              {paymentSettings.transactionId}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-pink-600">৳ {state?.amount || 0}</p>
          </div>
        </div>

        {/* Deposit Form */}
        <form onSubmit={handleSubmit} className="p-4">
          <div
            className="mt-6 px-4 py-5 rounded-xl text-white space-y-5"
            style={{ backgroundColor: paymentSettings.formBgColor || "#e2136e" }}
          >
            {/* Transaction ID */}
            <div>
              <label className="block font-semibold mb-2 text-center text-sm">
                {paymentSettings.transactionIdLabel || "ট্রানজেকশন আইডি দিন"}
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="ট্রানজেকশন আইডি দিন"
                className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                required
              />
              <p className="text-xs mt-1 text-pink-100">
                {paymentSettings.transactionIdHint || "দয়া করে আপনার ট্রানজেকশন আইডি দিন"}
              </p>
            </div>

            {/* Number */}
            <div>
              <label className="block font-semibold mb-2 text-center text-sm">
                {paymentSettings.numberLabel || "লেনদেন নম্বর লিখুন"}
              </label>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                required
              />
              <p className="text-xs mt-1 text-pink-100">
                {paymentSettings.numberHint || "দয়া করে আপনার লেনদেন নম্বর দিন"}
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              {paymentSettings.instructions.map((instruction, index) => (
                <div key={index} className="text-white">
                  <ul className="list-disc pl-4">
                    <li className="text-[13px] border-b border-pink-800 pb-2 font-bold">
                      {instruction.text}
                      {instruction.isNumber && (
                        <div className="flex">
                          <span className="bg-white text-pink-700 px-2 py-1 rounded font-bold">
                            {paymentSettings.transactionNumber}
                          </span>
                          <button
                            type="button"
                            onClick={copyToClipboard}
                            className="bg-yellow-300 text-pink-700 flex items-center gap-1 px-3 py-1 rounded font-semibold hover:bg-yellow-400 transition"
                          >
                            <FaCopy /> কপি
                          </button>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 text-white font-semibold py-2 rounded-md hover:cursor-pointer transition"
            style={{ backgroundColor: paymentSettings.formBgColor || "#e2136e" }}
          >
            {paymentSettings.submitButtonText || "যাচাই করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositPage;