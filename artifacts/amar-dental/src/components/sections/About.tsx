import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '@assets/generated_images/about-dentist.jpg';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={aboutImg} 
                alt="Amar Dental Clinic Dentist" 
                className="w-full h-auto rounded-[2.5rem] shadow-xl object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-yellow-400 flex">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-800">4.9/5 Rating</p>
                <p className="text-xs text-slate-500">Based on 120+ reviews</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full w-max text-sm">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Why Amar Dental Clinic?
            </h2>
            <div className="text-slate-600 text-lg flex flex-col gap-4">
              <p>
                At <strong className="text-slate-900">Amar Dental Clinic</strong>, we believe every patient deserves exceptional dental care in a comfortable, welcoming environment. Our experienced team of dentists combines modern technology with a compassionate, patient-first approach to deliver outstanding results for patients of all ages.
              </p>
              <p>
                From routine check-ups to advanced cosmetic procedures, we offer comprehensive dental services tailored to your unique needs. We use state-of-the-art diagnostic and treatment equipment to ensure precise, efficient, and pain-minimized care.
              </p>
              <p>
                Our clinic is designed to put you at ease from the moment you walk in — bright, hygienic, and family-friendly. We welcome patients of all ages, including children, and offer transparent, affordable pricing with no hidden costs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                'Compassionate Care',
                'State-of-the-art Tech',
                'Family Friendly',
                'Transparent Pricing'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
