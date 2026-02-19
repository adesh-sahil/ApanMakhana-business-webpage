import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Mail, ShoppingCart } from 'lucide-react';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';
const INSTAGRAM_URL = 'https://www.instagram.com/apan.makhana/';
const EMAIL = 'tsmfoods01@gmail.com';

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoNnptMC0zMHY2aC02VjRoNnptMCAxNXY2aC02di02aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

            <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-brand-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-gold-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs 
                           font-body font-semibold tracking-wider uppercase bg-white/10 text-white/80 
                           border border-white/10 mb-5">
                        Get in Touch
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-white mb-3">
                        Ready to Snack
                        <span className="text-gold-300"> Healthy?</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-white/70 font-body max-w-lg mx-auto mb-8">
                        Join thousands of health-conscious Indians who have made Apan Makhana their go-to snack.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.open(AMAZON_URL, '_blank')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 
                         rounded-full font-body font-semibold text-sm sm:text-base bg-white text-brand-700 
                         shadow-xl active:shadow-lg transition-shadow"
                        >
                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                            Buy on Amazon
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.open(INSTAGRAM_URL, '_blank')}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 
                         rounded-full font-body font-semibold text-sm sm:text-base 
                         bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                         shadow-lg active:shadow-md transition-shadow"
                        >
                            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            Follow on Instagram
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => window.open(`mailto:${EMAIL}`)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 
                         rounded-full font-body font-semibold text-sm sm:text-base bg-white/10 text-white 
                         border border-white/20 active:bg-white/20 transition-all"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
