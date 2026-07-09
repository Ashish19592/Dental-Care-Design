import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

import ba1 from '@assets/IMG-20260708-WA0004_1783510207264.jpg';
import ba2 from '@assets/IMG-20260708-WA0003_1783510207342.jpg';
import ba3 from '@assets/IMG-20260708-WA0001_1783510207367.jpg';
import ba4 from '@assets/IMG-20260708-WA0002_1783510207388.jpg';
import ba5 from '@assets/IMG-20260708-WA0008_1783510207420.jpg';

const transformations = [
  { img: ba1, label: "Orthodontic Treatment",  desc: "Teeth alignment & bite correction" },
  { img: ba2, label: "Teeth Whitening",         desc: "Professional whitening procedure" },
  { img: ba3, label: "Full Mouth Restoration",  desc: "Complete dental rehabilitation" },
  { img: ba4, label: "Smile Makeover",          desc: "Dentures & prosthetic restoration" },
  { img: ba5, label: "Dental Implants",         desc: "Missing teeth replacement" },
];

export function BeforeAfter() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-full mb-4 text-sm"
          >
            Real Patient Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Smile Transformations
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from our actual patients at Amar Dental Clinic. Click any photo to enlarge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setLightbox(idx)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Click to enlarge</span>
                </div>
                {/* Real photo badge */}
                <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Real Patient
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.label}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={transformations[lightbox].img}
            alt={transformations[lightbox].label}
            className="max-h-[90vh] max-w-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-bold text-lg">{transformations[lightbox].label}</p>
            <p className="text-sm text-white/70">{transformations[lightbox].desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
