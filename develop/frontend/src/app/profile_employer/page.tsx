"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaUserCircle,
  FaPlus,
  FaList,
  FaSignOutAlt,
  FaBuilding,
  FaEdit,
  FaEnvelope,
} from "react-icons/fa";

export default function EmployerProfilePage() {
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

        <Link href="/employer_profile">
          <FaUserCircle size={36} color="black" className="cursor-pointer hover:text-gray-700 transition duration-200" />
        </Link>
      </header>

      {/* Top gradient bar */}
      <div className="h-[12vh] w-full bg-gradient-to-r from-[#407469] to-[#595757]" />

      {/* Main content */}
      <main className="-mt-12 z-10 relative px-8 md:px-24 flex flex-col lg:flex-row justify-between gap-10 grow">
        {/* Sidebar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full lg:w-[350px]">
          <h3 className="text-[24px] font-semibold text-[#1aae98] mb-6">Company Profile</h3>
          <p className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-[#1aae98] pb-2">Company Name</p>
          <ul className="space-y-5">
            <li className="text-lg font-semibold flex items-center text-gray-700 hover:text-[#1aae98]">
              <FaPlus className="mr-2" />
              <Link href="/create_vacancy">Create vacancy</Link>
            </li>
            <li className="text-lg font-semibold flex items-center text-gray-700 hover:text-[#1aae98]">
              <FaList className="mr-2" />
              <Link href="/vacancies_list">My vacancies</Link>
            </li>
            <li className="text-lg font-semibold flex items-center text-gray-700 hover:text-[#1aae98]">
              <FaSignOutAlt className="mr-2" />
              <Link href="/">Sign out</Link>
            </li>
          </ul>
        </div>

        {/* Profile info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full flex flex-col justify-between">
          <h3 className="text-[24px] font-semibold text-[#1aae98] mb-6">Company details</h3>
          <p className="text-lg text-gray-800 mb-4 flex items-center">
            <FaBuilding className="mr-3 text-[#1aae98]" />
            <strong>Name:</strong> <span className="ml-2">GreenTech Innovations</span>
          </p>
          <p className="text-lg text-gray-800 mb-6 flex items-center">
            <FaEnvelope className="mr-3 text-[#1aae98]" />
            <strong>Email:</strong> <span className="ml-2">hr@greentech.com</span>
          </p>
          <Link href="/edit_company_profile" className="text-[#1aae98] font-medium hover:underline flex items-center w-fit">
            Edit <FaEdit size={16} className="ml-2" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 md:px-16 py-6 text-black border-t border-gray-400 text-xs bg-[#dcdbdb] mt-10">
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
