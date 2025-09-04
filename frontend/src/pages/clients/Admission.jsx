import React, { useState } from "react";

const Admission = () => {
  const [formData, setFormData] = useState({
    // Personal
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    contact: "",
    address: "",
    // Parents
    fatherName: "",
    motherName: "",
    // Education
    lastExam: "",
    board: "",
    year: "",
    percentage: "",
    // Course
    course: "",
    batchTime: [],
    learningMode: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle multiple checkboxes
    if (type === "checkbox") {
      if (name === "batchTime") {
        setFormData((prev) => ({
          ...prev,
          batchTime: checked
            ? [...prev.batchTime, value]
            : prev.batchTime.filter((t) => t !== value),
        }));
      } else if (name === "learningMode") {
        setFormData((prev) => ({
          ...prev,
          learningMode: checked
            ? [...prev.learningMode, value]
            : prev.learningMode.filter((t) => t !== value),
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Form Submitted:", formData);
    alert("Form Submitted Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Admission Form
        </h2>

        {/* Personal Details */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          1. Personal Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <textarea
            name="address"
            placeholder="Residential Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full md:col-span-2"
            required
          />
        </div>

        {/* Parents Details */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          2. Parents Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            value={formData.motherName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Education Details */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          3. Education Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="lastExam"
            placeholder="Last Exam Passed"
            value={formData.lastExam}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="board"
            placeholder="Board / University"
            value={formData.board}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Year of Passing"
            value={formData.year}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="percentage"
            placeholder="Percentage"
            value={formData.percentage}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Courses Details */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
          4. Course Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Course</option>
            <option value="PCM">PCM Foundation</option>
            <option value="PCB">PCB Foundation</option>
            <option value="PCMB">PCMB Foundation</option>
            <option value="JEE">JEE Crash Course</option>
            <option value="NEET">NEET Crash Course</option>
            <option value="MHTCET">MHT-CET Foundation</option>
          </select>

          {/* Batch Time Checkboxes */}
          <div className="border p-2 rounded">
            <label className="block font-medium mb-1">Preferred Batch Time:</label>
            <label className="block">
              <input
                type="checkbox"
                name="batchTime"
                value="Morning"
                onChange={handleChange}
              />{" "}
              Morning
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="batchTime"
                value="Afternoon"
                onChange={handleChange}
              />{" "}
              Afternoon
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="batchTime"
                value="Evening"
                onChange={handleChange}
              />{" "}
              Evening
            </label>
          </div>
        </div>

        {/* Mode of Learning */}
        <div className="border p-2 rounded mt-4">
          <label className="block font-medium mb-1">Mode of Learning:</label>
          <label className="inline-block mr-4">
            <input
              type="checkbox"
              name="learningMode"
              value="Online"
              onChange={handleChange}
            />{" "}
            Online
          </label>
          <label className="inline-block mr-4">
            <input
              type="checkbox"
              name="learningMode"
              value="Offline"
              onChange={handleChange}
            />{" "}
            Offline
          </label>
          <label className="inline-block">
            <input
              type="checkbox"
              name="learningMode"
              value="Hybrid"
              onChange={handleChange}
            />{" "}
            Hybrid
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Admission;
