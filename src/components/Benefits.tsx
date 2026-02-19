import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const BENEFITS = [
    { title: 'Slows ageing process', emoji: '✨' },
    { title: 'Aids weight loss', emoji: '💪' },
    { title: 'Treats insomnia', emoji: '😴' },
    { title: 'Anti-inflammatory', emoji: '🛡️' },
    { title: 'Rich in calcium', emoji: '🦴' },
    { title: 'Heart-healthy', emoji: '❤️' },
    { title: 'High antioxidants', emoji: '🌿' },
    { title: 'Gluten-free & vegan', emoji: '🌱' },
];

export default function Benefits() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="benefits" className="py-16 sm:py-20 lg:py-28 gradient-section" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">Health & Wellness</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">Health Benefits</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            Nature's perfect superfood for a healthy, balanced lifestyle
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                    {/* Benefits grid — compact on mobile */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        {BENEFITS.map((b, i) => (
                            <motion.div
                                key={b.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="group flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-3.5 rounded-xl 
                           border border-gray-100 shadow-sm"
                            >
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-50 
                                flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                                </div>
                                <div className="flex items-center gap-1.5 min-w-0">
                                    <span className="text-sm sm:text-base flex-shrink-0">{b.emoji}</span>
                                    <span className="text-xs sm:text-sm font-body font-medium text-gray-700 truncate">
                                        {b.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Product image + floating stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/20 to-gold-200/10 rounded-3xl blur-2xl" />
                            <img
                                src="./product-benefits.jpeg"
                                alt="Apan Makhana Health Benefits"
                                className="relative w-[75%] sm:w-[65%] lg:w-[80%] max-w-[380px] mx-auto rounded-3xl shadow-glass-lg"
                            />

                            {/* Protein stat */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-1 -right-1 sm:top-2 sm:-right-3 bg-white/95 backdrop-blur-md 
                           px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-glass border border-white/60"
                            >
                                <p className="text-xl sm:text-2xl font-display font-bold gradient-text-gold">9.7g</p>
                                <p className="text-[10px] sm:text-xs font-body text-gray-500">Protein/100g</p>
                            </motion.div>

                            {/* Calorie stat */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-1 -left-1 sm:bottom-2 sm:-left-4 bg-white/95 backdrop-blur-md 
                           px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-glass border border-white/60"
                            >
                                <p className="text-xl sm:text-2xl font-display font-bold gradient-text-brand">374</p>
                                <p className="text-[10px] sm:text-xs font-body text-gray-500">kcal/100g</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
