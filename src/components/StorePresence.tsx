import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

const STORE_IMAGES = [
    { src: './store-1.jpeg', alt: 'Apan Makhana at retail store shelf display' },
    { src: './store-2.jpeg', alt: 'Apan Makhana supermarket aisle display' },
    { src: './store-3.jpeg', alt: 'Apan Makhana store front display' },
    { src: './store-10.jpeg', alt: 'Apan Makhana premium store shelf' },
    { src: './store-11.jpeg', alt: 'Apan Makhana Delhi outlet' },
    { src: './store-13.jpeg', alt: 'Apan Makhana wholesale display' },
];

const STATS = [
    { value: '10+', label: 'Retail Stores' },
    { value: 'Delhi', label: 'NCR Region' },
    { value: '1000+', label: 'Happy Customers' },
];

export default function StorePresence() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + STORE_IMAGES.length) % STORE_IMAGES.length : 0));
    const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % STORE_IMAGES.length : 0));

    return (
        <section id="stores" className="py-16 sm:py-20 lg:py-28 gradient-section-alt" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">
                            <MapPin className="w-3 h-3" />
                            Available Near You
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">Find Us In Stores</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            Grab your pack from a store near you in Delhi NCR!
                        </p>
                    </motion.div>
                </div>

                {/* Image grid — 2 cols on mobile, 3 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5">
                    {STORE_IMAGES.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            onClick={() => setLightboxIndex(i)}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer 
                         aspect-[3/4]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 translate-y-3 opacity-0 
                              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-white font-body text-xs sm:text-sm font-medium">📍 Delhi NCR</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto"
                >
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold gradient-text-brand">{stat.value}</p>
                            <p className="text-[10px] sm:text-xs font-body text-gray-500 mt-0.5">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-2 sm:left-4 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-2 sm:right-4 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>

                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            src={STORE_IMAGES[lightboxIndex].src}
                            alt={STORE_IMAGES[lightboxIndex].alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-xl sm:rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {STORE_IMAGES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                                    className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
