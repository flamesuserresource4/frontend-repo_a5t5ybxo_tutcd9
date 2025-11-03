import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} ReadmeRater. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-neutral-700 dark:hover:text-neutral-200">Fitur</a>
            <a href="#how" className="hover:text-neutral-700 dark:hover:text-neutral-200">Cara Kerja</a>
            <a href="#cta" className="hover:text-neutral-700 dark:hover:text-neutral-200">Mulai</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
