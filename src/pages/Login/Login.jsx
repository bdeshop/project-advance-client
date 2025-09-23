import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginImage } = useContext(AuthContext);

  return (
    <div className="lg:hidden flex items-center justify-center bg-gray-200 mt-12">
      <div className="w-full bg-green-700 overflow-hidden shadow-lg">
        {/* Top Banner */}
        <div className="relative">
          <img
            src={loginImage} // replace with your image path
            alt="Login Banner"
            className="w-full"
          />
          {/* Close Button */}
          {/* <button className="absolute top-2 right-2 bg-black text-white rounded-full p-2">
            <Link to="/">
              <ImCross size={20} />
            </Link>
          </button> */}
        </div>

        {/* Form Section */}
        <div className="bg-green-700 px-6 py-6 space-y-4">
          {/* User Id */}
          <input
            type="text"
            placeholder="4-15 char,allow number"
            className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "number" : "password"}
              placeholder="8-20 char"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Validation Code */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Validation Code"
              className="flex-1 px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <span className="bg-white px-3 py-2 rounded text-black font-bold">
              3972
            </span>
          </div>

          {/* Login Button */}
          <button className="w-full py-2 bg-yellow-500 text-black font-semibold rounded mt-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
