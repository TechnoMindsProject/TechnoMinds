"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmployeeRegistrationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    user_surname: "",
    gender: "Чоловік",
    birthday_date: "",
    phone_number: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const userAuthId = localStorage.getItem("employee_auth_id");

      if (!userAuthId) {
        setError("Authorization ID not found. Please register first.");
        return;
      }
  
      const res = await fetch("http://127.0.0.1:8000/api/user/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          created_at: new Date().toISOString(),
          user_authorization: parseInt(userAuthId),
        }),
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(JSON.stringify(data));
      }
  
      alert("Профіль успішно створено!");
      router.push("/homepage_employee");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#dcdbdb] flex flex-col">
      {/* Header */}
      <header
        className="relative w-full h-[130px] bg-cover bg-center flex items-center px-8"
        style={{ backgroundImage: "url('/registration.jpg')" }}
      >
        <div className="flex items-center space-x-4">
          <img src="/Logo_White.png" alt="Incluwork Logo" className="w-16 h-15" />
          <span className="text-4xl font-bold text-[#dcdbdb]">INCLUWORK</span>
        </div>
      </header>

      {/* Form Section */}
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-black mb-6">
          Registration <span className="text-teal-600">Form</span>
        </h1>

        <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">User Name</label>
            <input name="user_name" value={formData.user_name} onChange={handleChange} type="text" className="input" />

            <label className="text-gray-700">User Surname</label>
            <input name="user_surname" value={formData.user_surname} onChange={handleChange} type="text" className="input" />

            <label className="text-gray-700">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="input">
              <option value="Чоловік">Чоловік</option>
              <option value="Жінка">Жінка</option>
            </select>

            <label className="text-gray-700">Birth Date</label>
            <input name="birthday_date" value={formData.birthday_date} onChange={handleChange} type="date" className="input" />
          </div>

          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Phone Number</label>
            <input name="phone_number" value={formData.phone_number} onChange={handleChange} type="text" className="input" />

            <label className="text-gray-700">Email</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="input" />

            <label className="text-gray-700">Address</label>
            <input name="address" value={formData.address} onChange={handleChange} type="text" className="input" />
          </div>
        </form>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}