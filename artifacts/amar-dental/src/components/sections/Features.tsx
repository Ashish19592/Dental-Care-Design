import { motion } from 'framer-motion';
import { Accessibility, Baby, CreditCard, SmartphoneNfc, CalendarClock, Armchair, BadgeCheck } from 'lucide-react';

const features = [
  { icon: Accessibility, title: "Wheelchair Accessible Entrance" },
  { icon: Armchair, title: "Wheelchair Accessible Seating" },
  { icon: Accessibility, title: "Wheelchair Accessible Toilet" },
  { icon: Baby, title: "Restroom Available" },
  { icon: BadgeCheck, title: "LGBTQ+ Friendly" },
  { icon: CalendarClock, title: "Appointment Required" },
  { icon: CalendarClock, title: "Appointments Recommended" },
  { icon: CreditCard, title: "Debit Cards Accepted" },
  { icon: SmartphoneNfc, title: "Google Pay Accepted" },
  { icon: SmartphoneNfc, title: "NFC Mobile Payments" },
];

export function Features() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Clinic Features & Accessibility
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-teal-600" />
              <span className="text-sm font-semibold text-slate-700 leading-tight">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
