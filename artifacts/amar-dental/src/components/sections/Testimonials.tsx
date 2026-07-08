import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    date: "Dec 2025",
    text: "Best dental clinic I've visited! The staff is incredibly friendly and the treatment was painless. Dr. Amar is extremely skilled and made me feel comfortable throughout the procedure. Highly recommend!",
    initials: "RS"
  },
  {
    name: "Priya Patel",
    date: "Nov 2025",
    text: "Got my teeth cleaned and whitened here. The result is amazing — my teeth look 5 shades whiter! Very professional team and affordable pricing. Will definitely come back for regular check-ups.",
    initials: "PP"
  },
  {
    name: "Amit Singh",
    date: "Oct 2025",
    text: "Had a root canal done and I was terrified, but the experience was surprisingly pain-free. The clinic is very clean, well-equipped, and the doctor explained every step. 5 stars without hesitation.",
    initials: "AS"
  },
  {
    name: "Sunita Verma",
    date: "Jan 2026",
    text: "Brought my 6-year-old daughter here for her first dental visit. The team was so patient and gentle with her. She actually enjoyed it! Great kids-friendly environment.",
    initials: "SV"
  },
  {
    name: "Vikram Nair",
    date: "Feb 2026",
    text: "Got dental implants here and the quality is excellent. Looks completely natural. The pricing is very reasonable compared to other clinics I visited. Highly satisfied with the outcome.",
    initials: "VN"
  },
  {
    name: "Meera Joshi",
    date: "Mar 2026",
    text: "Emergency tooth pain at 9 PM and they were so responsive over WhatsApp. Got an emergency appointment next morning. Quick, professional, and very caring. This is my permanent dental clinic now.",
    initials: "MJ"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-500 flex gap-1">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </span>
          </div>
          <p className="text-slate-600 font-medium">4.9/5 based on 120+ Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative"
            >
              <div className="text-yellow-400 flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
