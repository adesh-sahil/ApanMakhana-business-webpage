import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Shield, Zap } from 'lucide-react';

const REASONS = [
    {
        icon: Leaf,
        title: '100% Natural',
        desc: 'Zero artificial ingredients — pure fox nuts straight from Mithila\'s farms.',
        gradient: 'from-emerald-500 to-green-600',
    },
    {
        icon: Heart,
        title: 'Heart Healthy',
        desc: 'Low in fat, cholesterol-free, rich in magnesium for a healthy heart.',
        gradient: 'from-rose-400 to-pink-500',
    },
    {
        icon: Shield,
        title: 'FSSAI Certified',
        desc: 'Tested & certified to meet India\'s highest food safety standards.',
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        icon: Zap,
        title: 'Rich in Antioxidants',
        desc: 'Fights free radicals, slows ageing, and boosts immunity naturally.',
        gradient: 'from-amber-400 to-orange-500',
    },
];

const BENEFITS = [
    { emoji: '💪', text: 'High Protein (9.7g/100g)' },
    { emoji: '🦴', text: 'Rich in Calcium' },
    { emoji: '🧠', text: 'Treats Insomnia' },
    { emoji: '🔥', text: 'Anti-inflammatory' },
    { emoji: '🌿', text: 'Gluten-free & Vegan' },
    { emoji: '⚖️', text: 'Aids Weight Loss' },
    { emoji: '❤️', text: 'Good for Heart' },
    { emoji: '🩸', text: 'Low Glycemic Index' },
];

export default function WhyChoose() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-label mb-4 inline-flex">Why Apan Makhana</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                            Nature's Perfect Superfood
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-base max-w-lg mx-auto">
                            Hand-picked from Mithila's finest farms — certified, natural, and packed with goodness
                        </p>
                    </motion.div>
                </div>

                {/* Reason cards — 2x2 mobile, 4 desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
                    {REASONS.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08 }}
                            className="card p-4 sm:p-5 text-center group"
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${r.gradient} 
                              flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                <r.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="text-sm sm:text-base font-display font-bold text-gray-900 mb-1">{r.title}</h3>
                            <p className="text-[11px] sm:text-xs font-body text-gray-500 leading-relaxed">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Health benefits — inline with product image */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="relative bg-gradient-to-br from-brand-50 to-cream-100 rounded-2xl sm:rounded-3xl 
                     p-5 sm:p-8 lg:p-10 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                        {/* Benefits grid */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-1">
                                Health Benefits
                            </h3>
                            <p className="text-xs sm:text-sm font-body text-gray-500 mb-4">
                                Why nutritionists recommend makhana
                            </p>
                            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                                {BENEFITS.map((b, i) => (
                                    <motion.div
                                        key={b.text}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + i * 0.04 }}
                                        className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2.5 
                               rounded-lg border border-white/80"
                                    >
                                        <span className="text-sm flex-shrink-0">{b.emoji}</span>
                                        <span className="text-[11px] sm:text-xs font-body font-medium text-gray-700">{b.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Product benefits image */}
                        <div className="flex justify-center">
                            <img
                                src="./product-benefits.jpeg"
                                alt="Benefits of Apan Makhana"
                                className="w-[80%] sm:w-[70%] lg:w-full max-w-[380px] rounded-xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
