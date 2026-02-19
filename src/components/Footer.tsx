import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const NAV_LINKS = ['home', 'features', 'benefits', 'recipes', 'stores', 'faq'] as const;

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            <div className="h-1 w-full gradient-gold" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <img src="./logo-bg.png" alt="Apan Makhana" className="h-10 sm:h-12 mb-3 brightness-0 invert opacity-80" />
                        <p className="text-gray-400 font-body text-xs sm:text-sm leading-relaxed mb-3">
                            Premium fox nuts from the heart of Mithila. Nature's superfood, hand-picked and delivered to your doorstep.
                        </p>
                        <div className="flex gap-2.5">
                            <a
                                href="https://www.instagram.com/apan.makhana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center 
                           active:bg-white/10 transition-colors"
                            >
                                <Instagram className="w-3.5 h-3.5 text-gray-400" />
                            </a>
                            <a
                                href="mailto:tsmfoods01@gmail.com"
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center 
                           active:bg-white/10 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5 text-gray-400" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-body font-semibold uppercase tracking-wider text-gray-300 mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item}
                                        smooth
                                        offset={-60}
                                        className="text-gray-400 hover:text-white text-xs sm:text-sm font-body cursor-pointer 
                               transition-colors capitalize"
                                    >
                                        {item === 'faq' ? 'FAQ' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-body font-semibold uppercase tracking-wider text-gray-300 mb-3">
                            Contact
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-start gap-2">
                                <Mail className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:tsmfoods01@gmail.com" className="text-gray-400 hover:text-white text-xs sm:text-sm font-body transition-colors break-all">
                                    tsmfoods01@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <a href="tel:+918448714959" className="text-gray-400 hover:text-white text-xs sm:text-sm font-body transition-colors">
                                    +91-8448714959
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-xs sm:text-sm font-body">
                                    173 B/S, Vani Vihar,<br />New Delhi - 110059
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications — hidden on small mobile, visible on sm+ */}
                    <div className="hidden sm:block">
                        <h4 className="text-xs font-body font-semibold uppercase tracking-wider text-gray-300 mb-3">
                            Certifications
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm font-body text-gray-400">
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                                FSSAI Certified
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                                100% Vegetarian
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                                Non-GMO Verified
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                                Made in India 🇮🇳
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-800 flex items-center justify-between">
                    <p className="text-gray-500 text-[10px] sm:text-xs font-body">
                        © {new Date().getFullYear()} Apan Makhana — TSM Enterprises
                    </p>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center 
                       active:bg-white/10 transition-colors"
                    >
                        <ArrowUp className="w-3.5 h-3.5 text-gray-400" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
