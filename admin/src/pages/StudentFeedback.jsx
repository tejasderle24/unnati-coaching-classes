import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../api";


export default function StudentFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [editingId, setEditingId] = useState(null);

  // ✅ Fetch feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${API}/api/home/feedback`);
      setFeedbacks(res.data.feedbacks);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API}/api/home/feedback/${editingId}`, formData);
      } else {
        await axios.post(`${API}/api/home/feedback`, formData);
      }
      setFormData({ name: "", feedback: "" });
      setEditingId(null);
      fetchFeedbacks();
    } catch (err) {
      console.error("Error saving feedback:", err);
    }
  };

  // ✅ Edit feedback
  const handleEdit = (fb) => {
    setFormData({ name: fb.name, feedback: fb.feedback });
    setEditingId(fb._id);
  };

  // ✅ Delete feedback
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    try {
      await axios.delete(`${API}/api/home/feedback/${id}`);
      fetchFeedbacks();
    } catch (err) {
      console.error("Error deleting feedback:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 Manage Feedbacks</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 mb-8 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-lg w-full"
          required
        />
        <textarea
          name="feedback"
          placeholder="Write feedback..."
          value={formData.feedback}
          onChange={handleChange}
          className="border p-2 rounded-lg w-full h-24 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {editingId ? "Update Feedback" : "Add Feedback"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Name</th>
              <th className="p-3">Feedback</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{fb.name}</td>
                <td className="p-3">{fb.feedback}</td>
                <td className="p-3">
                  {new Date(fb.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(fb)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(fb._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {feedbacks.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No feedback found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
