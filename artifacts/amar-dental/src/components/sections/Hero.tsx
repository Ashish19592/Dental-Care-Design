import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Users, Award, Stethoscope, ShieldCheck } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-clinic.jpg';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[100dvh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Amar Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide">Accepting New Patients</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight">
            AMAR DENTAL CLINIC
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-serif text-teal-300 mb-6 opacity-90">
            अमर डेंटल क्लीनिक
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Healthy Smiles. Trusted Care. Advanced Dentistry for the Whole Family.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-teal-500/10 border border-teal-500/50 text-teal-300 hover:text-teal-200 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <Users className="w-6 h-6 text-teal-400" />
              <p className="text-white font-bold text-lg">500+</p>
              <p className="text-slate-400 text-sm">Happy Patients</p>
            </div>
            <div className="flex flex-col gap-2">
              <Award className="w-6 h-6 text-teal-400" />
              <p className="text-white font-bold text-lg">10+ Years</p>
              <p className="text-slate-400 text-sm">Experience</p>
            </div>
            <div className="flex flex-col gap-2">
              <Stethoscope className="w-6 h-6 text-teal-400" />
              <p className="text-white font-bold text-lg">Modern</p>
              <p className="text-slate-400 text-sm">Equipment</p>
            </div>
            <div className="flex flex-col gap-2">
              <ShieldCheck className="w-6 h-6 text-teal-400" />
              <p className="text-white font-bold text-lg">Affordable</p>
              <p className="text-slate-400 text-sm">Pricing</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
