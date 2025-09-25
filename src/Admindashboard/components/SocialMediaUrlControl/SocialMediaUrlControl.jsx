import React, { useState, useEffect } from "react";
import axios from "axios";

const SocialMediaUrlControl = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sidebar-menu")
      .then(res => setMenuItems(res.data.sidebarMenu || []))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (index, value) => {
    const updated = [...menuItems];
    updated[index].url = value;
    setMenuItems(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) return;

    try {
      await axios.post("http://localhost:5000/api/sidebar-menu", { sidebarMenu: menuItems });
      alert("✅ Sidebar menu links updated!");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update sidebar menu links!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-600">Sidebar Menu Links</h2>
        <button
          onClick={() => setIsEditing(true)}
          className={`px-3 py-1 rounded text-white font-medium ${
            isEditing ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isEditing}
        >
          Edit
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {menuItems.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-2 items-center">
            <span className="w-32 font-medium">{item.label}</span>
            <input
              type="text"
              placeholder={`Enter ${item.label} URL`}
              value={item.url}
              onChange={(e) => handleChange(idx, e.target.value)}
              disabled={!isEditing}
              className="border px-2 py-1 rounded flex-1"
            />
          </div>
        ))}

        <button
          type="submit"
          className={`w-full py-2 rounded text-white font-semibold mt-4 ${
            isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isEditing}
        >
          Save Links
        </button>
      </form>
    </div>
  );
};

export default SocialMediaUrlControl;
