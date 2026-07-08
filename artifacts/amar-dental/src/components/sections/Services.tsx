import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  Smile, 
  Syringe, 
  Scissors, 
  Baby, 
  CalendarPlus, 
  ShieldAlert, 
  Droplet,
  Layers,
  Wrench
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Consultation",
    price: "₹300",
    desc: "Includes X-ray or radiographs. (Scans and OPG excluded.)",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    price: "₹3,500",
    desc: "Professional scaling, polishing, and whitening treatment.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Droplet,
    title: "Teeth Whitening",
    price: "From ₹10,000",
    desc: "Total cleaning + bleaching package: ₹12,000",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Wrench,
    title: "Dental Implants",
    price: "From ₹25,000",
    desc: "Permanent, natural-looking tooth replacement solution.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    price: "From ₹4,000",
    desc: "Pain-free RCT using advanced rotary techniques.",
    color: "bg-rose-100 text-rose-600"
  },
  {
    icon: Layers,
    title: "Crowns & Veneers",
    price: "From ₹4,000",
    desc: "Restore and beautify damaged or discolored teeth.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Smile,
    title: "Dentures & Bridges",
    price: "From ₹5,000",
    desc: "Custom-fitted removable or fixed tooth replacements.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    price: "From ₹1,000",
    desc: "Safe, painless extraction including wisdom teeth.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: ShieldAlert,
    title: "Emergency Dental",
    price: "From ₹500",
    desc: "Prompt relief for toothaches, broken teeth, and trauma.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    price: "Varies",
    desc: "Friendly, gentle dental care specially designed for children.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Syringe,
    title: "Oral Surgery",
    price: "From ₹4,000",
    desc: "Minor surgical procedures performed with precision.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: CalendarPlus,
    title: "Online Booking",
    price: "Free",
    desc: "Schedule your visit conveniently from your phone.",
    color: "bg-green-100 text-green-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4 text-sm"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our Dental Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Comprehensive dental care for every need and budget. We use modern techniques and materials for the best outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.color} transition-transform group-hover:scale-110`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="bg-slate-100 text-slate-800 text-sm font-bold px-3 py-1 rounded-full">
                  {service.price}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
