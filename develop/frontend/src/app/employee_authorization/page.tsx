"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function EmployeeRegistration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Додано API
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/employee/register/", {
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
        throw new Error(data.detail || JSON.stringify(data));
      }

      localStorage.setItem("employee_auth_id", data.id.toString()); // Збегрігаємо ід для профілю
      router.push("/employee_registrationform");
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
        <h1 className="text-3xl font-bold text-black mb-8">Employee registration</h1>
        <form className="space-y-6 w-full max-w-lg px-8" onSubmit={(e) => e.preventDefault()}>
          {/* Login Input */}
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />

          {/* Confirm Password Input */}
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-700 rounded-full bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />

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
              onClick={() => router.push("/employee_login")}
              className="text-teal-600 hover:underline cursor-pointer bg-transparent border-none"
            >
              Log in
            </button>
          </p>
          <p>
            Would you like to post a vacancy?{" "}
            <button
              onClick={() => router.push("/company_autorization")}
              className="text-teal-600 hover:underline cursor-pointer bg-transparent border-none"
            >
              Register as an employer
            </button>
          </p>
        </div>
      </footer>
    </div>
  );
}