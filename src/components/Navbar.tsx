import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NAV_ITEMS = ['home', 'features', 'benefits', 'recipes', 'stores', 'faq'] as const;
const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 40);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'glass-strong shadow-lg shadow-black/[0.03] py-2'
                        : 'bg-transparent py-3 sm:py-4'
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="home" smooth className="cursor-pointer flex-shrink-0">
                        <motion.img
                            src="./logo-bg.png"
                            alt="Apan Makhana"
                            className="h-10 sm:h-12 lg:h-14 w-auto"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item}
                                to={item}
                                smooth
                                offset={-80}
                                spy
                                activeClass="text-brand-600 !font-semibold"
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 
                           capitalize cursor-pointer transition-colors rounded-lg
                           hover:bg-brand-50/50 font-body"
                            >
                                {item === 'faq' ? 'FAQ' : item}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold 
                         text-sm gradient-cta text-white shadow-md"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Buy on Amazon
                        </motion.button>
                    </div>

                    {/* Mobile menu/CTA group */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full font-body font-semibold 
                         text-xs gradient-cta text-white shadow-sm"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Buy
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-xl hover:bg-brand-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 lg:hidden 
                         shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                <img src="./logo-bg.png" alt="Apan Makhana" className="h-9" />
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="flex-1 p-4 space-y-0.5">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                    >
                                        <Link
                                            to={item}
                                            smooth
                                            offset={-60}
                                            className="block px-4 py-3 text-base font-medium text-gray-700 
                                 hover:text-brand-600 active:bg-brand-50 rounded-xl capitalize 
                                 cursor-pointer font-body"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item === 'faq' ? 'FAQ' : item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        window.open(AMAZON_URL, '_blank');
                                        setMobileOpen(false);
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full 
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
