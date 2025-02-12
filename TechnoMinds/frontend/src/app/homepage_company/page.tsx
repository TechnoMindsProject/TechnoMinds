"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, UserCircle, ChevronUp, ChevronDown } from "lucide-react";

export default function FindCandidates() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#dcdbdb] font-sans relative">
      {/* Фонове зображення (посунуте ще нижче) */}
      <div className="absolute inset-x-0 top-[50vh] bottom-0">
        <Image
          src="/working.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Header */}
      <header className="relative bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
          <span className="text-2xl font-bold">INCLUWORK</span>
        </div>

        <nav className="flex space-x-32 items-center">
          <a href="#" className="text-black font-semibold border-b-4 border-[#1aae98]">Home</a>
          <a href="#" className="text-black hover:text-gray-900">About Us</a>
          <a href="#" className="text-black hover:text-gray-900">Contacts</a>
        </nav>

        <div className="flex space-x-6 items-center">
          <UserCircle size={36} color="black" className="cursor-pointer hover:text-gray-700 transition duration-200" />
        </div>
      </header>

      {/* Зелена полоска з текстом та пошуком */}
      <div className="relative w-full h-[40vh] flex flex-col justify-start px-16 pt-16 bg-gradient-to-r from-[#407469] to-[#595757] text-white">
        <div className="absolute top-6 right-10">
          <a href="#" className="text-white font-bold text-lg underline">Post a job</a>
        </div>

        <h1 className="text-5xl font-bold mb-6 w-full max-w-4xl">Find candidates</h1>
        <p className="text-lg w-full max-w-4xl mb-16">
          There are currently 3.9 million candidates with 4.3 million resumes in our database.
          <br /> You have candidates to choose from.
        </p>

        {/* Пошукове поле опущене ще нижче */}
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center bg-white rounded-full shadow-md">
          <input
            type="text"
            placeholder="Job title..."
            className="w-[280px] px-4 py-3 border-none rounded-l-full focus:outline-none text-black"
          />
          <span className="w-[2px] h-6 bg-gray-400"></span>
          <input
            type="text"
            placeholder="City..."
            className="w-[280px] px-4 py-3 border-none focus:outline-none text-black"
          />
          <button className="bg-[#1aae98] px-10 py-3 text-white font-semibold rounded-full ml-2 flex items-center">
            <Search size={22} color="white" />
          </button>
        </div>
      </div>

      {/* Candidates by category Section */}
      <section className="relative w-full px-16 py-10">
        <div className="relative">
          <h2 className="text-3xl font-bold text-black mb-6">Candidates by category</h2>

          {isContentVisible && (
            <div className="grid grid-cols-3 gap-16 text-black">
              <div className="space-y-6">
                <p>Accounting & auditing</p>
                <p>Administration & middle management</p>
                <p>Agriculture & agribusiness</p>
                <p>Beauty, fitness & sports</p>
                <p>Construction & architecture</p>
                <p>Culture, music & entertainment</p>
                <p>Design & creativity</p>
                <p>Education & science</p>
                <p>Finance & banking</p>
                <p>Hotels, restaurants & tourism</p>
              </div>
              <div className="space-y-6">
                <p>HR & personnel management</p>
                <p>Insurance</p>
                <p>IT, computers & Internet</p>
                <p>Journalism, publishing & printing</p>
                <p>Logistics, warehouse & international commerce</p>
                <p>Marketing, advertising & PR</p>
                <p>Medicine & pharmaceuticals</p>
                <p>Real estate</p>
                <p>Retail</p>
              </div>
              <div className="space-y-6">
                <p>Sales & procurement</p>
                <p>Secretarial, clerical & administrative assistants</p>
                <p>Security & guarding</p>
                <p>Service sector</p>
                <p>Skilled trades & manufacturing</p>
                <p>Telecommunications</p>
                <p>Transportation & auto industry</p>
                <p>Upper & senior management</p>
                <p>Other fields</p>
              </div>
            </div>
          )}

          <div className="mt-8 text-left">
            <button
              onClick={() => setIsContentVisible(!isContentVisible)}
              className="text-teal-600 font-semibold hover:underline flex items-center"
            >
              {isContentVisible ? "Hide" : "Show"}{" "}
              {isContentVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full px-16 py-6 text-black border-t border-gray-400 text-xs">
        <p>© 2024-2025 incluwork.ua. Ukraine’s #3 job site.</p>
        <p className="mt-2 max-w-3xl">
          All rights are protected by the current legislation of Ukraine. The use of materials from this site is possible only with
          the written permission of IncluWork International LLC. The administration is not responsible for the content of posted ads.
        </p>
        <div className="mt-4 flex space-x-6 text-teal-600 font-semibold">
          <a href="#" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms of use</a>
          <span>•</span>
          <a href="#" className="hover:underline">Public offer contract</a>
          <span>•</span>
          <a href="#" className="hover:underline">Code of ethical conduct</a>
        </div>
      </footer>
    </div>
  );
}
