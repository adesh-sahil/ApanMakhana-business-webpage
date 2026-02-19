import { motion } from 'framer-motion';
import { ShoppingCart, Instagram, Star, Award, Leaf, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';
const INSTAGRAM_URL = 'https://www.instagram.com/apan.makhana/';

const BADGES = [
    { icon: Star, label: 'Premium Quality', color: 'text-amber-500', fill: '#f59e0b' },
    { icon: Award, label: 'FSSAI Certified', color: 'text-brand-500', fill: 'none' },
    { icon: Leaf, label: '100% Natural', color: 'text-emerald-500', fill: 'none' },
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[100svh] gradient-hero overflow-hidden flex flex-col">
            {/* Background orbs */}
            <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-brand-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gold-200/15 rounded-full blur-3xl" />

            <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-28 lg:pt-32 sm:pb-12 lg:pb-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                    {/* Content — appears first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
                        >
                            <span className="section-badge">
                                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                                Nature's Superfood
                            </span>
                        </motion.div>

                        <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-5">
                            <span className="gradient-text-brand">The Taste of</span>
                            <br />
                            <span className="gradient-text-brand">Mithilaa</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-body leading-relaxed 
                          max-w-lg mx-auto lg:mx-0 mb-5 sm:mb-6">
                            Premium hand-picked fox nuts, packed with essential nutrients.
                            Rich in protein & antioxidants — nature's perfect snack.
                        </p>

                        {/* Badges — horizontal scroll on mobile */}
                        <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start mb-5 sm:mb-7 
                            overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                            {BADGES.map((badge, i) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full 
                             shadow-card border border-gray-100 font-body text-xs sm:text-sm font-medium 
                             text-gray-700 whitespace-nowrap flex-shrink-0"
                                >
                                    <badge.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${badge.color}`} fill={badge.fill} />
                                    {badge.label}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-3 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => window.open(AMAZON_URL, '_blank')}
                                className="flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-body 
                           font-semibold text-sm sm:text-base gradient-cta text-white shadow-lg 
                           active:shadow-md transition-shadow"
                            >
                                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                Buy on Amazon
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => window.open(INSTAGRAM_URL, '_blank')}
                                className="flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-body 
                           font-semibold text-sm sm:text-base bg-white text-gray-700 border border-gray-200 
                           shadow-card active:shadow-sm transition-shadow"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                                <span className="hidden sm:inline">Follow Us</span>
                                <span className="sm:hidden">Instagram</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Product image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex justify-center items-center order-2 mt-2 lg:mt-0"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[75%] h-[75%] bg-gradient-to-br from-brand-200/25 to-gold-200/15 rounded-full blur-3xl" />
                        </div>

                        <motion.img
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            src="./product-front.jpeg"
                            alt="Apan Makhana Premium Fox Nuts - 250g Pack"
                            className="relative w-[55%] sm:w-[50%] lg:w-[65%] max-w-[340px] rounded-3xl shadow-glass-lg"
                        />

                        {/* Floating badge — bottom right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 lg:right-2 xl:right-8"
                        >
                            <div className="bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl 
                              shadow-glass border border-white/60 flex items-center gap-2">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-cta flex items-center justify-center">
                                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs font-body font-semibold text-gray-800">FSSAI Certified</p>
                                    <p className="text-[9px] sm:text-[10px] font-body text-gray-500">Premium Quality</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating badge — top left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                            className="absolute top-4 left-0 sm:top-8 sm:left-2 lg:left-0"
                        >
                            <div className="bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl 
                              shadow-glass border border-white/60 flex items-center gap-2">
                                <span className="text-sm sm:text-base">🌿</span>
                                <div>
                                    <p className="text-[10px] sm:text-xs font-body font-semibold text-gray-800">100% Natural</p>
                                    <p className="text-[9px] sm:text-[10px] font-body text-gray-500">No preservatives</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <Link to="trust" smooth offset={-40} className="cursor-pointer">
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex justify-center pb-4 sm:pb-6"
                >
                    <div className="flex flex-col items-center gap-1 text-brand-400">
                        <span className="text-[10px] sm:text-xs font-body font-medium tracking-wider uppercase">Explore</span>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </motion.div>
            </Link>
        </section>
    );
}
