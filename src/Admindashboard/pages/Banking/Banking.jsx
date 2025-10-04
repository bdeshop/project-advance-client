// Banking.jsx
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import MoneyTransfer from "../../components/MoneyTransfer/MoneyTransfer";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const { user } = useContext(AuthContext);
  const [totalBalance, setTotalBalance] = useState(0);
  const [SubAgentTotalBalance, setSubAgentTotalBalance] = useState(0);
  const [agentTotalBalance, setAgentTotalBalance] = useState(0);
  const [masterTotalBalance, setMasterTotalBalance] = useState(0);
  const [subAdminTotalBalance, setSubAdminTotalBalance] = useState(0);

  // API থেকে মোট balance আনা
  const fetchTotalBalance = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/total-balance`
      );
      setTotalBalance(res.data.totalBalance);
    } catch (error) {
      console.error("Error fetching total balance:", error);
    }
  };

  // প্রথমে লোড হলে ডেটা নিয়ে আসবে
  useEffect(() => {
    fetchTotalBalance();
  }, []);

  // Sub Agent এর মোট balance আনা
  const fetchSubAgentTotalBalance = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/subagents/total-balance`
      );
      setSubAgentTotalBalance(res.data.totalBalance);
    } catch (error) {
      console.error("Error fetching total Sub Agent balance:", error);
    }
  };

  // প্রথম লোডে ডেটা আনা
  useEffect(() => {
    fetchSubAgentTotalBalance();
  }, []);

  const fetchAgentTotalBalance = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/agents/total-balance`
      );
      setAgentTotalBalance(res.data.totalBalance);
    } catch (error) {
      console.error("Error fetching total Agent balance:", error);
    }
  };

  useEffect(() => {
    fetchAgentTotalBalance();
  }, []);


// Backend থেকে Master এর মোট balance আনা
  const fetchMasterTotalBalance = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/masters/total-balance`
      );
      setMasterTotalBalance(res.data.totalBalance);
    } catch (error) {
      console.error("Error fetching total Master balance:", error);
    }
  };

  useEffect(() => {
    fetchMasterTotalBalance();
  }, []); 

   // Backend থেকে Sub Admin এর মোট balance আনা
  const fetchSubAdminTotalBalance = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/subadmins/total-balance`
      );
      setSubAdminTotalBalance(res.data.totalBalance);
    } catch (error) {
      console.error("Error fetching total Sub Admin balance:", error);
    }
  };

  useEffect(() => {
    fetchSubAdminTotalBalance();
  }, []);


  const fetchBalance = async () => {
    if (!user) return;

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/balance`,
        {
          params: { role: user.role, id: user._id }, // id পাঠানো হচ্ছে
        }
      );

      if (res.data?.balance !== undefined) {
        setBalance(res.data.balance);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to fetch balance");
    }
  };

  // ---------------- Add Balance ----------------
  const handleAddBalance = async () => {
    if (!amount || isNaN(amount)) {
      toast.error("Please enter a valid amount!");
      return;
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/mother-admin/balance`,
        { amount: parseFloat(amount), role: user?.role } // role পাঠানো হবে
      );

      if (res.data?.admin) {
        toast.success(res.data.message || "Balance added successfully!");
        setAmount("");
      }
    } catch (error) {
      console.error(error);
      if (error.response?.status === 403) {
        toast.error("Only Mother Admin can add balance!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [user]);

  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Total User Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">Total User Balance</h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
              USD ({totalBalance.toFixed(2)})
            </div>
          </div>
          {/* Total Sub Agent Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">
              Total Sub Agent Balance
            </h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
              USD ({SubAgentTotalBalance.toFixed(2)})
            </div>
          </div>
          {/* Total Agent Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">Total Agent Balance</h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
              USD ({agentTotalBalance.toFixed(2)})
            </div>
          </div>
          {/* Total Master Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">Total Master Balance</h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
              USD ({masterTotalBalance.toFixed(2)})
            </div>
          </div>
          {/* Total Sub Admin Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">
              Total Sub Admin Balance
            </h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
             USD ({subAdminTotalBalance.toFixed(2)})
            </div>
          </div>
          {/* Mother Admin Balance */}
          <div className="bg-black text-white rounded-lg p-4 shadow-md">
            <h2 className="text-center font-semibold">Mother Admin Balance</h2>
            <div className="bg-yellow-600 text-center text-black font-bold mt-3 py-2 rounded-lg">
              USD ({balance.toFixed(2)})
            </div>
          </div>
          {/* Add Balance */}
          <div className="bg-red-600 text-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center">
            <h2 className="text-center font-semibold mb-3">
              Add Mother Admin Balance
            </h2>
            <div className="flex w-full">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-l-md outline-none text-black"
              />
              <button
                onClick={handleAddBalance}
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <MoneyTransfer></MoneyTransfer>
    </>
  );
};

export default Banking;
