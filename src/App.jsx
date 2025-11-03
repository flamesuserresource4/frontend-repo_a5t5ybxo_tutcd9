import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* CTA Section */}
        <section id="cta" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-3xl border border-indigo-200/40 bg-gradient-to-tr from-indigo-600 via-sky-500 to-teal-400 p-8 shadow-lg sm:p-12">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h3 className="text-2xl font-bold sm:text-3xl">Mulai tingkatkan README Anda hari ini</h3>
                <p className="mt-2 text-white/90">
                  Dapatkan skor, insight, dan rekomendasi perbaikan dalam hitungan detik.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#home"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow hover:bg-neutral-100"
                  >
                    Coba Penilaian
                  </a>
                  <a
                    href="https://github.com/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/70 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Lihat Contoh README Baik
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
