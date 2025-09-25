import React, { useContext, useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { signupImage ,mobileMenu} = useContext(AuthContext);
  const { signupBtnColor, btnFontSize ,buttonFontColor ,pageBgColor ,pageFontSize} = mobileMenu;

  return (
    <div style={
      {backgroundColor:pageBgColor,
        
      }
    } className="flex items-center justify-center min-h-screen  mt-4 lg:mt-26">
      <div className="w-full max-w-7xl  border-2 border-blue-500 rounded-md p-6 md:flex">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 style={{
                color:buttonFontColor,
                borderColor: buttonFontColor, 
              }} className="text-center  text-xl font-semibold border-b border-yellow-500 pb-2 mb-6">
            Sign up
          </h2>
          <form style={
            {
              fontSize: `${pageFontSize}px`,
            }
          } className="space-y-4">
            {/* User ID */}
            <div>
              <label className="block text-white mb-1">User Id</label>
              <input
                type="text"
                placeholder="4-15 char, allow number"
                className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-white mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="8-20 char"
                className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-white mb-1">Confirm Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-300"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-white mb-1">Currency</label>
              <select
                className="w-full hover:cursor-pointer px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                defaultValue="BDT"
              >
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
              </select>
            </div>

            {/* Mobile Only Fields */}
            <div className="block md:hidden space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-white mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                />
              </div>

              {/* Refer Code */}
              <div>
                <label className="block text-white mb-1">Refer Code</label>
                <input
                  type="text"
                  placeholder="Enter if you have one"
                  className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                />
              </div>

              {/* Verification Code */}
              <div>
                <label className="block text-white mb-1">
                  Verification Code
                </label>
                <div className="flex items-center gap-2 relative">
                  <input
                    type="text"
                    placeholder="Enter 4 digit code"
                    className="flex-1 px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
                  />
                  <span style={{
                backgroundColor:signupBtnColor,
                color:buttonFontColor,
                fontSize: `${btnFontSize}px`,
              }} className="px-3 py-2 rounded font-bold absolute ml-36">
                    <span className="flex items-center gap-1">
                      7278 <ImSpinner11 />
                    </span>
                  </span>
                </div>
              </div>

              {/* Confirm Button */}
              <button style={{
                backgroundColor:signupBtnColor,
                color:buttonFontColor,
                fontSize: `${btnFontSize}px`,
              }} className="w-full py-2 font-semibold rounded mt-4">
                Confirm
              </button>
              <p className="text-xs text-center text-white mt-2">
                I'm 18 years old, and agree to terms and conditions
              </p>
            </div>

            {/* Desktop Only Refer Code */}
            <div className="hidden md:block">
              <label className="block text-white mb-1">Refer Code</label>
              <input
                type="text"
                placeholder="Enter if you have one"
                className="w-full px-4 py-2 rounded bg-gray-600 text-white focus:outline-none"
              />
            </div>

            {/* Submit Button Desktop */}
            <div className="hidden md:flex justify-end">
              <button  style={{
                color:buttonFontColor,
                backgroundColor:signupBtnColor,
                fontSize: `${btnFontSize}px`,
              }} className=" p-3 rounded-full hover:cursor-pointer">
                <FaArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Banner (Desktop Only) */}
        <div className="hidden md:flex w-4/5 items-center justify-center">
          <img
            src={signupImage} // Replace with your actual banner image path
            alt="Signup Banner"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
