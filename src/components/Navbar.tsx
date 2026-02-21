import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NAV_ITEMS = ['home', 'product', 'stores', 'recipes', 'faq'] as const;
const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const onScroll = useCallback(() => setScrolled(window.scrollY > 40), []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const labels: Record<string, string> = {
        home: 'Home', product: 'Product', stores: 'Stores', recipes: 'Recipes', faq: 'FAQ',
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'glass-nav shadow-sm py-2.5' : 'bg-transparent py-3 sm:py-4'
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link to="home" smooth className="cursor-pointer flex-shrink-0">
                        <img src="./logo-bg.png" alt="Apan Makhana" className="h-9 sm:h-11 lg:h-12 w-auto" />
                    </Link>

                    {/* Desktop */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item}
                                to={item}
                                smooth
                                offset={-70}
                                spy
                                activeClass="!text-brand-600 !font-semibold"
                                className="px-3.5 py-2 text-sm font-medium text-gray-500 hover:text-brand-600 
                           cursor-pointer transition-colors rounded-lg hover:bg-brand-50/40 font-body"
                            >
                                {labels[item]}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <button
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold 
                         text-sm gradient-cta text-white shadow-md shadow-brand-600/15"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Buy Now
                        </button>
                    </div>

                    {/* Mobile */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-full font-body font-semibold 
                         text-xs gradient-cta text-white shadow-sm"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Buy
                        </button>
                        <button onClick={() => setOpen(true)} className="p-2 rounded-lg" aria-label="Menu">
                            <Menu className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/25 z-40 lg:hidden backdrop-blur-sm"
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed top-0 right-0 h-full w-[260px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-50">
                                <img src="./logo-bg.png" alt="Apan Makhana" className="h-8" />
                                <button onClick={() => setOpen(false)} className="p-2 rounded-lg active:bg-gray-100">
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                            <div className="flex-1 p-4 space-y-0.5">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                    >
                                        <Link
                                            to={item}
                                            smooth
                                            offset={-60}
                                            className="block px-3 py-2.5 text-[0.9rem] font-medium text-gray-700 
                                 hover:text-brand-600 rounded-lg cursor-pointer font-body"
                                            onClick={() => setOpen(false)}
                                        >
                                            {labels[item]}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-gray-50">
                                <button
                                    onClick={() => { window.open(AMAZON_URL, '_blank'); setOpen(false); }}
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full 
                             font-body font-semibold text-sm gradient-cta text-white"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Buy on Amazon
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
