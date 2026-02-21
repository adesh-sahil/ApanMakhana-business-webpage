import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Mail } from 'lucide-react';

const FAQS = [
    {
        q: 'What makes Apan Makhana different?',
        a: 'Our makhana is hand-picked from the pristine farms of Mithila, Bihar — where fox nuts have been cultivated for generations. Every pack is FSSAI certified with zero preservatives, ensuring you get the purest, premium quality fox nuts.',
    },
    {
        q: 'Where can I buy Apan Makhana?',
        a: 'We\'re available in 250+ premium outlets across Delhi NCR, Gujarat, Rajasthan, UP, Haryana, Uttarakhand, Kashmir, Himachal Pradesh, and Bhopal. You can also order on Amazon India for delivery across the country.',
    },
    {
        q: 'Are your fox nuts truly 100% natural?',
        a: 'Absolutely. Our makhana contains zero artificial ingredients, zero preservatives, and is completely gluten-free, vegan, and non-GMO. What you get is pure, natural fox nuts — nothing else.',
    },
    {
        q: 'What are the health benefits of makhana?',
        a: 'Makhana is a nutritional powerhouse — high in protein (9.7g per 100g), low in fat, rich in calcium, and packed with antioxidants. It supports heart health, aids weight management, and is great for diabetics due to its low glycemic index.',
    },
];

export default function FAQ() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 sm:py-20 lg:py-28 gradient-cream" ref={ref}>
            <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        <span className="section-label mb-4 inline-flex">FAQ</span>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                            Quick Answers
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-2">
                    {FAQS.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06 }}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                            >
                                <span className="text-sm sm:text-[0.9rem] font-body font-semibold text-gray-800 pr-4">
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''
                                    }`} />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm font-body text-gray-500 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8"
                >
                    <p className="text-sm font-body text-gray-400 mb-3">Still have questions?</p>
                    <a
                        href="mailto:apanmakhana@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold 
                       text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        apanmakhana@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
