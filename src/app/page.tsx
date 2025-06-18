"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-center font-sans text-gray-800">
      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6 px-12 bg-black/40 backdrop-blur-sm fixed top-0 left-0 w-full z-10 text-white">
        <h1 className="text-xl font-semibold">Bryant Velasquez</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#projects" className="hover:underline">Projects</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-white bg-cover bg-[center_25%]"
        style={{
          backgroundImage: "url('/profBryant.jpg')",
          backgroundColor: "#111827",
        }}
      >
        <h2 className="text-5xl font-bold mb-4 text-shadow">Programmer and Gamer</h2>
        <p className="bg-black bg-opacity-50 p-3 rounded-md backdrop-blur-sm shadow-xl ring-1 ring-white/10 max-w-xl">
          I love to build apps, solve problems, and top frag in Counter Strike.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white py-20 px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About Me</h2>
        <p className="mb-12">Here's a bit more about who I am and what I like to do.</p>

        <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <div className="text-5xl mb-2">💻</div>
            <h3 className="text-xl font-semibold mb-2">I am a programmer</h3>
            <p>
              I'm passionate about building websites, web apps, and experimenting with new technologies. I love working with React, Next.js, and learning new tools that make code better and cleaner.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <div className="text-5xl mb-2">🎮</div>
            <h3 className="text-xl font-semibold mb-2">Gamer</h3>
            <p>
              When I'm not sitting at my desk coding I enjoy playing games that challenge my mind and reflexes. Some of my all time favorite games are Counter Strike and Elden Ring.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <div className="text-5xl mb-2">🌳</div>
            <h3 className="text-xl font-semibold mb-2">Nature Lover</h3>
            <p>
              I enjoy going for walks in parks and relaxing at the beach. Being outdoors helps me clear my mind and recharge.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIALS SECTION */}
      <section id="socials" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect with me</h2>
        <div className="flex justify-center gap-10 text-3xl text-gray-700">
          <a href="https://github.com/BryantVelasquez" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bryant-velasquez-41153b271/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
          <a href="https://www.instagram.com/bryant_velasquez_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-white py-20 px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">My Projects</h2>
        <p className="text-center mb-12">Here are some of the academic projects I’ve worked on.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Project cards... same as before */}
        </div>
      </section>

      {/* APPS SECTION */}
      <section id="apps" className="bg-gray-50 py-20 px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">My Apps</h2>
        <p className="text-center mb-12">Here are a few apps I've worked on or am currently building.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Tip Calculator Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-center text-center">
            <img
              src="/images/tipcalc.jpg"
              alt="Tip Calculator"
              className="rounded-xl w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold bg-blue-700 text-white px-2 py-1 rounded mb-2">Tip Calculator</h3>
            <p className="text-sm text-gray-700 mb-4">
              Going out to a restaurant? This app helps you calculate your tip easily.
            </p>
            <a
              href="/apps/tip-calculator"
              className="text-cyan-600 hover:underline text-sm"
            >
              🔗 Open Tip Calculator
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
