"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CompanyRegistrationForm() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#dcdbdb] flex flex-col">
      {/* Header */}
      <header
        className="relative w-full h-[130px] bg-cover bg-center flex items-center px-8"
        style={{ backgroundImage: "url('/registration.jpg')" }} // Фонове зображення
      >
        <div className="flex items-center space-x-4">
          <img src="/Logo_White.png" alt="Incluwork Logo" className="w-16 h-15" /> {/* Логотип збільшений */}
          <span className="text-4xl font-bold text-[#dcdbdb]">INCLUWORK</span>
        </div>
      </header>

      {/* Form Section */}
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-black mb-6">
          Registration <span className="text-teal-600">Form</span>
        </h1>

        <form className="grid grid-cols-2 gap-6">
          {/* Left Inputs */}
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Company Name</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />

            <label className="text-gray-700">Manager Surname</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />

            <label className="text-gray-700">Manager Name</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />

            <label className="text-gray-700">Website</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 w-full" /> {/* Website на всю ширину */}
          </div>

          {/* Right Inputs */}
          <div className="flex flex-col space-y-4">
            <label className="text-gray-700">Phone Number</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />

            <label className="text-gray-700">Email</label>
            <input type="email" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />

            <label className="text-gray-700">Address</label>
            <input type="text" className="border border-gray-500 rounded-full p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-md" />
          </div>
        </form>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button 
            onClick={() => router.push("/homepage_company")}
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
