import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, X, ChevronLeft, ChevronRight, ChevronDown, Store } from 'lucide-react';

// Distribution regions
const REGIONS = [
    { name: 'Delhi NCR', detail: '250+ Premium Outlets', emoji: '🏙️', highlight: true },
    { name: 'Gujarat & Rajasthan', detail: 'Ration Handloom Stores', emoji: '🏪' },
    { name: 'UP, Haryana & Uttarakhand', detail: 'Rozana Rural E-commerce', emoji: '🛒' },
    { name: 'Kashmir', detail: 'Direct Distribution', emoji: '🏔️' },
    { name: 'Himachal Pradesh', detail: 'Direct Distribution', emoji: '⛰️' },
    { name: 'Bhopal, MP', detail: 'Direct Distribution', emoji: '🏛️' },
    { name: 'Pan-India', detail: 'Amazon India', emoji: '📦' },
];

// Featured store partners
const FEATURED_STORES = [
    'BKD Store',
    'Raj Mandir',
    'Subham Store',
    'Sodhi Super Mart, Gurgaon',
    'Garg Dastak, Gurgaon',
    'Apka Bazaar, Delhi',
    'Aggarwal Super Mart, Delhi',
    'Max Kart, Delhi',
    'Kia Bazaar, Delhi',
];

// Gallery — mix of store shelves + team-customer photos
const GALLERY = [
    { src: './store-1.jpeg', label: 'Store Shelf Display' },
    { src: './team-2.jpeg', label: 'Happy Customer' },
    { src: './store-10.jpeg', label: 'Premium Outlet' },
    { src: './team-5.jpeg', label: 'Customer Interaction' },
    { src: './store-3.jpeg', label: 'Retail Display' },
    { src: './team-6.jpeg', label: 'In-Store Experience' },
    { src: './store-11.jpeg', label: 'Wholesale Display' },
    { src: './team-3.jpeg', label: 'Team with Customer' },
];

export default function NationwidePresence() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [showStores, setShowStores] = useState(false);

    const navigate = (dir: 1 | -1) =>
        setLightbox((i) => (i !== null ? (i + dir + GALLERY.length) % GALLERY.length : 0));

    return (
        <section id="stores" className="py-16 sm:py-20 lg:py-28 bg-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-label mb-4 inline-flex">
                            <MapPin className="w-3 h-3" />
                            Available Nationwide
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                            Find Us Across India
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-base max-w-lg mx-auto">
                            From Delhi's premium outlets to rural e-commerce — we're bringing Mithila's
                            finest to every corner of India
                        </p>
                    </motion.div>
                </div>

                {/* Region cards — horizontal scroll on mobile */}
                <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-3 -mx-5 px-5 sm:-mx-0 sm:px-0 
                        snap-x snap-mandatory scrollbar-hide 
                        sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:overflow-visible mb-5 sm:mb-6">
                    {REGIONS.map((r, i) => (
                        <motion.div
                            key={r.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06 }}
                            className={`flex-shrink-0 w-[160px] sm:w-auto snap-start p-3.5 sm:p-4 rounded-xl border 
                         transition-all ${r.highlight
                                    ? 'bg-brand-50 border-brand-200 shadow-sm'
                                    : 'bg-gray-50 border-gray-100'
                                }`}
                        >
                            <span className="text-xl sm:text-2xl mb-1.5 block">{r.emoji}</span>
                            <p className="text-sm sm:text-[0.9rem] font-display font-bold text-gray-900 mb-0.5">{r.name}</p>
                            <p className="text-[10px] sm:text-xs font-body text-gray-500">{r.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Store Partners — expandable */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mb-10 sm:mb-12"
                >
                    <button
                        onClick={() => setShowStores(!showStores)}
                        className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-brand-50 
                       hover:bg-brand-100 transition-colors text-sm font-body font-semibold text-brand-700"
                    >
                        <Store className="w-3.5 h-3.5" />
                        View Our Store Partners in Delhi NCR
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showStores ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {showStores && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-2xl mx-auto">
                                    {FEATURED_STORES.map((store, i) => (
                                        <motion.span
                                            key={store}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.03 }}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full 
                                 text-xs font-body font-medium text-gray-700 border border-gray-150 
                                 shadow-sm"
                                        >
                                            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                                            {store}
                                        </motion.span>
                                    ))}
                                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-body 
                                   font-semibold text-brand-600">
                                        + 240 more outlets
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Photo gallery — 2 cols mobile, 4 cols desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3"
                >
                    {GALLERY.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setLightbox(i)}
                            className="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer aspect-[3/4]"
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute bottom-2 left-2 text-white text-[10px] sm:text-xs font-body font-medium 
                               opacity-0 group-hover:opacity-100 transition-opacity">
                                {img.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                            className="absolute left-2 sm:left-4 w-9 h-9 bg-white/10 backdrop-blur rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(1); }}
                            className="absolute right-2 sm:right-4 w-9 h-9 bg-white/10 backdrop-blur rounded-full 
                         flex items-center justify-center active:bg-white/20 z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>

                        <motion.img
                            key={lightbox}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            src={GALLERY[lightbox].src}
                            alt={GALLERY[lightbox].label}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {GALLERY.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                                    className={`w-1.5 h-1.5 rounded-full transition ${i === lightbox ? 'bg-white' : 'bg-white/30'
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
