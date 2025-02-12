"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Для навігації
import { HomeIcon } from "@heroicons/react/24/outline"; // Іконка будинку

export default function EmployerRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter(); // Ініціалізація роутера

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#276e65] to-[#b5f0de] flex flex-col justify-between text-center">
      {/* Header */}
      <header className="py-4 px-8 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <img src="/LogoGreen2.png" alt="Incluwork Logo" className="w-15 h-12" />
          <span className="text-2xl font-bold text-black">INCLUWORK</span>
        </div>

        {/* Іконка Home */}
        <button onClick={() => router.push("/")} className="p-2 rounded-full hover:bg-gray-200 transition">
          <HomeIcon className="h-8 w-8 text-gray-900" />
        </button>
      </header>

      {/* Main Form */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black mb-8">Employer registration</h1>
        <form className="space-y-6 w-full max-w-lg px-8">
          {/* Login Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Login"
              className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-900 cursor-pointer"
            >
            </span>
          </div>
          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-3 text-gray-900 cursor-pointer"
            >
            </span>
          </div>
          <button
            type="button"
            onClick={() => router.push("/company_registrationform")}
            className="px-12 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full font-bold hover:from-gray-700 hover:to-gray-900 transition"
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-transparent">
        <div className="flex justify-around text-gray-700">
          <p>
            Already have an account?{" "}
            <button 
              onClick={() => router.push("/company_login")}
              className="text-teal-600 hover:underline cursor-pointer bg-transparent border-none"
            >
              Log in
            </button>
          </p>
          <p>
            Would you like to find a job?{" "}
            <button 
              onClick={() => router.push("/employee_authorization")}
              className="text-teal-600 hover:underline cursor-pointer bg-transparent border-none"
            >
              Register as an employee
            </button>
          </p>
        </div>
      </footer>
    </div>
  );
}
