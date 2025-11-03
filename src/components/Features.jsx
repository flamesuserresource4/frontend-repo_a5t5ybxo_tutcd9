import React from 'react';
import { FileText, BarChart3, Shield, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Analisis Menyeluruh',
    desc: 'Menilai struktur, ringkasan, pemasangan, cara pakai, lisensi, dan badge kualitas.',
    icon: FileText,
  },
  {
    title: 'Skor & Benchmark',
    desc: 'Dapatkan skor keseluruhan dengan pembobotan standar dan perbandingan terhadap repo populer.',
    icon: BarChart3,
  },
  {
    title: 'Saran Otomatis',
    desc: 'Rekomendasi spesifik untuk memperbaiki bagian yang lemah agar mudah ditindaklanjuti.',
    icon: Rocket,
  },
  {
    title: 'Pemeriksaan Kepatuhan',
    desc: 'Deteksi lisensi, kode etik, dan praktik dokumentasi yang direkomendasikan.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Fitur yang Membuat README Lebih Baik
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Alat kami memeriksa elemen-elemen penting dan memberikan insight yang jelas untuk peningkatan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
