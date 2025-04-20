'use client';

import React from "react";

export default function Home() {
  return (
    <main className="p-10 space-y-12">
      {/* Hero / Intro Section */}
      <section>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Bryant</h1>
        <p className="text-lg text-gray-700">
          Welcome to my personal website! I'm learning web development and building cool projects.
        </p>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a developer currently focused on React, Next.js, TypeScript, and building awesome user interfaces.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-3xl font-semibold mb-2">My Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🛠️ MABBR - Stock trading simulation app</li>
          <li>📱 Quiz Game - Mobile app built with Jetpack Compose</li>
          <li>🔐 Auth System - Login/Signup with OAuth + Prisma</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! I'll get back to you soon.");
          }}
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="email"
            placeholder="Your email"
            required
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-black text-white p-2 rounded hover:bg-cyan-600">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
