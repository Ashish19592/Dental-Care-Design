import { motion } from 'framer-motion';

import before1 from '@assets/generated_images/before-1.jpg';
import after1 from '@assets/generated_images/after-1.jpg';
import before2 from '@assets/generated_images/before-2.jpg';
import after2 from '@assets/generated_images/after-2.jpg';
import before3 from '@assets/generated_images/before-3.jpg';
import after3 from '@assets/generated_images/after-3.jpg';

const transformations = [
  { before: before1, after: after1, label: "Teeth Whitening" },
  { before: before2, after: after2, label: "Orthodontics / Braces" },
  { before: before3, after: after3, label: "Dental Crowns" }
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Smile Transformations
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from our actual patients. See what modern dentistry can do for your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100"
            >
              <div className="flex flex-col gap-2 relative">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img src={item.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">After</div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 z-10">
                  <span className="text-slate-400 font-bold text-xs">VS</span>
                </div>
              </div>
              <h3 className="text-center mt-6 font-bold text-lg text-slate-800">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
