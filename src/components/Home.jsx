// src/components/Home.jsx
import React from 'react';
import Xela from './Xela';
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div className="bg-blue-900 text-blue-100 min-h-screen">
      {/* 1️⃣ Qui mettiamo Xela subito sotto la Navbar */}
      <Xela />

      {/* 2️⃣ Il contenuto “storico” della Home (timeline, etc.) */}
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to my site!</h1>
        <p className="mb-8 text-blue-300">
          Explore my journey in the world of technology and beyond!
        </p>

        {/* Timeline Professionale */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-blue-100">My Professional Journey</h2>
          <ol className="relative border-l-2 border-blue-800">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full -left-4 ring-8 ring-blue-900">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Diploma: Ragionieri Programmatori</h3>
              <p className="text-sm text-blue-300">
                Completed with a strong foundation in computer science and business.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-teal-700 to-teal-500 rounded-full -left-4 ring-8 ring-blue-900">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Laurea: Economia e Gestione Aziendale</h3>
              <p className="text-sm text-blue-300">
                Graduated with expertise in business management and economics.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-700 to-green-500 rounded-full -left-4 ring-8 ring-blue-900">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Assistenza Clienti: Concentrix</h3>
              <p className="text-sm text-blue-300">
                Provided technical support for modem and network issues.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-700 to-purple-500 rounded-full -left-4 ring-8 ring-blue-900">
                <BuildingOfficeIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Gestione Lavanderia Self-Service</h3>
              <p className="text-sm text-blue-300">
                Managed operations, customer service, and maintenance for two years.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pink-700 to-pink-500 rounded-full -left-4 ring-8 ring-blue-900">
                <CodeBracketIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Boolean Bootcamp</h3>
              <p className="text-sm text-blue-300">
                Currently honing my skills in full-stack web development.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-full -left-4 ring-8 ring-blue-900 "></span>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-full -left-4 ring-8 ring-blue-900 animate-pulse">
                <RocketLaunchIcon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-medium leading-tight">Present</h3>
              <p className="text-sm text-blue-300">
                Continuing my journey and creating new digital experiences 🚀
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Home;
