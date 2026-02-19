import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'Priya Sharma',
        location: 'New Delhi',
        rating: 5,
        text: 'Best makhana I\'ve ever tasted! The quality is outstanding — you can tell they\'re hand-picked. My whole family loves snacking on these.',
        avatar: '👩',
    },
    {
        name: 'Rahul Verma',
        location: 'Gurgaon',
        rating: 5,
        text: 'I was looking for healthy snack alternatives and Apan Makhana is exactly what I needed. Great protein content and so crunchy!',
        avatar: '👨',
    },
    {
        name: 'Anita Jha',
        location: 'Noida',
        rating: 5,
        text: 'The kheer recipe on the pack was amazing! I make it every weekend now. Premium quality makhana at a fair price.',
        avatar: '👩‍🦱',
    },
    {
        name: 'Vikash Kumar',
        location: 'Delhi',
        rating: 5,
        text: 'Being from Bihar, I know good makhana. Apan Makhana brings authentic Mithila taste. FSSAI certified gives me confidence too.',
        avatar: '🧑',
    },
];

export default function Testimonials() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-16 sm:py-20 lg:py-28 gradient-section" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">Customer Love</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">What Our Customers</span>
                            <span className="text-gray-800"> Say</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            Join 1000+ happy customers who trust Apan Makhana
                        </p>
                    </motion.div>
                </div>

                {/* Testimonial cards — horizontal scroll on mobile */}
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-5 px-5 sm:-mx-0 sm:px-0 
                        snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 
                        sm:overflow-visible">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex-shrink-0 w-[280px] sm:w-auto snap-start card-premium p-5 sm:p-6 
                         flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-amber-400" fill="#fbbf24" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-sm font-body text-gray-600 leading-relaxed flex-1 mb-4">
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                <span className="text-2xl">{t.avatar}</span>
                                <div>
                                    <p className="text-sm font-body font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-xs font-body text-gray-400">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
