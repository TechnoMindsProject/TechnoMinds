"use client";

import { useSearchParams } from 'next/navigation';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompanyRegistrationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authId = searchParams.get('id');
// додані форми
  const [formData, setFormData] = useState({
    company_name: "",
    manager_surname: "",
    manager_name: "",
    website: "",
    phone_number: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 // доданр конект api
 const handleSubmit = async () => {const authId = localStorage.getItem("employer_auth_id");
 

if (!authId || authId === "undefined") {
  alert("Authorization ID not found. Please register again.");
  return;
}
  if (!authId) {
    setError("Authorization ID not found. Please register or log in again.");
    return;
  }

  // Валідація website
  if (!formData.website.startsWith("http://") && !formData.website.startsWith("https://")) {
    setError("Website must start with http:// or https://");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/api/employer/profile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        company_authorization: Number(authId),
        created_at: new Date().toISOString(),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }

    alert("Company profile successfully created!");
    router.push("/homepage_company");
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
          {/* Left Inputs */}
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Company Name</label>
            <input
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />

            <label className="text-gray-700">Manager Surname</label>
            <input
              name="manager_surname"
              value={formData.manager_surname}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />

            <label className="text-gray-700">Manager Name</label>
            <input
              name="manager_name"
              value={formData.manager_name}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />

            <label className="text-gray-700">Website</label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
            />
          </div>

          {/* Right Inputs */}
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Phone Number</label>
            <input
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />

            <label className="text-gray-700">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />

            <label className="text-gray-700">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md"
            />
          </div>
        </form>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {/* Submit Button */}
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