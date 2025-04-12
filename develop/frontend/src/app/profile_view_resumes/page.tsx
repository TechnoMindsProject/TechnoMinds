// app/profile.tsx

import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa'; // Імпортуємо UserCircle з react-icons
import { FaSearch } from 'react-icons/fa'; // Імпортуємо Search іконку з react-icons
import { FaEye, FaUsers, FaStar, FaSignOutAlt } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaEdit, FaFileAlt  } from 'react-icons/fa';


const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#dcdbdb] font-sans">
      {/* Header */}
      <header className="relative bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
          <span className="text-2xl font-bold">INCLUWORK</span>
        </div>

        <nav className="flex space-x-14 items-center">
        <Link href="/homepage_employee" className="text-gray-700 hover:text-gray-900">
            Home
            </Link>
          <Link href="/about_us3" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contacts3" className="text-gray-700 hover:text-gray-900">
            Contacts
          </Link>
        </nav>

        <div className="flex space-x-6 items-center">
          {/* Кнопка для переходу на /profile */}
          <Link href="/profile">
            <div className="cursor-pointer hover:text-gray-700 transition duration-200">
              <FaUserCircle size={36} color="black" />
            </div>
          </Link>
        </div>
      </header>

      {/* Зелена полоска */}
      <div className="relative w-full h-[20vh] flex flex-col justify-start px-16 pt-16 bg-gradient-to-r from-[#407469] to-[#595757] text-white">
        <div className="absolute top-6 right-10 flex space-x-12">
        </div>

       {/* Пошукове поле */}
<div className="flex justify-center items-center mt-[-15px]">
  <div className="flex items-center bg-white rounded-full shadow-md w-[60%] max-w-[800px]">
    <input
      type="text"
      placeholder="Job title..."
      className="w-[45%] px-4 py-4 border-none rounded-l-full focus:outline-none text-black"
    />
    <span className="w-[2px] h-6 bg-gray-400"></span>
    <input
      type="text"
      placeholder="City..."
      className="w-[45%] px-4 py-4 border-none focus:outline-none text-black"
    />
    <button className="bg-[#1aae98] px-12 py-4 text-white font-semibold rounded-full flex items-center">
      <FaSearch size={24} color="white" />
    </button>
  </div>
</div>
</div>


    {/* Контент сторінки */}
<div className="py-12 px-12 flex space-x-8">
  {/* Sidebar */}
  <div className="w-[300px] bg-[#fff] p-6 rounded-lg shadow-md">
    <h3 className="text-[26px] font-semibold text-[#1aae98] mb-4">My Profile</h3>
    {/* Текст для імені та прізвища */}
    <Link href="/profile">
  <p className="text-[22px] font-bold text-[#363636] mb-2 flex items-center cursor-pointer hover:text-[#1aae98]">
    Name Surname
  </p>
</Link>
    {/* Горизонтальна лінія */}
    <hr className="border-t-2 border-[#1aae98] mb-4" /> {/* Ви можете змінити колір та товщину лінії */}


    <ul>
      <li className="text-xl font-bold text-[#363636] mb-2 flex items-center">
        <FaEye className="mr-2" /> {/* Іконка перегляду */}
        <Link href="/profile" className="hover:text-[#1aae98]">View resumes</Link>
      </li>
      <li className="text-xl font-bold text-[#363636] mb-2 flex items-center">
        <FaUsers className="mr-2" /> {/* Іконка для відгуків */}
        <Link href="/profile/reviews" className="hover:text-[#1aae98]">My reviews</Link>
      </li>
      <li className="text-xl font-bold text-[#363636] mb-2 flex items-center">
        <FaStar className="mr-2" /> {/* Іконка для вакансій */}
        <Link href="/profile_selected_vacancies" className="hover:text-[#1aae98]">Selected vacancies</Link>
      </li>
      <li className="text-xl font-bold text-[#363636] flex items-center">
        <FaSignOutAlt className="mr-2" /> {/* Іконка для виходу */}
        <Link href="/" className="hover:text-[#1aae98]">Sign out</Link>
      </li>
    </ul>
  </div>

        {/* Main Profile Content */}
<div className="w-full max-w-screen-lg p-6 bg-white rounded-lg shadow-md">
  {/* My Resumes Section */}
  <div className="mb-8">
    <h3 className="text-[26px] font-semibold text-[#1aae98] mb-4">My resumes</h3>

    {/* Resume List */}
    <div className="space-y-4">
      {/* Resume 1 */}
      <div className="flex items-center justify-between p-4 border border-[#1aae98] rounded-lg">
        <div className="flex items-center">
          <FaFileAlt className="mr-2 text-[#1aae98]" /> {/* Іконка файлу */}
          <span className="text-xl font-bold text-[#363636]">File name</span>
        </div>
        <button className="px-6 py-2 border-2 border-[#1aae98] bg-[#1aae98] font-bold text-white rounded-lg hover:bg-[#187371]">
  View resume
</button>
      </div>

      {/* Resume 2 */}
      <div className="flex items-center justify-between p-4 border border-[#1aae98] rounded-lg">
        <div className="flex items-center">
          <FaFileAlt className="mr-2 text-[#1aae98]" /> {/* Іконка файлу */}
          <span className="text-xl font-bold text-[#363636]">File name</span>
        </div>
        <button className="px-6 py-2 border-2 border-[#1aae98] bg-[#1aae98] font-bold text-white rounded-lg hover:bg-[#187371]">
  View resume
</button>
      </div>

      {/* Resume 3 */}
      <div className="flex items-center justify-between p-4 border border-[#1aae98] rounded-lg">
        <div className="flex items-center">
          <FaFileAlt className="mr-2 text-[#1aae98]" /> {/* Іконка файлу */}
          <span className="text-xl font-bold text-[#363636]">File name</span>
        </div>
        <button className="px-6 py-2 border-2 border-[#1aae98] bg-[#1aae98] font-bold text-white rounded-lg hover:bg-[#187371]">
  View resume
</button>
      </div>
    </div>
  </div>



</div>
</div>




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



export default ProfilePage;
