import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";  //Компонент Next.js для оптимізованої роботи із зображеннями (автоматично стискає, змінює розмір тощо)
import { FaUsers, FaShieldAlt, FaBriefcase } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#dcdbdb] font-sans">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-[#dcdbdb] py-4 px-8 flex justify-between items-center border-b border-gray-300">
        {/* Логотип і назва */}
        <div className="flex items-center space-x-2">
          <Image src="/Logo bg.png" alt="Incluwork Logo" width={50} height={50} />
          <span className="text-2xl font-bold">INCLUWORK</span>
        </div>

        {/* Навігація і пошук */}
        <nav className="flex space-x-14 items-center">
          <Link href="/homepage_employee" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <a href="#" className="text-mint-600 font-semibold border-b-4 border-[#1aae98]">
            About Us
          </a>
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

      {/* Main Content */}
      <main className="py-20 px-12 flex justify-between items-center bg-[#363636]">
        {/* Ліва частина з текстом */}
        <div className="flex flex-col items-end w-full max-w-[45%] pr-24 mt-8">
          <h2 className="rubik-mono-one-regular text-7xl font-extrabold text-right mb-6 text-[#dcdbdb]">
            ABOUT
          </h2>
          <h2 className="rubik-mono-one-regular text-7xl font-extrabold text-right mb-6 text-[#dcdbdb]">
            OUR
          </h2>
          <h2 className="rubik-doodle-shadow-regular text-7xl mb-6 text-right text-[#dcdbdb]">
            COMPANY
          </h2>
        </div>

        {/* Правая частина з зображенням */}
        <div className="flex justify-start w-full max-w-[50%] pl-10">
          <Image
            src="/team_works.png"
            alt="Team working together"
            width={600}
            height={400}
          />
        </div>
      </main>

      {/* Main Content - About Us Section */}
      <main className="py-20 px-12 flex flex-col lg:flex-row justify-between items-center bg-[#494848]">
        {/* Ліва частина з заголовком і зображенням */}
        <div className="relative flex flex-col items-start w-full mb-4 pl-20">
          <h2 className="rubik-mono-one-regular text-[3.5rem] font-extrabold text-left text-[#dcdbdb]">
            WHAT IS
          </h2>
          <h2 className="rubik-doodle-shadow-regular text-[4rem] font-extrabold text-left mb-6 text-[#dcdbdb]">
            INCLUWORK
          </h2>
          <div className="flex justify-start ml-12">
            <Image
              src="/what_is_incluwork.png" // Заміни на шлях до зображення
              alt="What is IncluWork"
              width={350}
              height={150}
            />
          </div>
        </div>

        {/* Текст з правої частини */}
        <div className="relative flex flex-col items-start mr-16">
          {/* Лінії в кутах */}
          <div className="absolute top-[-30px] left-[-20px] w-16 h-16 border-t-4 border-l-4 border-white"></div>
          <div className="absolute bottom-[-30px] right-[-20px] w-16 h-16 border-b-4 border-r-4 border-white"></div>

          <p className="text-3xl font-bold text-center text-[#dcdbdb] max-w-7xl font-sans">
            <span className="text-[#1aae98] italic">IncluWork </span> is an innovative platform that aims to ensure equal opportunities for people with disabilities. We work to create accessible workplaces, promoting the integration of people with different physical abilities into the professional environment. Our company helps people with disabilities find jobs in friendly and inclusive companies, ready to provide conditions for comfortable work and development.
          </p>
        </div>
      </main>

      {/* New Mission Section */}
      <main className="py-32 px-12 flex flex-col lg:flex-row justify-between items-center bg-[#363636]">
        {/* Ліва частина з текстом */}
        <div className="relative flex flex-col items-start w-full max-w-[800px] mb-4 pl-20">
          <h2 className="rubik-mono-one-regular text-[3.5rem] font-extrabold text-left text-[#dcdbdb] mt-[-30px]">
            WHAT IS OUR
          </h2>
          <h2 className="rubik-doodle-shadow-regular text-[4rem] font-extrabold text-left mb-6 text-[#dcdbdb] mt-[-30px]">
            MISSION
          </h2>

          {/* Лінії в кутах */}
          <div className="absolute top-[150px] left-[20px] w-16 h-16 border-t-4 border-l-4 border-white"></div>
          <div className="absolute bottom-[-30px] right-[-10px] w-16 h-16 border-b-4 border-r-4 border-white"></div>

          <p className="text-3xl font-bold text-left text-[#dcdbdb] max-w-7xl font-sans mt-8">
            Our <span className="text-[#1aae98] italic">mission</span> is to create a more inclusive and accessible society where everyone can realize their potential regardless of physical limitations. We strive to become the leading platform for finding jobs among people with disabilities, offering them the best opportunities for career growth and to companies – professionals with unique skills and experience.
          </p>
        </div>

        {/* Правий блок з зображенням */}
        <div className="relative flex flex-col items-start mr-16">
          <Image
            src="/three_hands.jpg"  // Ваше зображення
            alt="Mission"
            width={400}
            height={400}
          />
        </div>
      </main>

      <main className="py-32 px-12 flex flex-col justify-center items-center bg-[#494848]">
  {/* Контейнер для заголовка і фото */}
  <div className="flex justify-between items-center w-full">
    {/* Заголовок */}
    <div className="text-left ml-16"> {/* Змінено ml на ml-16 для переміщення лівіше */}
      <h2 className="rubik-mono-one-regular text-[3.5rem] font-extrabold text-[#dcdbdb]">
        WHAT IS
      </h2>
      <h2 className="rubik-doodle-shadow-regular text-[4rem] font-extrabold text-[#dcdbdb] mb-6">
        OUR GOALS
      </h2>
    </div>

    {/* Фото з правого боку на одному рівні з заголовком */}
    <div className="mr-56 mt-[-70px]"> {/* Зменшено ml на 2 для ближчого вирівнювання до середини */}
      <Image 
        src="/men.jpg"  // Ваше зображення
        alt="Men"
        width={220}  // Змінюйте розміри, якщо потрібно
        height={220}  // Змінюйте розміри, якщо потрібно
      />
    </div>
  </div>

  {/* Контейнери для цілей */}
  <div className="flex justify-evenly gap-8 w-full">
    {/* Goal 1: Inclusion */}
    <div className="flex flex-col items-center bg-[#187371] text-center p-12 rounded-2xl w-[25%] h-[350px]"> {/* Збільшено висоту контейнера до 350px */}
      <div className="rounded-full bg-[#1aae98] w-14 h-14 flex justify-center items-center mb-4 mt-[-20px]"> {/* Змінено розмір і вертикальне позиціювання */}
        <span className="text-white text-xl font-semibold">1</span>
      </div>
      <h3 className="text-2xl font-bold text-black mb-4">Inclusion</h3>
      <p className="text-white">
        We are willing to help everyone find a meaningful job where they can fully realize their potential, regardless of any physical limitations.
      </p>
    </div>

    {/* Goal 2: Career Development */}
    <div className="flex flex-col items-center bg-[#187371] text-center p-12 rounded-2xl w-[25%] h-[350px]"> {/* Збільшено висоту контейнера до 350px */}
      <div className="rounded-full bg-[#1aae98] w-14 h-14 flex justify-center items-center mb-4 mt-[-20px]"> {/* Змінено розмір і вертикальне позиціювання */}
        <span className="text-white text-xl font-semibold">2</span>
      </div>
      <h3 className="text-2xl font-bold text-black mb-4">Career Development</h3>
      <p className="text-white">
        We strive to help our users find a job that matches their interests and abilities, providing support at every stage of career development.
      </p>
    </div>

    {/* Goal 3: Increasing accessibility */}
    <div className="flex flex-col items-center bg-[#187371] text-center p-12 rounded-2xl w-[25%] h-[350px]"> {/* Збільшено висоту контейнера до 350px */}
      <div className="rounded-full bg-[#1aae98] w-14 h-14 flex justify-center items-center mb-4 mt-[-20px]"> {/* Змінено розмір і вертикальне позиціювання */}
        <span className="text-white text-xl font-semibold">3</span>
      </div>
      <h3 className="text-2xl font-bold text-black mb-4">Increasing accessibility</h3>
      <p className="text-white">
        We will work with companies that are willing to create adapted workplaces, taking into account the needs of people with different abilities.
      </p>
    </div>

    {/* Goal 4: Partnerships with businesses */}
    <div className="flex flex-col items-center bg-[#187371] text-center p-12 rounded-2xl w-[25%] h-[350px]"> {/* Збільшено висоту контейнера до 350px */}
      <div className="rounded-full bg-[#1aae98] w-14 h-14 flex justify-center items-center mb-4 mt-[-20px]"> {/* Змінено розмір і вертикальне позиціювання */}
        <span className="text-white text-xl font-semibold">4</span>
      </div>
      <h3 className="text-2xl font-bold text-black mb-4">Partnerships with businesses</h3>
      <p className="text-white">
        We want to collaborate with organizations that strive to be socially responsible and are willing to invest in the development of affordable jobs.
      </p>
    </div>
  </div>

