// app/contacts.tsx

import Image from "next/image";
import Link from "next/link";

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-[#dcdbdb] font-sans">
      {/* Верхня полоска */}
      <div className="bg-[#187371] w-full" style={{ height: '114.4px', position: 'absolute', top: '93.1px' }}></div>

      {/* Header */}
      <header className="bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300">
        {/* Логотип і назва */}
        <div className="flex items-center space-x-2">
          <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
          <span className="text-2xl font-bold">INCLUWORK</span>
        </div>

        {/* Навігація і пошук */}
        <nav className="flex space-x-14 items-center">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about_us" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contacts" className="text-mint-600 font-semibold border-b-4 border-[#1aae98]">
            Contacts
          </Link>
          
          {/* Поле пошуку з лупою */}
          <div className="flex items-center border border-[#515d63] rounded-full px-4 py-2 text-sm bg-white shadow-sm w-64">
            {/* Іконка лупи */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            {/* Поле вводу */}
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </nav>
      </header>

      {/* Контент сторінки */}
      <div className="py-12 px-12">
        <h1
          className="text-6xl font-extrabold text-white text-center mb-8"
          style={{ position: 'absolute', top: '120.8px', left: '42.4px' }}
        >
          Our contacts
        </h1>

{/* Контактна інформація */}
<div className="text-lg text-[#363636] mt-24"> {/* Додано відступ верхній, щоб знизити позицію */}
  <p>
    <strong>Sales department:</strong><br />
    <span className="text-[#187371]">+380 (44) 300 30 30</span><br />
    <a href="mailto:sales@includework.com">sales@includework.com</a><br /><br />
  </p>
  <p>
    <strong>Partner relations department:</strong><br />
    <span className="text-[#187371]">+380 (44) 300 30 32</span><br />
    <a href="mailto:partners@includework.com">partners@includework.com</a><br /><br />
  </p>
  <p>
    <strong>Quality control department:</strong><br />
    <span className="text-[#187371]">+380 (44) 300 30 31</span><br />
    <a href="mailto:quality.control@includework.com">quality.control@includework.com</a><br /><br />
  </p>
  <p>
    <strong>Customer support department:</strong><br />
    <span className="text-[#187371]">+380 (44) 300 30 33</span><br />
    <a href="mailto:customer@includework.com">customer@includework.com</a><br /><br />
  </p>
</div>

      </div>

      {/* Горизонтальна лінія перед футером */}
      <div className="h-[2px] bg-[#1ed2b7] mt-[20px] w-full"></div>

      {/* Футер з додатковою інформацією */}
      <div className="relative text-left text-sm mt-[-10px] w-full">
        {/* Напівпрозорий фон на всю ширину */}
        <div className="absolute left-[-48px] right-[-48px] w-screen h-[189px] bg-[#dcdbdb] opacity-70"></div>

        {/* Контент футера */}
        <div className="relative p-6 max-w-screen-xl mx-auto top-4">
          {/* Авторські права */}
          <p className="text-sm text-left text-black">&copy; 2024–2025 incluwork.ua. Ukraine's #3 job site.</p>
          <p className="text-sm text-left text-black relative top-1">
            All rights are protected by the current legislation of Ukraine. The use of materials from this site is possible
            only with the written permission of IncluWork International LLC. The administration is not responsible for the
            content of posted ads.
          </p>

          {/* Лінки */}
          <div className="mt-4 text-left relative top-1">
            <a href="#" className="text-base text-[#199280] hover:underline">Privacy</a>
            <a href="#" className="text-base text-[#199280] hover:underline mx-6">Terms of use</a>
            <a href="#" className="text-base text-[#199280] hover:underline mx-2">Public offer contract</a>
            <a href="#" className="text-base text-[#199280] hover:underline mx-5">Code of ethical conduct</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactsPage;
