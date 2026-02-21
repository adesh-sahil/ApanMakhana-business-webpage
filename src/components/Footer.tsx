import { Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';
const INSTAGRAM_URL = 'https://www.instagram.com/apan.makhana/';

export default function Footer() {
    return (
        <footer className="gradient-dark text-white">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <img src="./logo-bg.png" alt="Apan Makhana" className="h-10 mb-3 brightness-0 invert opacity-80" />
                        <p className="text-sm text-gray-400 font-body leading-relaxed max-w-xs">
                            Premium hand-picked fox nuts from Mithila, Bihar. The taste of tradition,
                            the power of nutrition.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-body font-semibold text-gray-300 uppercase tracking-wider mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'Buy on Amazon', url: AMAZON_URL },
                                { label: 'Instagram', url: INSTAGRAM_URL },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 hover:text-white font-body transition-colors 
                               inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-body font-semibold text-gray-300 uppercase tracking-wider mb-3">Contact</h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-body">
                                <Phone className="w-3.5 h-3.5 mt-0.5 text-gray-500" />
                                +91-8448714959
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-body">
                                <Mail className="w-3.5 h-3.5 mt-0.5 text-gray-500" />
                                tsmfoods01@gmail.com
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400 font-body">
                                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-500" />
                                Delhi NCR, India
                            </li>
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h4 className="text-xs font-body font-semibold text-gray-300 uppercase tracking-wider mb-3">Certified</h4>
                        <div className="flex flex-wrap gap-2">
                            {['FSSAI', '100% Natural', 'Gluten Free', 'Vegan', 'Non-GMO'].map((cert) => (
                                <span
                                    key={cert}
                                    className="px-2.5 py-1 rounded-full text-[10px] font-body font-medium 
                             text-gray-400 border border-gray-700"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center 
                        justify-between gap-3">
                    <p className="text-xs text-gray-500 font-body">
                        © {new Date().getFullYear()} Apan Makhana. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center 
                         justify-center transition-colors"
                        >
                            <Instagram className="w-4 h-4 text-gray-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
