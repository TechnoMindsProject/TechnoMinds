import Link from "next/link";
import Image from "next/image";  //Компонент Next.js для оптимізованої роботи із зображеннями (автоматично стискає, змінює розмір тощо)
import { FaUsers, FaShieldAlt, FaBriefcase } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#dcdbdb] font-sans">
{/* Header */}
<header className="bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300">
  {/* Логотип і назва */}
  <div className="flex items-center space-x-2">
    <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
    <span className="text-2xl font-bold">INCLUWORK</span>
  </div>

  {/* Навігація і пошук */}
  <nav className="flex space-x-14 items-center">
    <a href="#" className="text-mint-600 font-semibold border-b-4 border-[#1aae98]">
      Home
    </a>
    <Link href="/about_us" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
    <Link href="/contacts" className="text-gray-700 hover:text-gray-900">
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

      {/* Main Section */}
      <main className="relative min-h-[90vh] grid grid-cols-[0.75fr_1fr]">
        {/* Left Section */}
        <div className="bg-teal-500 text-white relative">
          <div className="absolute top-4 right-12 flex flex-col items-end z-20">
            <h1 className="text-5xl font-bold font-openSauce"><span style={{ color: '#363636' }}>Equal</span>&nbsp;&nbsp;<span style={{ color: '#dcdbdb' }}>Opportunities</span></h1>
          </div>
          <div className="absolute bottom-4 left-[25%] flex flex-col items-start z-20">
            <p className="text-5xl font-bold font-openSauce">
              <span style={{ color: '#dcdbdb' }}>Brighter</span>
              &nbsp;&nbsp;
              <span style={{ color: '#363636' }}>Futures</span>
            </p>
          </div>
          <Image
            src="/man-with-disability.jpg"
            alt="Person in wheelchair with shadow"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-10"
          />
        </div>

        {/* Right Section */}
        <div className="bg-[#363636] text-white py-20 px-12 flex flex-col justify-center items-center relative w-full">
          <div
            className="absolute right-[9%] top-[13%] w-[3px] h-[130%] bg-[#dcdbdb] transform rotate-[55deg]"
            style={{ transformOrigin: "top right" }}
          ></div>

        <div className="relative flex flex-col font-sans self-start top-[-25%]">
            <div className="mb-12 flex flex-col items-start text-left">
              <h2 className="text-2xl font-bold mb-4 max-w-lg leading-relaxed">
                Find <span className="text-[#1aae98]">inclusive</span> job opportunities tailored to your skills.
              </h2>
              <p className="text-lg mb-6 max-w-lg leading-relaxed">
  Empower your career with employers who value <span className="text-[#1aae98]">quality</span> and <span className="text-[#1aae98]">accessibility</span>.
  </p>
  <Link href="/employee_authorization">
    <button className="bg-gradient-to-r from-[#199280] to-[#1ed2b7] text-white px-10 py-4 rounded-full text-lg shadow-md font-bold hover:from-[#138f78] hover:to-[#17b89f]">
      I'm employee
    </button>
  </Link>
            </div>

            <div className="absolute flex flex-col items-end text-right right-[-50%] top-[145%] transform -translate-y-1/2">
              <h2 className="text-2xl font-bold mb-4 max-w-lg leading-relaxed">
                Connect with <br />talented <span className="text-[#1aae98]">professionals</span><br /> and build a <span className="text-[#1aae98]">diverse</span> workplace.
              </h2>
              <p className="text-lg mb-6 max-w-lg leading-relaxed">
                Join our platform to find the best matches for your company.
              </p>
              <Link href="/company_autorization">
                <button className="bg-gradient-to-r from-[#199280] to-[#1ed2b7] text-white px-10 py-4 rounded-full text-lg shadow-md font-bold hover:from-[#138f78] hover:to-[#17b89f]">
                  I'm employer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>





      {/* Footer Section */}
      <footer
  className="bg-[#363636] text-white py-10 px-12 relative bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.9)), url(/two_people.png)`,
  }}
