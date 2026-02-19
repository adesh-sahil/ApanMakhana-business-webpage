import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const FAQS = [
    {
        q: 'How should I store Apan Makhana?',
        a: 'Store in a cool, dry place in an airtight container. Keep away from direct sunlight and moisture. Once opened, consume within 3 months for best taste.',
    },
    {
        q: 'What is the shelf life?',
        a: 'Apan Makhana has a shelf life of 12 months from packaging date when stored properly in its original sealed packaging.',
    },
    {
        q: 'Is it suitable for all age groups?',
        a: 'Absolutely! Makhana is suitable for all ages — from toddlers to seniors. It\'s a healthy, gluten-free, and easily digestible snack for the whole family.',
    },
    {
        q: 'Where are the fox nuts sourced from?',
        a: 'Our fox nuts are hand-picked from Mithila (Bihar), the heartland of makhana cultivation. We work directly with local farmers for the best quality.',
    },
    {
        q: 'Available in physical stores?',
        a: 'Yes! Available in 10+ retail outlets across Delhi NCR. Also buy online via Amazon India for doorstep delivery anywhere in India.',
    },
    {
        q: 'Any additives or preservatives?',
        a: 'No. Apan Makhana is 100% natural with zero additives, preservatives, or artificial flavoring. Pure, premium fox nuts — nothing else.',
    },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            className="border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden bg-white"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
            >
                <h3 className="text-sm sm:text-base lg:text-lg font-display font-semibold text-gray-800 pr-2">
                    {faq.q}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-50 
                     flex items-center justify-center"
                >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-50">
                            <p className="text-gray-500 font-body text-xs sm:text-sm leading-relaxed pt-3">
                                {faq.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="faq" className="py-16 sm:py-20 lg:py-28 gradient-section-alt" ref={ref}>
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">Got Questions?</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">FAQ</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg">
                            Everything you need to know about Apan Makhana
                        </p>
                    </motion.div>
                </div>

                {/* FAQ items */}
                <div className="space-y-2.5 sm:space-y-3">
                    {FAQS.map((faq, i) => (
                        <FAQItem key={i} faq={faq} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
