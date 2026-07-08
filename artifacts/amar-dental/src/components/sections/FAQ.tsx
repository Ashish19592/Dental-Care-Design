import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book online through our website contact form, call us directly, or send us a WhatsApp message. We typically confirm within a few hours during business hours."
  },
  {
    q: "Do you treat children?",
    a: "Yes! We have a dedicated Kids Dentistry service. Our doctors are specially trained to make dental visits comfortable and fun for children of all ages."
  },
  {
    q: "Is the consultation paid?",
    a: "Yes, our consultation fee is ₹300, which includes a clinical examination and basic X-ray or radiographs if needed. (OPG and advanced scans are charged separately.)"
  },
  {
    q: "Are X-rays included in consultation?",
    a: "Standard digital X-rays are included in the consultation fee. OPG (panoramic X-rays) and CBCT scans may be charged separately depending on the clinical requirement."
  },
  {
    q: "Do you accept Google Pay?",
    a: "Yes, we accept Google Pay, all major debit cards, and NFC mobile payments for your convenience."
  },
  {
    q: "What are your clinic timings?",
    a: "We are open Monday to Saturday, 10:00 AM to 8:00 PM. Sunday appointments are available on prior request. Emergency dental care is available — contact us via WhatsApp for urgent cases."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-slate-600">
            Got questions? We've got answers.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
