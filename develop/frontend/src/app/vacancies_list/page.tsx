"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

export default function VacanciesListPage() {
  const router = useRouter();
  const [vacancies, setVacancies] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("vacancies");
    if (stored) setVacancies(JSON.parse(stored));
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this vacancy?");
    if (confirmed) {
      const updated = vacancies.filter((v) => v.id !== id);
      setVacancies(updated);
      localStorage.setItem("vacancies", JSON.stringify(updated));
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/edit_vacancy/${id}`);
  };

  return (
    <div className="min-h-screen font-sans bg-[#dcdbdb] flex flex-col">
      {/* Header */}
      <header className="bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300 shadow-sm">
        <div className="text-xl font-bold">INCLUWORK</div>
        <nav className="flex space-x-14 items-center">
          <Link href="/homepage_company" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about_us3" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/contacts3" className="text-gray-700 hover:text-gray-900">Contacts</Link>
        </nav>
      </header>

      {/* Mini green bar */}
      <div className="h-[6vh] bg-gradient-to-r from-[#407469] to-[#595757]" />

      <main className="px-6 md:px-24 py-12 w-full max-w-6xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/profile_employer" className="text-[#1aae98] hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Back to profile
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#1aae98] mb-8">My Vacancies</h1>

        {vacancies.length === 0 ? (
          <p className="text-gray-600 text-lg">You haven't created any vacancies yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1aae98] mb-2 flex items-center">
                    <FaBriefcase className="mr-2" /> {vacancy.title}
                  </h3>
                  <p className="text-gray-700 mb-2 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-[#1aae98]" /> {vacancy.location || "City"}
                  </p>
                  <p className="text-gray-700 mb-2 flex items-center">
                    <FaMoneyBillWave className="mr-2 text-[#1aae98]" /> {vacancy.salary || "Salary"}
                  </p>
                  <p className="text-gray-600">{vacancy.description}</p>
                </div>
                <div className="mt-4 flex justify-end gap-4">
                  <button
                    className="text-sm text-[#1aae98] hover:underline flex items-center"
                    onClick={() => handleEdit(vacancy.id)}
                  >
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button
                    className="text-sm text-red-600 hover:underline flex items-center"
                    onClick={() => handleDelete(vacancy.id)}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

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