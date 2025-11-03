import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400" />
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">ReadmeRater</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Fitur</a>
          <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition">Cara Kerja</a>
          <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition">Mulai</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Coba Gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
