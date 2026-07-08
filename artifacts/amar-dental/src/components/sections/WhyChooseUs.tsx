import { motion } from 'framer-motion';
import { Award, Microscope, Banknote, ShieldPlus, HeartHandshake, Clock, Sofa, Calculator } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Experienced Dental Team",
    desc: "Skilled dentists with years of clinical expertise.",
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    desc: "Latest diagnostic and treatment technology.",
    color: "text-indigo-500",
    bg: "bg-indigo-100"
  },
  {
    icon: Banknote,
    title: "Affordable Treatments",
    desc: "Transparent pricing for every budget.",
    color: "text-emerald-500",
    bg: "bg-emerald-100"
  },
  {
    icon: ShieldPlus,
    title: "Safe & Hygienic Clinic",
    desc: "Strict sterilization and infection control protocols.",
    color: "text-teal-500",
    bg: "bg-teal-100"
  },
  {
    icon: HeartHandshake,
    title: "Family Friendly",
    desc: "Comfortable care for patients of all ages.",
    color: "text-pink-500",
    bg: "bg-pink-100"
  },
  {
    icon: Clock,
    title: "Emergency Care",
    desc: "Available for urgent dental needs.",
    color: "text-red-500",
    bg: "bg-red-100"
  },
  {
    icon: Sofa,
    title: "Comfortable Environment",
    desc: "Relaxing, stress-free clinic ambiance.",
    color: "text-orange-500",
    bg: "bg-orange-100"
  },
  {
    icon: Calculator,
    title: "Transparent Pricing",
    desc: "No hidden charges, clear estimates upfront.",
    color: "text-purple-500",
    bg: "bg-purple-100"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Patients Trust Amar Dental Clinic
          </h2>
          <p className="text-slate-400 text-lg">
            We prioritize your health, comfort, and time. Experience dental care that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${reason.bg}`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
