"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function CreateVacancyPage() {
  const [formData, setFormData] = useState({
    title: "",
    company: "GreenTech Innovations",
    location: "",
    description: "",
    requirements: "",
    salary: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("📤 Vacancy submitted:", formData);
  };

  return (
    <div className="min-h-screen font-sans bg-[#dcdbdb] flex flex-col">
      {/* Header */}
      <header className="bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300 shadow-sm">
        <div className="flex items-center space-x-2">
          <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
          <span className="text-2xl font-bold">INCLUWORK</span>
        </div>

        <nav className="flex space-x-14 items-center">
          <Link href="/homepage_company" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about_us3" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/contacts3" className="text-gray-700 hover:text-gray-900">Contacts</Link>
        </nav>
      </header>

      {/* Mini green bar */}
      <div className="h-[6vh] bg-gradient-to-r from-[#407469] to-[#595757]"></div>

      {/* Main Content */}
      <main className="px-6 md:px-24 py-10 w-full max-w-5xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/profile_employer" className="text-[#1aae98] hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Back to profile
          </Link>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-semibold text-[#1aae98] mb-6">Create a Vacancy</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Position Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1aae98]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1aae98]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Salary (optional)</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1aae98]"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Job Description</label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1aae98]"
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Requirements</label>
              <textarea
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1aae98]"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1aae98] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#187371] transition duration-200"
              >
                Publish Vacancy
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 md:px-16 py-6 text-black border-t border-gray-400 text-xs bg-[#dcdbdb] mt-auto">
        <p>© 2024–2025 incluwork.ua. Ukraine’s #3 job site.</p>
        <p className="mt-2 max-w-3xl">
          All rights are protected by the current legislation of Ukraine. The use of materials from this site is possible only with
          the written permission of IncluWork International LLC. The administration is not responsible for the content of posted ads.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-teal-600 font-semibold">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Public offer contract</a>
          <a href="#" className="hover:underline">Code of ethical conduct</a>
        </div>
      </footer>
    </div>
  );
}