</main>


<main
  className="py-32 px-12 flex flex-col justify-center items-center bg-[#363636]"
  style={{
    backgroundPosition: '0px 2861.9px', // Set background position using the provided coordinates
    height: '120vh', // Adjust the height as necessary
  }}
>
  {/* Title Section */}
  <div
    style={{
      position: 'absolute',  // Position it absolutely
      left: '897.8px', // X coordinate
      top: '3097.8px', // Y coordinate
    }}
  >
    <h2 className="rubik-mono-one-regular text-[3.5rem] font-extrabold text-[#dcdbdb]">
      WHAT IS OUR
    </h2>
    <h2 className="rubik-doodle-shadow-regular text-[4rem] font-extrabold text-[#dcdbdb] mb-6">
      PRINCIPLES
    </h2>
  </div>

  {/* Image Section */}
  <div
    style={{ position: 'absolute', left: '1098px', top: '3296.6px' }} // Set image position with coordinates
  >
    <Image
      src="/woman.jpg"  // Your image
      alt="Woman"
      width={200}
      height={200}
    />
  </div>

  {/* Lines near the first and fourth principles */}
  <div className="absolute top-[3134.8px] left-[80px] w-24 h-24 border-t-4 border-l-4 border-white"></div>
  <div className="absolute top-[3729px] left-[770px] w-24 h-24 border-b-4 border-r-4 border-white"></div>
  {/* Principles Text Section */}
  <div className="text-left text-[#dcdbdb] max-w-3xl mt-16">
    {/* Principle 1 */}
    <div
      style={{
        position: 'absolute',  // Position it absolutely
        left: '111px', // X coordinate
        top: '3164.8px', // Y coordinate
        width: '572px', // Width from the coordinates
        height: '150.4px', // Height from the coordinates
      }}
      className="mb-8"
    >
      <h3 className="text-2xl font-bold text-[#1aae98] mb-4">EQUALITY AND ACCESSIBILITY</h3>
      <p className="text-lg">
        We believe that everyone has the right to equal opportunities and strive to create accessible conditions for all.
      </p>
    </div>

    {/* Principle 2 (Right-aligned text) */}
    <div
      style={{
        position: 'absolute',  // Position it absolutely
        left: '250px', // X coordinate
        top: '3356.2px', // Y coordinate
        width: '540.2px', // Width from the coordinates
        height: '150.4px', // Height from the coordinates
      }}
      className="mb-8 text-right"  // Add 'text-right' to right-align the text
    >
      <h3 className="text-2xl font-bold text-[#1aae98] mb-4">SOCIAL RESPONSIBILITY</h3>
      <p className="text-lg">
        Our partners and clients must support inclusive work environments where abilities are valued, not limitations.
      </p>
    </div>

    {/* Principle 3 */}
    <div
      style={{
        position: 'absolute',  // Position it absolutely
        left: '111px', // X coordinate
        top: '3547.6px', // Y coordinate
        width: '564.3px', // Width from the coordinates
        height: '150.4px', // Height from the coordinates
      }}
      className="mb-8"
    >
      <h3 className="text-2xl font-bold text-[#1aae98] mb-4">SUPPORT AND COLLABORATION</h3>
      <p className="text-lg">
        We work together with people with disabilities and employers to ensure the best possible employment conditions.
      </p>
    </div>

    {/* Principle 4 */}
    <div
      style={{
        position: 'absolute',  // Position it absolutely
        left: '241.9px', // X coordinate
        top: '3689px', // Y coordinate
        width: '553.9px', // Width from the coordinates
        height: '111.4px', // Height from the coordinates
      }}
      className="mb-8 text-right"
    >
      <h3 className="text-2xl font-bold text-[#1aae98] mb-4">RESPECT AND ETHICS</h3>
      <p className="text-lg">
        Our actions are based on honesty, openness, and mutual respect.
      </p>
    </div>

  </div>
</main>

<footer className="bg-[#dcdbdb] text-black py-6 mt-0">
  <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between">
    <div className="text-left">
      <p className="text-sm">
        © 2024–2025 incluwork.ua. Ukraine's #3 job site.
      </p>
      <p className="text-xs mt-4">
        All rights are protected by the current legislation of Ukraine. The use of materials from this site is possible only with the written permission of IncluWork International LLC. The administration is not responsible for the content of posted ads.
      </p>
    </div>
    <div className="flex justify-start space-x-6 mt-4 md:mt-0">
      <a href="#" className="text-black text-xs hover:underline">Privacy</a>
      <a href="#" className="text-black text-xs hover:underline">Terms of use</a>
      <a href="#" className="text-black text-xs hover:underline">Public offer contract</a>
      <a href="#" className="text-black text-xs hover:underline">Code of ethical conduct</a>
    </div>
  </div>
</footer>

    </div>
  );
}
