import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const HomeControl = () => {
  const { fetchLogo } = useContext(AuthContext);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("logo", file);

    try {
      await axios.post("http://localhost:5000/api/logo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchLogo();
      alert("Logo updated!");
      setPreview(null);
      setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-black text-white p-3 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Upload Logo</h2>
        <button
          onClick={handleUpload}
          className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700"
        >
          +Add
        </button>
      </div>

      {preview && (
        <div className="mt-3 border p-2 bg-white">
          <img src={preview} alt="Preview" className="h-24 object-contain" />
        </div>
      )}

      <input
        type="file"
        onChange={handleChange}
        className="mt-3 text-white"
        accept="image/*"
      />
    </div>
  );
};

export default HomeControl;
