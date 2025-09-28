import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const ModifyProfile = () => {
  const { id } = useParams(); // /modify-profile/:id
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: '',
    email: '',
    username: '',
    role: '',
    status: '',
    password: '' // blank means keep current
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ডাটাবেস থেকে ইউজারের আগের ডেটা লোড করা
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/api/admins/${id}`)
      .then(res => {
        console.log(res.data)
        setForm({
          fullname: res.data.fullname || '',
          email: res.data.email || '',
          username: res.data.username || '',
          role: res.data.role || '',
          status: res.data.status || '',
          password: '' // পুরানো password দেখাবেন না
        });
      })
      .catch(err => {
        console.error(err);
        toast.error("User load error!");
      })
      .finally(() => setLoading(false));
  }, [id]);

  // ফর্মের পরিবর্তন হ্যান্ডেল করা
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // সাবমিট হ্যান্ডেল
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullname || !form.email || !form.username) {
      toast.error("Fullname, Email এবং Username আবশ্যক!");
      return;
    }

    setSaving(true);
    try {
      const payload = { ...form };
      if (!payload.password) delete payload.password;

      await axios.put(`${import.meta.env.VITE_API_URL}/api/admins/${id}`, payload);

      toast.success("Profile updated successfully!");
      navigate('/admin-dashboard');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Update failed!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Modify Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Fullname */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">User Name</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Username"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 font-medium">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Role</option>
            <option value="Sub Admin">Sub Admin</option>
            <option value="Admin">Admin</option>
            <option value="Super Admin">Super Admin</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Status</option>
            <option value="Activated">Activated</option>
            <option value="Deactivated">Deactivated</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Leave blank to keep current"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded"
          >
            {saving ? 'Saving...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyProfile;
