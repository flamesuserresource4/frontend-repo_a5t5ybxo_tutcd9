import React, { useState } from 'react';
import { Upload, Link2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo action
    alert(`Contoh saja: sistem akan menilai README dari URL: ${url || '—'}`);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(99,102,241,0.25),transparent),radial-gradient(600px_400px_at_90%_10%,rgba(56,189,248,0.2),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/60 px-3 py-1 text-xs text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            Penilaian README otomatis dengan insight yang dapat ditindaklanjuti
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Nilai Dokumentasi Program Anda Secara Instan
          </h1>
          <p className="mt-4 text-lg leading-7 text-neutral-600 dark:text-neutral-300">
            Unggah atau masukkan tautan repo, kami akan menganalisis kualitas README.md berdasarkan
            kejelasan, struktur, kelengkapan, dan best practice—dengan rekomendasi perbaikan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-2 pr-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <Link2 className="h-5 w-5 text-neutral-400" />
              <input
                type="url"
                placeholder="Tempel URL repo GitHub/GitLab"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-400 focus:outline-none dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Sparkles className="h-5 w-5" />
              Nilai Sekarang
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="inline-flex items-center gap-2">
              <Upload className="h-4 w-4" />
              atau seret & lepas README.md Anda ke sini
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