>
  <h2 className="text-3xl font-bold text-left mb-6">
    Why is <span className="text-[#1aae98]">IncluWork</span> the best choice for you?
  </h2>
  <p className="text-left text-lg mb-10">
    We help people with disabilities find work in friendly companies. Find out why <br />thousands of users trust us.
  </p>

  {/* Блоки з інформацією */}
  <div className="flex flex-col items-center relative">
 {/* 1-й блок: Інклюзивний підхід */}
 <div className="bg-[#dcdbdb] text-black rounded-lg p-4 shadow-md absolute top-0 left-0 flex items-center space-x-4 w-[550px] h-[120px]" style={{ opacity: 0.8 }}>
    <span className="bg-[#dcdbdb] p-3 rounded-full">
      <FaUsers className="w-14 h-14 text-black" />
    </span>
    <div className="max-w-sm">
      <h3 className="text-[1.3rem] font-bold mb-1 text-[#1aae98]">An inclusive approach</h3>
      <p className="text-base">You will find flexible conditions, remote employment and adapted workplaces.</p>
    </div>
  </div>

   {/* 2-й блок: Перевірені роботодавці */}
   <div className="bg-[#dcdbdb] text-black rounded-lg p-4 shadow-md absolute top-[150px] left-[180px] flex items-center space-x-4 w-[550px] h-[120px]" style={{ opacity: 0.8 }}>
   <span className="bg-[#dcdbdb] p-3 rounded-full">
      <FaShieldAlt className="w-14 h-14 text-black" />
    </span>
    <div className="max-w-sm">
    <h3 className="text-[1.3rem] font-bold mb-1 text-[#1aae98]">Verified employers</h3>
      <p className="text-base">We work only with those who are ready to create an accessible working environment.</p>
    </div>
  </div>

  {/* 3-й блок: Кар'єрна підтримка */}
  <div className="bg-[#dcdbdb] text-black rounded-lg p-4 shadow-md absolute top-[300px] left-[360px] flex items-center space-x-4 w-[550px] h-[120px]" style={{ opacity: 0.8 }}>
    <span className="bg-[#dcdbdb] p-3 rounded-full">
      <FaBriefcase className="w-14 h-14 text-black" />
    </span>
    <div className="max-w-sm">
      <h3 className="text-[1.3rem] font-bold mb-1 text-[#1aae98]">Career support</h3>
      <p className="text-base">We will help you draw up a resume, pass an interview and choose a career path.</p>
    </div>
  </div>
</div>

{/* Горизонтальна лінія перед футером */}
<div className="h-[2px] bg-[#1ed2b7] mt-[500px] w-[calc(100%+100px)] ml-[-52px]"></div>
  {/* Футер з додатковою інформацією */}
  <div className="relative text-center text-sm mt-[0px] w-full">
  {/* Напівпрозорий фон на всю ширину */}
  <div className="absolute left-[-] right-[-48] w-screen h-[189px] bg-[#dcdbdb] opacity-70"></div>
    <div className="relative p-6 max-w-screen-xl mx-auto top-4">
      <p className="text-sm text-left text-black">&copy; 2024–2025 incluwork.ua. Ukraine's #3 job site.</p>
<p className="text-sm text-left text-black relative top-1">
  All rights are protected by the current legislation of Ukraine. The use of materials from this site is possible
  only with the written permission of IncluWork International LLC. The administration is not responsible for the
  content of posted ads.
</p>
<div className="mt-4 text-left relative top-1">
  <a href="#" className="text-base text-[#199280] hover:underline">Privacy</a>
  <a href="#" className="text-base text-[#199280] hover:underline mx-6">Terms of use</a>
  <a href="#" className="text-base text-[#199280] hover:underline mx-2">Public offer contract</a>
  <a href="#" className="text-base text-[#199280] hover:underline mx-5">Code of ethical conduct</a>
</div>
    </div>
  </div>
</footer>
    </div>
  );
}



//<div>: Базовий HTML-блок для структурування
//className: Вказує CSS-класи для стилізації
//min-h-screen: Встановлює мінімальну висоту елемента на весь екран

//<header className="bg-gray-100 py-4 px-8 flex justify-between items-center border-b border-gray-300">
  //<header>: Семантичний HTML-елемент для шапки сторінки
  //bg-gray-100: Світло-сірий фон
  //py-4 px-8: Внутрішній відступ (padding: 1rem вертикально, 2rem горизонтально)
  //flex: Включає CSS Flexbox для розташування
  //justify-between: Вирівнює елементи по горизонталі (зліва і справа)
  //items-center: Вирівнює елементи по вертикалі
  //border-b: Нижня рамка
  //border-gray-300: Світло-сірий колір рамки


  //
  //
  //
 

