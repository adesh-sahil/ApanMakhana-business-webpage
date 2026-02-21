import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Check } from 'lucide-react';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';

const NUTRITION = [
    { label: 'Protein', value: '9.7g', icon: '💪' },
    { label: 'Fiber', value: '11g', icon: '🌾' },
    { label: 'Carbs', value: '76g', icon: '⚡' },
    { label: 'Fat', value: '0.8g', icon: '🫧' },
    { label: 'Calcium', value: '5g', icon: '🦴' },
    { label: 'Energy', value: '374 kcal', icon: '🔥' },
];

const TAGS = [
    '100% Natural', 'No Preservatives', 'Gluten Free', 'Vegan',
    'Non-GMO', 'FSSAI Certified', 'High Protein', 'Rich in Antioxidants',
];

export default function Product() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="product" className="py-16 sm:py-20 lg:py-28 gradient-cream" ref={ref}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                    {/* Product image */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-br from-brand-100/20 to-gold-100/10 rounded-3xl blur-2xl" />
                            <img
                                src="./product-back.jpeg"
                                alt="Apan Makhana — Nutritional Information"
                                className="relative w-[80%] sm:w-[70%] lg:w-full max-w-[380px] mx-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="section-label mb-4 inline-flex">Our Product</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                                Premium Quality Fox Nuts
                            </h2>
                            <p className="text-gray-500 font-body text-sm sm:text-base mb-6 max-w-md">
                                Hand-picked from Mithila's finest farms. Every pack delivers nature's goodness —
                                zero additives, maximum nutrition.
                            </p>
                        </motion.div>

                        {/* Nutrition grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5"
                        >
                            {NUTRITION.map((n, i) => (
                                <motion.div
                                    key={n.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.15 + i * 0.04 }}
                                    className="bg-brand-50/60 rounded-xl p-2.5 sm:p-3 text-center border border-brand-100/40"
                                >
                                    <span className="text-base sm:text-lg">{n.icon}</span>
                                    <p className="text-sm sm:text-base font-display font-bold text-gray-900 mt-0.5">{n.value}</p>
                                    <p className="text-[10px] sm:text-xs font-body text-gray-500">{n.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Benefit tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.25 }}
                            className="flex flex-wrap gap-1.5 sm:gap-2 mb-6"
                        >
                            {TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white 
                             rounded-full text-[10px] sm:text-xs font-body font-medium text-gray-600 
                             border border-gray-100"
                                >
                                    <Check className="w-3 h-3 text-brand-500" />
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.button
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.35 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 
                         rounded-full font-body font-semibold text-[0.9rem] gradient-cta text-white 
                         shadow-lg shadow-brand-600/20 active:shadow-md transition-all"
                        >
                            <ShoppingCart className="w-[18px] h-[18px]" />
                            Buy Now — ₹599 on Amazon
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
