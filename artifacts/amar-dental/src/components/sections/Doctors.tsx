import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Avinash Singh",
    qual: "BDS, MDS",
    role: "Oral Physician & Radiologist",
    initials: "AS",
    color: "bg-blue-100 text-blue-700",
    accent: "border-blue-200",
    exp: "18+ Years",
  },
  {
    name: "Dr. Raj Kumar Singh",
    qual: "BDS, MDS",
    role: "Consulting Orthodontist",
    initials: "RK",
    color: "bg-teal-100 text-teal-700",
    accent: "border-teal-200",
    exp: "",
  },
  {
    name: "Dr. Vimanyu Kataria",
    qual: "BDS, MDS",
    role: "Consulting Oral Surgeon & Implantologist",
    initials: "VK",
    color: "bg-purple-100 text-purple-700",
    accent: "border-purple-200",
    exp: "",
  },
  {
    name: "Dr. Jitender",
    qual: "BDS, MDS",
    role: "Consulting Oral Surgeon",
    initials: "JT",
    color: "bg-orange-100 text-orange-700",
    accent: "border-orange-200",
    exp: "",
  },
  {
    name: "Dr. Pranav Sharma",
    qual: "BDS, PGCE IGNOU",
    role: "Consulting Endodontist",
    initials: "PS",
    color: "bg-pink-100 text-pink-700",
    accent: "border-pink-200",
    exp: "",
  },
  {
    name: "Dr. Abhishek Shekhar",
    qual: "BDS, MDS",
    role: "Consulting Prosthodontist & Implantologist",
    initials: "AB",
    color: "bg-green-100 text-green-700",
    accent: "border-green-200",
    exp: "",
  },
  {
    name: "Dr. Pooja Tiwari",
    qual: "BDS",
    role: "Dental Surgeon",
    initials: "PT",
    color: "bg-rose-100 text-rose-700",
    accent: "border-rose-200",
    exp: "",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4 text-sm"
          >
            Our Specialists
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Meet Our Dental Team
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A panel of experienced specialists dedicated to providing you the best dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-white rounded-2xl p-6 border-2 ${doc.accent} hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group`}
            >
              {/* Avatar with initials */}
              <div className={`w-20 h-20 rounded-full ${doc.color} flex items-center justify-center text-2xl font-bold mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                {doc.initials}
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight">
                {doc.name}
              </h3>

              {/* Qualification */}
              <p className="text-xs font-semibold text-primary mb-2">{doc.qual}</p>

              {/* Role badge */}
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${doc.color} leading-relaxed`}>
                {doc.role}
              </span>

              {/* Experience (only for lead doctor) */}
              {doc.exp && (
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Stethoscope className="w-3.5 h-3.5" />
                  {doc.exp} Experience
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
