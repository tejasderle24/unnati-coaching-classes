import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../api";

export default function TopperResult() {
  const [toppers, setToppers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    exam: "",
    college: "",
    year: "",
    img: null, // store file
  });
  const [editingId, setEditingId] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // modal state

  // ✅ Fetch all toppers
  const fetchToppers = async () => {
    try {
      const res = await axios.get(`${API}/api/home/result`);
      setToppers(res.data.toppers);
    } catch (err) {
      console.error("Error fetching toppers:", err);
    }
  };

  useEffect(() => {
    fetchToppers();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] }); // file
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // ✅ Add or Update topper
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.keys(formData).forEach((key) => {
        fd.append(key, formData[key]);
      });

      if (editingId) {
        await axios.put(`${API}/api/home/result/${editingId}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${API}/api/home/result`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setFormData({ name: "", rank: "", exam: "", college: "", year: "", img: null });
      setEditingId(null);
      setIsOpen(false);
      fetchToppers();
    } catch (err) {
      console.error("Error saving topper:", err);
    }
  };

  // ✅ Edit topper
  const handleEdit = (topper) => {
    setFormData({
      name: topper.name,
      rank: topper.rank,
      exam: topper.exam,
      college: topper.college,
      year: topper.year,
      img: null, // reset file
    });
    setEditingId(topper._id);
    setIsOpen(true);
  };

  // ✅ Delete topper
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this topper?")) return;
    try {
      await axios.delete(`${API}/api/home/result/${id}`);
      fetchToppers();
    } catch (err) {
      console.error("Error deleting topper:", err);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎓 Manage Toppers</h1>

      {/* Add Topper Button */}
      <button
        onClick={() => {
          setEditingId(null);
          setFormData({ name: "", rank: "", exam: "", college: "", year: "", img: null });
          setIsOpen(true);
        }}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-6"
      >
        Add Topper
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? "Update Topper" : "Add Topper"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="rank"
                  placeholder="Rank (e.g., AIR 23)"
                  value={formData.rank}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="exam"
                  placeholder="Exam (e.g., JEE Advanced)"
                  value={formData.exam}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="college"
                  placeholder="College & Branch"
                  value={formData.college}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                  required
                />
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingId ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Rank</th>
              <th className="p-3">Exam</th>
              <th className="p-3">College</th>
              <th className="p-3">Year</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toppers.map((topper) => (
              <tr key={topper._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  {topper.img ? (
                    <img
                      src={topper.img}
                      alt={topper.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="p-3">{topper.name}</td>
                <td className="p-3">{topper.rank}</td>
                <td className="p-3">{topper.exam}</td>
                <td className="p-3">{topper.college}</td>
                <td className="p-3">{topper.year}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(topper)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(topper._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {toppers.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No toppers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
