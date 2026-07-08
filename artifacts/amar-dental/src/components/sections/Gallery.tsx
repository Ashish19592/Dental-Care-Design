import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import gallery1 from '@assets/generated_images/gallery-1.jpg';
import gallery2 from '@assets/generated_images/gallery-2.jpg';
import gallery3 from '@assets/generated_images/gallery-3.jpg';
import gallery4 from '@assets/generated_images/gallery-4.jpg';
import gallery5 from '@assets/generated_images/gallery-5.jpg';
import gallery6 from '@assets/generated_images/gallery-6.jpg';

const images = [
  { src: gallery1, alt: "Clinic Interior" },
  { src: gallery2, alt: "Dentist Examining" },
  { src: gallery3, alt: "Waiting Area" },
  { src: gallery4, alt: "Dental Tools" },
  { src: gallery5, alt: "Happy Patient" },
  { src: gallery6, alt: "Dental Team" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Our Clinic & Smiles
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look inside our modern facility designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-100"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
