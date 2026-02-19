import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, ShoppingCart } from 'lucide-react';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';

const NUTRITION_FACTS = [
    { label: 'Protein', value: '9.7g', icon: '💪' },
    { label: 'Fiber', value: '11.0g', icon: '🌾' },
    { label: 'Carbs', value: '76.3g', icon: '⚡' },
    { label: 'Fat', value: '0.8g', icon: '🫧' },
    { label: 'Calcium', value: '5.01g', icon: '🦴' },
    { label: 'Energy', value: '374 kcal', icon: '🔥' },
];

const PRODUCT_FEATURES = [
    'Premium hand-picked from Mithila',
    '100% natural — no additives',
    'No preservatives or artificial ingredients',
    'FSSAI certified quality standards',
    'Rich in protein, fiber & antioxidants',
    'Vegan, gluten-free & non-GMO',
];

export default function ProductShowcase() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="py-16 sm:py-20 lg:py-28 gradient-section" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">Our Product</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">Premium Quality</span>
                            <span className="text-gray-800"> Fox Nuts</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            The best choice for your healthy snacking journey
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                    {/* Product image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand-100/25 to-gold-100/15 rounded-3xl blur-2xl" />
                            <img
                                src="./product-back.jpeg"
                                alt="Apan Makhana Nutritional Information"
                                className="relative w-[85%] sm:w-[75%] lg:w-full max-w-[400px] mx-auto rounded-2xl sm:rounded-3xl shadow-glass-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Info */}
                    <div className="space-y-5 sm:space-y-6">
                        {/* Nutrition grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 }}
                            className="card-premium p-4 sm:p-5"
                        >
                            <h3 className="text-sm sm:text-base font-display font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="ornament-line" />
                                Nutritional Facts
                                <span className="text-[10px] sm:text-xs font-body font-normal text-gray-400">(per 100g)</span>
                            </h3>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                {NUTRITION_FACTS.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.2 + i * 0.04 }}
                                        className="bg-brand-50/50 rounded-xl p-2.5 sm:p-3 text-center border border-brand-100/50"
                                    >
                                        <span className="text-sm sm:text-base">{item.icon}</span>
                                        <p className="text-sm sm:text-base font-display font-bold text-gray-800 mt-0.5">{item.value}</p>
                                        <p className="text-[10px] sm:text-xs font-body text-gray-500">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="card-premium p-4 sm:p-5"
                        >
                            <h3 className="text-sm sm:text-base font-display font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="ornament-line" />
                                Product Features
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {PRODUCT_FEATURES.map((feature, i) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.35 + i * 0.04 }}
                                        className="flex items-center gap-2"
                                    >
                                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm font-body text-gray-600">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.45 }}
                        >
                            <button
                                onClick={() => window.open(AMAZON_URL, '_blank')}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 
                           rounded-full font-body font-semibold text-sm sm:text-base gradient-cta 
                           text-white shadow-lg active:shadow-md transition-shadow"
                            >
                                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                Buy Now on Amazon — ₹599
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
