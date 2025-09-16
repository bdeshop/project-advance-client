import React, { useState } from "react";
import { FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router";
// import { useAuth } from "../../hooks/useAuth";

const AdminLogin = () => {
  // Validation code state
  const [code, setCode] = useState(generateCode());
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to generate random 4-digit code
  function generateCode() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  // Refresh code
  const handleRefresh = () => {
    setCode(generateCode());
  };

  // ✅ Handle Login function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending:", { email, password }); // debug ফ্রন্টএন্ড
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Token & user info handling
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center  bg-[url('https://i.ibb.co.com/bRLrsYTN/casino-test.webp')]
                 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex justify-center items-center ">
          <div className="hidden lg:block rounded-2xl pl-2 pt-2 pb-2">
            <img
              src="https://i.ibb.co.com/dJ6vjC1V/msid-110593191-width-96-height-65.webp"
              alt="picture"
              className="mx-auto h-[402px] rounded-l-2xl"
            />
          </div>
          <div className=" flex items-center justify-center bg-black px-8 py-6 lg:px-28 lg:py-7  lg:rounded-r-2xl">
            <div className="w-full max-w-sm bg-transparent text-center">
              {/* Logo */}
              <img
                src="https://i.ibb.co/3FW7ptF/logo.png" // এখানে আপনার লোগো দিন
                alt="Logo"
                className="mx-auto h-16 mb-4"
              />

              {/* Title */}
              <h2 className="text-white text-lg font-semibold mb-6">
                Mother Admin Login
              </h2>
     
              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Username */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                {/* Validation Code */}
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Validation Code"
                    className="w-full px-3 py-2 rounded-l-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <span className="px-3 py-2 bg-white border border-gray-300 font-bold">
                    {code}
                  </span>
                  <button
                    type="button"
                    onClick={handleRefresh}
                    className="px-3 py-2 bg-yellow-500 rounded-r-md hover:bg-yellow-600 flex items-center justify-center"
                  >
                    <FaRedo
                      size={25}
                      className="text-white hover:cursor-pointer"
                    />
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md hover:cursor-pointer"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
