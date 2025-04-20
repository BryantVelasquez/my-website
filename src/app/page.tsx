"use client";

import{
  FaGithub,
  FaInstagram,
  FaLinkedin,
}from "react-icons/fa";
import Image from "next/image";
import backgroundImage from "/public/TheBryant.jpg"; 


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
          backgroundImage: "url('/TheBryant.jpg')", // Replace with your actual image in public/
        }}
      >
        <h2 className="text-5xl font-bold mb-4">Welcome to my page</h2>
        <p className="text-lg max-w-xl">
          This page is in progress, in here I will post things about me, social media, links, etc...
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-white py-20 px-8"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About me</h2>
        <p className="mb-12">Here is a brief description of me.</p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div>
            <div className="text-5xl mb-2">💻</div>
            <h3 className="text-xl font-semibold">Programmer</h3>
          </div>
          <div>
            <div className="text-5xl mb-2">🎮</div>
            <h3 className="text-xl font-semibold">Gamer</h3>
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
    </main>
  );
}
