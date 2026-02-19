import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Award, ShieldCheck } from 'lucide-react';

const FEATURES = [
    {
        icon: Leaf,
        title: '100% Natural',
        desc: 'No artificial ingredients, no preservatives — pure fox nuts from nature.',
        gradient: 'from-emerald-400 to-emerald-600',
        bg: 'bg-emerald-50',
    },
    {
        icon: Heart,
        title: 'Heart Healthy',
        desc: 'Low in fat, cholesterol-free, rich in magnesium for heart wellness.',
        gradient: 'from-rose-400 to-rose-600',
        bg: 'bg-rose-50',
    },
    {
        icon: Award,
        title: 'Premium Grade',
        desc: 'Hand-picked from Mithila\'s finest — only the best reach your table.',
        gradient: 'from-amber-400 to-amber-600',
        bg: 'bg-amber-50',
    },
    {
        icon: ShieldCheck,
        title: 'FSSAI Certified',
        desc: 'Tested & certified to meet India\'s highest food safety standards.',
        gradient: 'from-blue-400 to-blue-600',
        bg: 'bg-blue-50',
    },
];

export default function Features() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="features" className="py-16 sm:py-20 lg:py-28 gradient-section-alt" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-badge mb-4 inline-flex">Why Choose Us</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">Why Choose</span>
                            <span className="text-gray-800"> Apan Makhana?</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            Premium fox nuts, carefully selected from Mithila's farms to your home
                        </p>
                    </motion.div>
                </div>

                {/* Cards — 2x2 grid on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group card-premium p-4 sm:p-6 text-center"
                        >
                            <div className={`w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl 
                              bg-gradient-to-br ${f.gradient} flex items-center justify-center 
                              shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-display font-bold text-gray-800 mb-1 sm:mb-2">
                                {f.title}
                            </h3>
                            <p className="text-gray-500 font-body text-xs sm:text-sm leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
