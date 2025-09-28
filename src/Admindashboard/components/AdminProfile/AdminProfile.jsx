import React, { useState } from "react";

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    // এখানে আপনি API কল দিয়ে ডাটাবেজে আপডেট করতে পারবেন
  };

  return (
    <div className="max-w-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <label className="w-40 font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <label className="w-40 font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <label className="w-40 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <label className="w-40 font-medium">Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <label className="w-40 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password (leave blank to keep current)"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
