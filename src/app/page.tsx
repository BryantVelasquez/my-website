
"use client";

import{
  FaGithub,
  FaInstagram,
  FaLinkedin,
}from "react-icons/fa";


export default function Home() {
  return (
    <main className="text-center font-sans text-gray-800">
      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6 px-12 bg-transparent absolute top-0 left-0 w-full z-10 text-white">
        <h1 className="text-xl font-semibold">Bryant Velasquez</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#apps" className="hover:underline">Project</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-white text-shadow bg-cover bg-center"
        style={{
          backgroundImage: "url('/profBryant.jpg')", 
        }}
      >
        <h2 className="text-5xl font-bold mb-4">Welcome to my page</h2>
        <p className="text-lg max-w-xl">
          This page is in progress, in here I will post things about me, social media, links, etc...
        </p>
      </section>

      {/* ABOUT SECTION */}
<section id="about" className="bg-white py-20 px-8">
  <h2 className="text-4xl font-bold text-blue-900 mb-6">About Me</h2>
  <p className="mb-12">Here's a bit more about who I am and what I love.</p>

  <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-4xl mx-auto">
    {/* Programmer */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <div className="text-5xl mb-2">💻</div>
      <h3 className="text-xl font-semibold mb-2">I am a programmer</h3>
      <p>
        I'm passionate about building websites, web apps, and experimenting with new technologies. I love working with React, Next.js, and learning new tools that make code better and cleaner.
      </p>
    </div>

    {/* Gamer */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
      <div className="text-5xl mb-2">🎮</div>
      <h3 className="text-xl font-semibold mb-2">Gamer</h3>
      <p>
        When I'm not sitting at my desk coding I enjoy playing games that challenge my mind and reflexes. Some of my all time favorite games are Counter Strike and Elden Ring. I mostly enjoy any FPS game with friends so if you ever want to play let me know!
      </p>
    </div>

    {/* Nature Lover */}
<div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
  <div className="text-5xl mb-2">🌳</div>
  <h3 className="text-xl font-semibold mb-2">Nature Lover</h3>
  <p>
    I enjoy going for walks in parks and relaxing at the beach. Being outdoors helps me clear my mind and recharge. It’s one of my favorite ways to take a break from screens and get inspired.
  </p>
</div>
  </div>
</section>

 {/* SOCIALS SECTION */}
 <section id="socials" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect with me</h2>
        <div className="flex justify-center gap-10 text-3xl text-gray-700">
          <a
            href="https://github.com/BryantVelasquez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bryant-velasquez-41153b271/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/bryant_velasquez_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </section>


{/* PROJECTS SECTION */}
<section id="projects" className="bg-white py-20 px-8">
  <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">My Projects</h2>
  <p className="text-center mb-12">Here are some of the academic projects I’ve worked on.</p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">

    {/* MABBR */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">📈 MABBR – Full-Stack Trading Simulation</h3>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>Real-time portfolio dashboard using Yahoo Finance API</li>
          <li>Live stock holdings with symbol, quantity, price, value, and profit/loss</li>
          <li>Risk analysis system (0–100 scale) with visualizations</li>
          <li>Interactive stock prediction game based on historical trends</li>
        </ul>
      </div>
      <a
        href="https://github.com/AmaurysM/mabbr-senior-project"
        target="_blank"
        className="text-cyan-600 hover:underline text-sm mt-auto"
      >
        🔗 View on GitHub
      </a>
    </div>

    {/* Database App */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">🗂️ Database Management Application</h3>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>CRUD-based UI using Java, IntelliJ, and SceneBuilder</li>
          <li>Connected to Microsoft Azure for persistent storage</li>
          <li>Managed user records efficiently with clean interface</li>
        </ul>
      </div>
      <a
        href="https://github.com/BryantVelasquez/CSC311_DB_UI_semesterlong-project"
        target="_blank"
        className="text-cyan-600 hover:underline text-sm mt-auto"
      >
        🔗 View on GitHub
      </a>
    </div>

    {/* Future Link */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">💸 Future Link – Desktop Budget Planner</h3>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>Custom budget creation based on salary and location</li>
          <li>Visualized income allocation with QuickChart API (pie charts)</li>
          <li>Parsed CSVs and handled user input with error checking</li>
        </ul>
      </div>
      <a
        href="https://github.com/AaronScott2025/FutureLink"
        target="_blank"
        className="text-cyan-600 hover:underline text-sm mt-auto"
      >
        🔗 View on GitHub
      </a>
    </div>

    {/* LightWeight */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">🥗 LightWeight – Nutrition Tracker App</h3>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>Used Edamam API to analyze and display food nutrition</li>
          <li>Designed modern, responsive UI with Jetpack Compose (Kotlin)</li>
          <li>Stored user meal data for personalized calorie tracking</li>
        </ul>
      </div>
      <a
        href="https://github.com/OsmanyARdx/LightWeight"
        target="_blank"
        className="text-cyan-600 hover:underline text-sm mt-auto"
      >
        🔗 View on GitHub
      </a>
    </div>

  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="bg-white py-20 px-8">
  <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Me</h2>
  <p className="text-center mb-8 text-gray-700">Have a question, opportunity, or just want to connect? Send me a message!</p>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thanks! I'll get back to you soon.");
    }}
    className="max-w-xl mx-auto flex flex-col gap-6"
  >
    <input
      type="email"
      required
      placeholder="Your Email"
      className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      required
      rows={5}
      placeholder="Your Message"
      className="border border-gray-300 p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-700 transition-all"
    >
      Send Message
    </button>
  </form>
</section>


    </main>
  );
}
