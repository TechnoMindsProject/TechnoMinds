"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Для навігації
import { HomeIcon } from "@heroicons/react/24/outline"; // Іконка будинку

export default function EmployerRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 
// додано конект апі
const handleSubmit = async () => {
  if (password !== confirmPassword) {
    setError("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/api/employer/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
        confirm_password: confirmPassword,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }

    console.log("Received ID from backend:", data.id);  
    // зберігаємо ID в LocalStorage, для нашої форми company
    localStorage.setItem("employer_auth_id", data.id.toString());
    router.push(`/company_registrationform?id=${data.id}`);
  } catch (err: any) {
    setError(err.message);
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#276e65] to-[#b5f0de] flex flex-col justify-between text-center">
      {/* Header */}
      <header className="py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/LogoGreen2.png" alt="Incluwork Logo" className="w-15 h-12" />
          <span className="text-2xl font-bold text-black">INCLUWORK</span>
        </div>
        <button onClick={() => router.push("/")} className="p-2 rounded-full hover:bg-gray-200 transition">
          <HomeIcon className="h-8 w-8 text-gray-900" />
        </button>
      </header>

      {/* Main Form */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black mb-8">Employer registration</h1>
        <form className="space-y-6 w-full max-w-lg px-8" onSubmit={(e) => e.preventDefault()}>
          {/* Login Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-3 text-gray-900 cursor-pointer"
            >
            </span>
          </div>

          {/* Error display */}
          {error && <p className="text-red-600">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
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