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
    <div className="relative text-slate-100 min-h-screen overflow-hidden">
      {/* layer di base: slate */}
      <div className="absolute inset-0 bg-slate-700" />

      {/* layer sfocato a destra: gradiente da nero trasparente a nero */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-800 to-transparent filter blur-lg" />

      {/* contenuto vero e proprio */}
      <div className="relative z-10">
        {/* 1️⃣ Qui mettiamo Xela subito sotto la Navbar */}
        <Xela />

        {/* 2️⃣ Il contenuto “storico” della Home (timeline, etc.) */}
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-slate-100">Welcome to my site!</h1>
          <p className="mb-8 text-slate-300">
            Explore my journey in the world of technology and beyond!
          </p>

          {/* Timeline cv */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-slate-100">My Professional Journey</h2>
            <ol className="relative border-l-2 border-slate-600">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full -left-4 ring-8 ring-slate-700">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Diploma: Ragionieri Programmatori</h3>
                <p className="text-sm text-slate-300">
                  Completed with a strong foundation in computer science and business.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full -left-4 ring-8 ring-slate-700">
                  <AcademicCapIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Laurea: Economia e Gestione Aziendale</h3>
                <p className="text-sm text-slate-300">
                  Graduated with expertise in business management and economics.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-300 rounded-full -left-4 ring-8 ring-slate-700">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Assistenza Clienti: Concentrix</h3>
                <p className="text-sm text-slate-300">
                  Provided technical support for modem and network issues.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-400 rounded-full -left-4 ring-8 ring-slate-700">
                  <BuildingOfficeIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Gestione Lavanderia Self-Service</h3>
                <p className="text-sm text-slate-300">
                  Managed operations, customer service, and maintenance for two years.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-400 rounded-full -left-4 ring-8 ring-slate-700">
                  <CodeBracketIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Boolean Bootcamp</h3>
                <p className="text-sm text-slate-300">
                  Currently honing my skills in full-stack web development.
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full -left-4 ring-8 ring-slate-700"></span>
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-full -left-4 ring-8 ring-slate-700 animate-pulse">
                  <RocketLaunchIcon className="w-5 h-5 text-white" />
                </span>
                <h3 className="font-medium leading-tight text-slate-100">Present</h3>
                <p className="text-sm text-slate-300">
                  Continuing my journey and creating new digital experiences 🚀
                </p>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
